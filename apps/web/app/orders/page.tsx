"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Download,
  Eye,
  Filter,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/seperator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Mock orders data
const orders = [
  {
    id: "ORD-7829",
    date: "Apr 05, 2023",
    status: "Delivered",
    total: 5299,
    items: [
      {
        id: 1,
        name: "Round Brilliant Diamond",
        price: 5299,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    tracking: {
      number: "TRK123456789",
      carrier: "FedEx",
      events: [
        {
          date: "Apr 05, 2023",
          time: "10:30 AM",
          status: "Delivered",
          location: "New York, NY",
        },
        {
          date: "Apr 04, 2023",
          time: "2:45 PM",
          status: "Out for Delivery",
          location: "New York, NY",
        },
        {
          date: "Apr 03, 2023",
          time: "8:20 AM",
          status: "In Transit",
          location: "Philadelphia, PA",
        },
        {
          date: "Apr 02, 2023",
          time: "6:15 PM",
          status: "Shipped",
          location: "Miami, FL",
        },
      ],
    },
  },
  {
    id: "ORD-7830",
    date: "Mar 22, 2023",
    status: "Delivered",
    total: 3450,
    items: [
      {
        id: 2,
        name: "Blue Sapphire Oval",
        price: 3450,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    tracking: {
      number: "TRK987654321",
      carrier: "UPS",
      events: [
        {
          date: "Mar 22, 2023",
          time: "11:45 AM",
          status: "Delivered",
          location: "New York, NY",
        },
        {
          date: "Mar 21, 2023",
          time: "3:30 PM",
          status: "Out for Delivery",
          location: "New York, NY",
        },
        {
          date: "Mar 20, 2023",
          time: "9:15 AM",
          status: "In Transit",
          location: "Boston, MA",
        },
        {
          date: "Mar 19, 2023",
          time: "5:45 PM",
          status: "Shipped",
          location: "Los Angeles, CA",
        },
      ],
    },
  },
  {
    id: "ORD-7831",
    date: "Feb 15, 2023",
    status: "Delivered",
    total: 7800,
    items: [
      {
        id: 3,
        name: "Emerald Cut Diamond",
        price: 7800,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    tracking: {
      number: "TRK456789123",
      carrier: "DHL",
      events: [
        {
          date: "Feb 15, 2023",
          time: "9:20 AM",
          status: "Delivered",
          location: "New York, NY",
        },
        {
          date: "Feb 14, 2023",
          time: "1:15 PM",
          status: "Out for Delivery",
          location: "New York, NY",
        },
        {
          date: "Feb 13, 2023",
          time: "7:30 AM",
          status: "In Transit",
          location: "Chicago, IL",
        },
        {
          date: "Feb 12, 2023",
          time: "4:45 PM",
          status: "Shipped",
          location: "San Francisco, CA",
        },
      ],
    },
  },
];

export default function OrdersPage() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const toggleOrderExpand = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.some((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesStatus =
      statusFilter === "all" ||
      order.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" className="mb-4 gap-2" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">My Orders</h1>
        <p className="text-gray-500">View and track your orders</p>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search orders..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="mt-6">
          {filteredOrders.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-medium">No Orders Found</h3>
                <p className="mb-4 max-w-md text-sm text-gray-500">
                  We couldn't find any orders matching your search criteria. Try
                  adjusting your filters or search term.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setStatusFilter("all");
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <Collapsible
                  key={order.id}
                  open={expandedOrder === order.id}
                  onOpenChange={() => toggleOrderExpand(order.id)}
                >
                  <Card>
                    <CardHeader className="p-4">
                      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                          <CardTitle className="text-lg">{order.id}</CardTitle>
                          <CardDescription>
                            Ordered on {order.date}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge
                            className={
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Shipped"
                                  ? "bg-blue-100 text-blue-800"
                                  : order.status === "Processing"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                            }
                          >
                            {order.status}
                          </Badge>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">Total</div>
                            <div className="font-bold text-blue-700">
                              ${order.total.toLocaleString()}
                            </div>
                          </div>
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="ml-2">
                              {expandedOrder === order.id ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                              <span className="sr-only">Toggle</span>
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                      </div>
                    </CardHeader>
                    <CollapsibleContent>
                      <CardContent className="px-4 pb-4 pt-0">
                        <Separator className="mb-4" />
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h3 className="mb-3 font-medium">Order Items</h3>
                            <div className="space-y-3">
                              {order.items.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center gap-3 rounded-lg border p-3"
                                >
                                  <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    className="h-16 w-16 rounded-md object-cover"
                                  />
                                  <div className="flex-1">
                                    <h4 className="font-medium">{item.name}</h4>
                                    <p className="text-sm text-gray-500">
                                      Item #{item.id}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <div className="font-medium">
                                      ${item.price.toLocaleString()}
                                    </div>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="mt-1 h-8 gap-1 text-blue-600"
                                    >
                                      <Eye className="h-3 w-3" />
                                      View
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="mb-3 font-medium">
                              Tracking Information
                            </h3>
                            <div className="rounded-lg border p-4">
                              <div className="mb-4 flex items-center justify-between">
                                <div>
                                  <p className="text-sm text-gray-500">
                                    Tracking Number
                                  </p>
                                  <p className="font-medium">
                                    {order.tracking.number}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">
                                    Carrier
                                  </p>
                                  <p className="font-medium">
                                    {order.tracking.carrier}
                                  </p>
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="gap-1"
                                >
                                  <Download className="h-3 w-3" />
                                  Receipt
                                </Button>
                              </div>

                              <h4 className="mb-2 text-sm font-medium">
                                Shipping Updates
                              </h4>
                              <div className="space-y-3">
                                {order.tracking.events.map((event, index) => (
                                  <div key={index} className="relative pl-6">
                                    {index <
                                      order.tracking.events.length - 1 && (
                                      <div className="absolute left-[0.4375rem] top-3 h-full w-0.5 bg-gray-200"></div>
                                    )}
                                    <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-blue-600"></div>
                                    <div>
                                      <p className="font-medium">
                                        {event.status} - {event.location}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        {event.date} at {event.time}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="processing" className="mt-6">
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 rounded-full bg-yellow-100 p-3 text-yellow-600">
                <Filter className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-medium">No Processing Orders</h3>
              <p className="mb-4 max-w-md text-sm text-gray-500">
                You don't have any orders that are currently being processed.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/gemstones">Continue Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivered" className="mt-6">
          <div className="space-y-4">
            {filteredOrders
              .filter((order) => order.status === "Delivered")
              .map((order) => (
                <Collapsible
                  key={order.id}
                  open={expandedOrder === order.id}
                  onOpenChange={() => toggleOrderExpand(order.id)}
                >
                  <Card>
                    <CardHeader className="p-4">
                      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                          <CardTitle className="text-lg">{order.id}</CardTitle>
                          <CardDescription>
                            Ordered on {order.date}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge className="bg-green-100 text-green-800">
                            Delivered
                          </Badge>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">Total</div>
                            <div className="font-bold text-blue-700">
                              ${order.total.toLocaleString()}
                            </div>
                          </div>
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="ml-2">
                              {expandedOrder === order.id ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                              <span className="sr-only">Toggle</span>
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                      </div>
                    </CardHeader>
                    <CollapsibleContent>
                      <CardContent className="px-4 pb-4 pt-0">
                        <Separator className="mb-4" />
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h3 className="mb-3 font-medium">Order Items</h3>
                            <div className="space-y-3">
                              {order.items.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center gap-3 rounded-lg border p-3"
                                >
                                  <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    className="h-16 w-16 rounded-md object-cover"
                                  />
                                  <div className="flex-1">
                                    <h4 className="font-medium">{item.name}</h4>
                                    <p className="text-sm text-gray-500">
                                      Item #{item.id}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <div className="font-medium">
                                      ${item.price.toLocaleString()}
                                    </div>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="mt-1 h-8 gap-1 text-blue-600"
                                    >
                                      <Eye className="h-3 w-3" />
                                      View
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="mb-3 font-medium">
                              Delivery Information
                            </h3>
                            <div className="rounded-lg border p-4">
                              <div className="mb-4 flex items-center justify-between">
                                <div>
                                  <p className="text-sm text-gray-500">
                                    Delivered On
                                  </p>
                                  <p className="font-medium">
                                    {order.tracking.events[0].date}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">
                                    Carrier
                                  </p>
                                  <p className="font-medium">
                                    {order.tracking.carrier}
                                  </p>
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="gap-1"
                                >
                                  <Download className="h-3 w-3" />
                                  Receipt
                                </Button>
                              </div>

                              <div className="mt-4 flex justify-end space-x-2">
                                <Button variant="outline" size="sm">
                                  Return Item
                                </Button>
                                <Button
                                  size="sm"
                                  className="bg-blue-600 hover:bg-blue-700"
                                >
                                  Buy Again
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
