import prisma from "@/config/prisma";
import Stripe from "stripe";

export class OrderService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});
  }

  async createOrder(
    userId: string,
    data: {
      shipping: any;
      payment: {
        token: string; // Stripe token
        nameOnCard: string;
        expiry: string;
      };
      items: any[];
      shippingCost: number;
      tax: number;
    }
  ) {
    const { shipping, payment, shippingCost, tax } = data;

    const order = await prisma.$transaction(
      async (tx) => {
        const cart = await tx.cart.findFirst({
          where: {
            userId: userId,
          },
          include: {
            items: true,
          },
        });

        const totalAmount =
          cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0) +
          shippingCost +
          tax;

        const paymentMethod = await this.stripe.paymentMethods.create({
          type: "card",
          card: {
            token: payment.token,
          },
        });

        // Create Stripe payment intent
        const paymentIntent = await this.stripe.paymentIntents.create({
          amount: Math.round(totalAmount * 100),
          currency: "usd",
          automatic_payment_methods: {
            enabled: true,
            allow_redirects: "never",
          },
          payment_method: paymentMethod.id,
          confirm: true,
          expand: ["payment_method"],
        });

        const stripeCard = await this.stripe.tokens.retrieve(payment.token);

        // Create order with payment info
        const createdOrder = await tx.order.create({
          data: {
            totalAmount,
            shippingCost,
            tax,
            status: "PAID", // Update status since payment is confirmed
            shippingInfo: {
              create: shipping,
            },
            paymentInfo: {
              create: {
                nameOnCard: payment.nameOnCard,
                cardLast4: stripeCard.card?.last4 || "",
                expiry:
                  stripeCard.card?.exp_month + "/" + stripeCard.card?.exp_year,
                method: "STRIPE",
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
          include: {
            orderItems: {
              include: {
                product: true,
              },
            },
          },
        });

        // Create transaction record
        await tx.transaction.create({
          data: {
            orderId: createdOrder.id,
            sellerId: userId,
            totalAmount,
            platformFee: totalAmount * 0.1, // 10% platform fee
            sellerPayout: totalAmount * 0.9, // 90% to seller
            status: "SUCCESS",
          },
        });

        // Update gemstone quantities
        for (const item of cart.items) {
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

        // Clear cart
        await tx.cartItem.deleteMany({
          where: { cartId: cart.id },
        });

        return {
          ...createdOrder,
          paymentIntentId: paymentIntent.id,
        };
      },
      {
        timeout: 10000, // Increase timeout to 10 seconds
      }
    );

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
