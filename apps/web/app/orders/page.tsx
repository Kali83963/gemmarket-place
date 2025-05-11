"use client";

import { useGetOrdersQuery } from "@/store/slices/gemstoneApi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/seperator";
import { Badge } from "@/components/ui/badge";
import { Package, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function OrdersPage() {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex h-[50vh] items-center justify-center">
          <div className="text-center">
            <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
            <p className="text-gray-600">Loading your orders...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex h-[50vh] items-center justify-center">
          <div className="text-center">
            <p className="text-red-600">Error loading orders. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="rounded-full bg-blue-100 p-6 text-blue-600">
            <ShoppingBag className="h-12 w-12" />
          </div>
          <h1 className="text-3xl font-bold">No Orders Yet</h1>
          <p className="max-w-md text-gray-600">
            You haven't placed any orders yet. Start shopping to see your orders here.
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
      <h1 className="mb-8 text-3xl font-bold">Your Orders</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Order #{order.id.slice(0, 8)}</CardTitle>
                  <p className="text-sm text-gray-500">
                    Placed on {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <Badge
                  className={
                    order.status === "PAID"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }
                >
                  {order.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-2 font-medium">Order Items</h3>
                    <div className="space-y-2">
                      {order.orderItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Package className="h-4 w-4 text-gray-500" />
                            <span>
                              {item.product?.name} x {item.quantity}
                            </span>
                          </div>
                          <span className="font-medium">
                            ${(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>${(order.totalAmount - order.shippingCost - order.tax).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span>${order.shippingCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax</span>
                        <span>${order.tax.toLocaleString()}</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span className="text-blue-700">${order.totalAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
