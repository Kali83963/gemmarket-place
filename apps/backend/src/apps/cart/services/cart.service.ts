import prisma from "@/config/prisma";

export class CartService {
  async createCart(userId: string) {
    return await prisma.cart.create({
      data: {
        userId,
      },
    });
  }

  async getCart(cartId: string) {
    return await prisma.cart.findUnique({
      where: { id: cartId },
      include: {
        items: {
          include: {
            product: true, // Include Gemstone details
          },
        },
      },
    });
  }

  async addItemToCart(
    cartId: string,
    itemData: {
      productId: number;
      quantity: number;
      price: number;
      color?: string;
      size?: string;
    }
  ) {
    return await prisma.cartItem.create({
      data: {
        cartId,
        productId: itemData.productId,
        quantity: itemData.quantity,
        price: itemData.price,
        color: itemData.color,
        size: itemData.size,
      },
    });
  }

  async removeItemFromCart(cartId: string, itemId: string) {
    return await prisma.cartItem.delete({
      where: {
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
