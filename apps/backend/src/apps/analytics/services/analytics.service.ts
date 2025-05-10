import prisma from "@/config/prisma";
import { Role } from "@prisma/client";
import {
  eachDayOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
  eachYearOfInterval,
  endOfMonth,
  endOfYear,
  format,
  startOfMonth,
  startOfQuarter,
  startOfYear,
  subDays,
  subMonths,
  subQuarters,
  subYears,
} from "date-fns";

export class AnalyticsService {
  async getDashboardStats() {
    const now = new Date();
    const [
      totalGemstones,
      soldGemstones,
      totalOrders,
      totalUsers,
      totalRevenue,
      yearSeriesData,
      weekSeriesData,
      monthlyRevenue,
      yearlyRevenue,
    ] = await Promise.all([
      prisma.gemstone.count({ where: { isActive: true } }),
      prisma.gemstone.count({ where: { isActive: true, status: "SOLD" } }),
      prisma.order.aggregate({
        _sum: { totalAmount: true },
        where: {
          status: "PAID",
        },
      }),
      prisma.user.count({
        where: {
          isActive: true,
          role: {
            in: [Role.BUYER, Role.SELLER],
          },
        },
      }),
      prisma.transaction.aggregate({
        _sum: {
          platformFee: true,
        },
      }),
      // Monthly revenue over past 12 months
      // SUM("totalAmount") AS total
      prisma.$queryRaw<{ month: number; count: number }[]>`
        SELECT 
          EXTRACT(MONTH FROM "createdAt") AS month,
          COUNT(*) AS count
        FROM "Order"
        WHERE "status" = 'PAID'
          AND "createdAt" >= NOW() - INTERVAL '12 months'
        GROUP BY month
        ORDER BY month;
      `,

      // Weekly revenue (past 7 days)
      // SUM("totalAmount") AS total
      prisma.$queryRaw<{ day: string; count: number }[]>`
        SELECT 
          TO_CHAR("createdAt", 'Day') AS day,
          COUNT(*) AS count
        FROM "Order"
        WHERE "status" = 'PAID'
          AND "createdAt" >= NOW() - INTERVAL '7 days'
        GROUP BY day
        ORDER BY MIN("createdAt");
      `,

      // Total revenue for current month
      prisma.order.aggregate({
        where: {
          status: "PAID",
          createdAt: {
            gte: startOfMonth(now),
            lte: endOfMonth(now),
          },
        },
        _sum: {
          totalAmount: true,
        },
      }),

      // Total revenue for current year
      prisma.order.aggregate({
        where: {
          status: "PAID",
          createdAt: {
            gte: startOfYear(now),
            lte: endOfYear(now),
          },
        },
        _sum: {
          totalAmount: true,
        },
      }),
    ]);

    const yearSeries = {
      total: yearlyRevenue._sum.totalAmount || 0,
      name: "series1",
      data: Array.from({ length: 12 }, (_, i) => {
        const match = yearSeriesData.find((d) => Number(d.month) === i + 1);
        return match ? Number(match?.count) : 0;
      }),
    };

    const dayOrder = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const monthSeries = {
      total: monthlyRevenue._sum.totalAmount || 0,
      name: "series1",
      data: dayOrder.map((day) => {
        const match = weekSeriesData.find((d) => d.day.trim() === day);
        return match ? Number(match.count) : 0;
      }),
    };

    return {
      totalGemstones,
      totalUsers,
      soldGemstones,
      totalOrders: totalOrders._sum.totalAmount || 0,
      orders: { monthSeries, yearSeries },
      totalRevenue: totalRevenue._sum.platformFee || 0,
    };
  }

  //   fetchAnalyticsData = async (range: string) => {

  //     const now = new Date();
  //     let fromDate = new Date();

  //     switch (range) {
  //       case "month":
  //         fromDate = startOfMonth(now);
  //         break;
  //       case "quarter":
  //         fromDate = startOfQuarter(now);
  //         break;
  //       case "year":
  //         fromDate = startOfYear(now);
  //         break;
  //       default:
  //         fromDate = startOfMonth(now);
  //     }

