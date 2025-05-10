"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/seperator";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/loading-spinner";
import { useGetCartQuery, useRemoveFromCartMutation, Cart, CartItem, useClearCartMutation } from "@/store/slices/gemstoneApi";
import { useAppSelector } from "@/store/hooks";

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: "Round Brilliant Diamond",
    price: 5299,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
    type: "Diamond",
    specs: "1.25 Carat, D Color, VS1 Clarity",
    seller: "Diamond Specialists Inc.",
  },
  {
    id: 2,
    name: "Blue Sapphire Oval",
    price: 3450,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
    type: "Sapphire",
    specs: "2.0 Carat, AAA Quality",
    seller: "Sapphire Experts",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isLoading, setIsLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const { data: cart }: { data: Cart | undefined } = useGetCartQuery();
  const [removeFromCart] = useRemoveFromCartMutation();
  const [clearCart] = useClearCartMutation();

  

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (!couponCode) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setCouponApplied(true);
      setIsLoading(false);
    }, 1000);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = couponApplied ? subtotal * 0.1 : 0; // 10% discount
  const shipping = 50;
  const tax = (subtotal - discount) * 0.08; // 8% tax
  const total = subtotal - discount + shipping + tax;

  if (cart?.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="rounded-full bg-blue-100 p-6 text-blue-600">
            <ShoppingCart className="h-12 w-12" />
          </div>
          <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
          <p className="max-w-md text-gray-600">
            Looks like you haven't added any gemstones to your cart yet. Explore
            our collection to find the perfect gemstone for you.
          </p>
          <Button className="mt-4 bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/gemstones">Browse Gemstones</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" className="mb-4 gap-2" asChild>
          <Link href="/gemstones">
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
        <p className="text-gray-500">
          Review and modify your selected gemstones
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Cart Items ({cartItems.length})</CardTitle>
                <CardDescription>
                  Items you've added to your cart
                </CardDescription>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-500 hover:text-red-700"
                onClick={() => clearCart()}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Cart
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cart?.items.map((item : CartItem) => (
                  <div
                    key={item.productId}
                    className="flex flex-col rounded-lg border p-4 sm:flex-row"
                  >
                    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                      <img
                        src={item.product?.images[0].url || "/placeholder.svg"}
                        alt={item.product?.name || "Product Image"}
                        className="h-24 w-24 rounded-md object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex flex-col justify-between sm:flex-row">
                        <div>
                          <h3 className="text-lg font-medium">{item.product?.name}</h3>
                          <p className="text-sm text-gray-500">{item.product?.description}</p>
                          <p className="text-sm text-gray-500">
                            Seller: {item.product?.user?.firstName} {item.product?.user?.lastName}
                          </p>
                        </div>
                        <div className="mt-2 text-right sm:mt-0">
                          <p className="text-lg font-bold text-blue-700">
                            ${item.price.toLocaleString()}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700"
                            onClick={() => clearCart()}
                          >
                            <Trash2 className=" h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your order details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>-${discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    ${shipping.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (8%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold text-blue-700">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* <div className="mt-4 rounded-lg border p-4">
                  <h4 className="mb-2 font-medium">Apply Coupon Code</h4>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={couponApplied}
                    />
                    <Button
                      onClick={applyCoupon}
                      disabled={!couponCode || couponApplied || isLoading}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isLoading ? <LoadingSpinner size="sm" /> : "Apply"}
                    </Button>
                  </div>
                  {couponApplied && (
                    <p className="mt-2 text-sm text-green-600">
                      Coupon applied successfully!
                    </p>
                  )}
                </div> */}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
