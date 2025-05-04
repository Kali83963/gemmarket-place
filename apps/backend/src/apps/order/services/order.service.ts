import prisma from "@/config/prisma";

export class OrderService {
  async createOrder(
    userId: string,
    data: {
      shipping: any;
      payment: any;
      items: any[];
      shippingCost: number;
      tax: number;
    }
  ) {
    const { shipping, payment, items, shippingCost, tax } = data;

    const totalAmount =
      items.reduce((sum, i) => sum + i.price * i.quantity, 0) +
      shippingCost +
      tax;

    const order = await prisma.$transaction(async (tx) => {
      const cart = await tx.cart.findFirst({
        where: {
          userId: userId, // Query by userId instead of nested user object
        },
        include: {
          items: true,
        },
      });

      const { cardNumber, ...restPayment } = payment;

      const createdOrder = await tx.order.create({
        data: {
          totalAmount,
          shippingCost,
          tax,
          shippingInfo: {
            create: shipping,
          },
          paymentInfo: {
            create: {
              ...restPayment,
              cardLast4: cardNumber.slice(-4),
            },
          },
          user: {
            connect: { id: userId },
          },
          orderItems: {
            create: cart.items.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
              color: item.color,
              size: item.size,
            })),
          },
        },
      });

      for (const item of items) {
        const gemstone = await tx.gemstone.findUnique({
          where: { id: item.productId },
        });
        if (gemstone) {
          const newQuantity = gemstone.quantity - item.quantity;
          await tx.gemstone.update({
            where: { id: item.productId },
            data: {
              quantity: newQuantity,
              status: newQuantity <= 0 ? "SOLD" : undefined,
            },
          });
        }
      }

      await tx.cartItem.deleteMany({
        where: { cartId: cart.id },
      });

      return createdOrder;
    });

    return order;
  }

  async getOrderByUser(userId: string) {
    return await prisma.order.findMany({
      where: { userId },
      include: {
        user: true,
        shippingInfo: true,
        paymentInfo: true,
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });
  }
  async getOrder(orderId: string) {
    return await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        user: true,
        shippingInfo: true,
        paymentInfo: true,
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async getAllOrders() {
    return await prisma.order.findMany({
      include: {
        user: true,
        shippingInfo: true,
        paymentInfo: true,
        orderItems: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  async getOrdersByUserId(id: string) {
    return await prisma.order.findMany({
      where: {
        user: {
          id: id,
        },
      },
      include: {
        user: true,
        orderItems: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async getAnalytics() {
    //   const [revenue, totalOrders, monthlyStats] = await prisma.$transaction([
    //       prisma.order.aggregate({
    //           _sum: { totalAmount: true },
    //           _count: true,
    //       }),
    //       prisma.order.count(),
    //       prisma.order.groupBy({
    //       })
    //       prisma.order.groupBy({
    //           by: ["createdAt"],
    //           _sum: { totalAmount: true },
    //           where: {
    //               createdAt: {
    //                   gte: new Date(new Date().getFullYear(), 0, 1), // From Jan this year
    //               },
    //           },
    //       }),
    //   ]);
    //   // Filter monthlyStats to only include records from this year
    //   const currentYear = new Date().getFullYear();
    //   const filteredMonthlyStats = monthlyStats.filter((stat) => {
    //       const statDate = new Date(stat.createdAt);
    //       return statDate.getFullYear() === currentYear;
    //   });
    //   const customersCount = await prisma.user.count();
    //   return {
    //       totalRevenue: revenue._sum.totalAmount || 0,
    //       totalOrders,
    //       monthlyStats: filteredMonthlyStats,
    //       totalCustomers: customersCount,
    //   };
  }
}
