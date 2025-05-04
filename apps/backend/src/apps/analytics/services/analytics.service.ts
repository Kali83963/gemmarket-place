import prisma from "@/config/prisma";
import {
  eachDayOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
  eachYearOfInterval,
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
    const [
      totalGemstones,
      soldGemstones,
      totalRevenue,
      gemstonesByStatus,
      usersByRole,
      totalOrdersByStatus,
      activeGemstones,
      topSellingGemstones,
      monthlySales,
      pendingCertifications,
    ] = await Promise.all([
      prisma.gemstone.count(),
      prisma.gemstone.count({ where: { status: "SOLD" } }),
      prisma.order.aggregate({ _sum: { totalAmount: true } }),
      prisma.gemstone.groupBy({
        by: ["status"],
        _count: true,
      }),
      prisma.user.groupBy({
        by: ["role"],
        _count: true,
      }),
      prisma.order.groupBy({
        by: ["status"],
        _count: true,
      }),
      prisma.gemstone.count({ where: { isActive: true } }),
      prisma.orderItem.groupBy({
        by: ["productId"],
        _sum: { quantity: true },
        orderBy: { _sum: { quantity: "desc" } },
        take: 5,
      }),
      prisma.order.groupBy({
        by: ["createdAt"],
        _sum: { totalAmount: true },
      }),
      prisma.gemstone.count({ where: { certificationStatus: "PENDING" } }),
    ]);

    return {
      totalGemstones,
      soldGemstones,
      totalRevenue: totalRevenue._sum.totalAmount || 0,
      gemstonesByStatus,
      usersByRole,
      totalOrdersByStatus,
      activeGemstones,
      topSellingGemstones,
      monthlySales,
      pendingCertifications,
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
        fromDate = subDays(today, 29); // Last 30 days including today
        bucketType = "day";
    }

    // Fetch data
    const [orders, users] = await Promise.all([
      prisma.order.findMany({
        where: { createdAt: { gte: fromDate, lte: today } },
        select: { createdAt: true },
      }),
      prisma.user.findMany({
        where: { createdAt: { gte: fromDate, lte: today } },
        select: { createdAt: true },
      }),
    ]);

    // Generate time buckets
    let timeBuckets: string[] = [];

    if (bucketType === "day") {
      timeBuckets = eachDayOfInterval({ start: fromDate, end: today }).map(
        (date) => format(date, "yyyy-MM-dd")
      );
    } else if (bucketType === "month") {
      timeBuckets = eachMonthOfInterval({ start: fromDate, end: today }).map(
        (date) => format(date, "MMM yyyy")
      );
    } else if (bucketType === "year") {
      timeBuckets = eachYearOfInterval({ start: fromDate, end: today }).map(
        (date) => format(date, "yyyy")
      );
    }

    // Group by time bucket
    const bucketData = (
      items: { createdAt: Date }[],
      formatter: (d: Date) => string
    ) => {
      const counts: Record<string, number> = {};
      items.forEach((item) => {
        const key = formatter(item.createdAt);
        counts[key] = (counts[key] || 0) + 1;
      });

      return timeBuckets.map((label) => ({
        label,
        value: counts[label] || 0,
      }));
    };

    const formatKey = (date: Date) => {
      if (bucketType === "day") return format(date, "yyyy-MM-dd");
      if (bucketType === "month") return format(date, "MMM yyyy");
      return format(date, "yyyy");
    };

    const ordersTrend = bucketData(orders, formatKey);
    const customersTrend = bucketData(users, formatKey);

    return {
      ordersTrend,
      customersTrend,
    };
  }
}