  //     const [
  //       totalRevenue,
  //       totalOrders,
  //       newUsers,
  //       gemstonesAdded,
  //       orderStatusDist,
  //       gemStatusDist,
  //       certStatusDist,
  //       usersByRole,
  //       topSelling,
  //     ] = await Promise.all([
  //       prisma.order.aggregate({
  //         _sum: { totalAmount: true },
  //         where: { createdAt: { gte: fromDate } },
  //       }),
  //       prisma.order.count({
  //         where: { createdAt: { gte: fromDate } },
  //       }),
  //       prisma.user.count({
  //         where: { createdAt: { gte: fromDate } },
  //       }),
  //       prisma.gemstone.count({
  //         where: { createdAt: { gte: fromDate } },
  //       }),
  //       prisma.order.groupBy({
  //         by: ["status"],
  //         _count: true,
  //         where: { createdAt: { gte: fromDate } },
  //       }),
  //       prisma.gemstone.groupBy({
  //         by: ["status"],
  //         _count: true,
  //         where: { createdAt: { gte: fromDate } },
  //       }),
  //       prisma.gemstone.groupBy({
  //         by: ["certificationStatus"],
  //         _count: true,
  //         where: { createdAt: { gte: fromDate } },
  //       }),
  //       prisma.user.groupBy({
  //         by: ["role"],
  //         _count: true,
  //       }),
  //       prisma.orderItem.groupBy({
  //         by: ["productId"],
  //         _sum: { quantity: true, price: true },
  //         where: { order: { createdAt: { gte: fromDate } } },
  //         take: 10,
  //         orderBy: { _sum: { quantity: "desc" } },
  //       }),
  //     ]);

  //     return {
  //       metrics: {
  //         totalRevenue: totalRevenue._sum.totalAmount || 0,
  //         totalOrders,
  //         newUsers,
  //         gemstonesAdded,
  //       },
  //       charts: {
  //         orderStatusDist: orderStatusDist.map((item) => ({
  //           label: item.status,
  //           value: item._count,
  //         })),
  //         gemStatusDist: gemStatusDist.map((item) => ({
  //           label: item.status,
  //           value: item._count,
  //         })),
  //         certStatusDist: certStatusDist.map((item) => ({
  //           label: item.certificationStatus,
  //           value: item._count,
  //         })),
  //         usersByRole: usersByRole.map((item) => ({
  //           label: item.role,
  //           value: item._count,
  //         })),
  //         topSelling: topSelling.map((item) => ({
  //           productId: item.productId,
  //           quantity: item._sum.quantity || 0,
  //           revenue: item._sum.price || 0,
  //         })),
  //       },
  //     };
  //   };

  async fetchAnalyticsData(range: string) {
    const today = new Date();
    let fromDate: Date;
    let bucketType: "year" | "day" | "month";

    switch (range) {
      case "month":
        fromDate = startOfMonth(subMonths(today, 4)); // 5 months including this one
        bucketType = "month";
        break;
      case "year":
        fromDate = startOfYear(subYears(today, 9)); // 10 years including current
        bucketType = "year";
        break;
      case "day":
      default:
        fromDate = subDays(today, 6); // Last 7 days including today
        bucketType = "day";
    }

    const [orders, users] = await Promise.all([
      prisma.order.findMany({
        where: { createdAt: { gte: fromDate, lte: today } },
        select: { createdAt: true, totalAmount: true },
      }),
      prisma.user.findMany({
        where: { createdAt: { gte: fromDate, lte: today } },
        select: { createdAt: true },
      }),
    ]);

    let timeBuckets: string[] = [];

    if (bucketType === "day") {
      timeBuckets = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    } else if (bucketType === "month") {
      timeBuckets = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    } else if (bucketType === "year") {
      timeBuckets = eachYearOfInterval({ start: fromDate, end: today }).map(
        (date) => format(date, "yyyy")
      );
    }

    const bucketData = (
      items: { createdAt: Date; totalAmount?: number }[],
      formatter: (d: Date) => string,
      isCost = false
    ) => {
      const values: Record<string, number> = {};
      items.forEach((item) => {
        const key = formatter(item.createdAt);
        const amount = isCost ? item.totalAmount || 0 : 1;
        values[key] = (values[key] || 0) + amount;
      });

      const labels: string[] = [];
      const data: number[] = [];

      timeBuckets.forEach((label) => {
        labels.push(label);
        data.push(values[label] || 0);
      });
      return { data, labels };
    };

    const formatKey = (date: Date) => {
      if (bucketType === "day") return format(date, "EEE"); // e.g., "Mon"
      if (bucketType === "month") return format(date, "MMM"); // e.g., "Jan"
      return format(date, "yyyy"); // e.g., "2022"
    };

    const ordersTrend = bucketData(orders, formatKey, true);
    const customersTrend = bucketData(users, formatKey);

    return {
      ordersTrend,
      customersTrend,
    };
  }
}
