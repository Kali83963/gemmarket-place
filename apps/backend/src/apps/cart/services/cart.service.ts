import prisma from "@/config/prisma";

export class CartService {
  async createCart(userId: string) {
    return await prisma.cart.create({
      data: {
        userId,
      },
    });
  }

  async getCart(userId: string) {
    return await prisma.cart.findUnique({
      where: { userId: userId },
      include: {
        items: {
          include: {
            product: {
              include: {
                images: {
                  select: {
                    url: true,
                  },
                },
              },
            }, // Include Gemstone details
          },
        },
      },
    });
  }

  async addItemToCart(
    userId: string,
    itemData: {
      productId: number;
      quantity: number;
      price: number;
      color?: string;
      size?: string;
    }
  ) {
    console.log(itemData);
    const cart = await prisma.cart.findFirst({
      where: {
        user: {
          id: userId,
        },
      },
    });
    const cartId = cart.id;

    const productExist = await prisma.cartItem.findFirst({
      where: {
        cart: {
          id: cart.id,
        },
        productId: itemData.productId,
      },
    });

    if (productExist) {
      throw new Error("Product already exists in cart");

      // const quantity =
      //   itemData.quantity < 0
      //     ? productExist.quantity - itemData.quantity
      //     : productExist.quantity + itemData.quantity;
      // return await prisma.cartItem.update({
      //   where: {
      //     cartId_productId_color_size: {
      //       cartId,
      //       productId: itemData.productId,
      //       color: itemData.color,
      //       size: itemData.size,
      //     },
      //   },
      //   data: {
      //     quantity: quantity,
      //   },
      // });
    }
    return await prisma.cartItem.create({
      data: {
        cartId,
        ...itemData,
      },
    });
  }

  async removeItemFromCart(userId: string, itemId: string) {
    return await prisma.cartItem.delete({
      where: {
        cart: {
          userId: userId,
        },
        id: itemId,
      },
    });
  }

  async clearCart(cartId: string) {
    return await prisma.cartItem.deleteMany({
      where: { cartId },
    });
  }
}
