"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  Lock,
  MapPin,
  ShoppingBag,
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/seperator";
import { Textarea } from "@/components/ui/textarea";
import { LoadingSpinner } from "@/components/loading-spinner";

// Mock cart summary data
const cartSummary = {
  items: [
    {
      id: 1,
      name: "Round Brilliant Diamond",
      price: 5299,
      quantity: 1,
    },
    {
      id: 2,
      name: "Blue Sapphire Oval",
      price: 3450,
      quantity: 1,
    },
  ],
  subtotal: 8749,
  discount: 0,
  shipping: 50,
  tax: 699.92,
  total: 9498.92,
};

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<
    "shipping" | "payment" | "review"
  >("shipping");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paymentMethod: "credit-card",
  });

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("review");
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 2000);
  };

  if (isComplete) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-4">
              <Check className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold">
            Order Placed Successfully!
          </h1>
          <p className="mb-8 text-gray-600">
            Thank you for your purchase. Your order has been placed and is being
            processed. You will receive a confirmation email shortly.
          </p>
          <div className="mb-8 rounded-lg border p-6 text-left">
            <h2 className="mb-4 text-xl font-semibold">Order Details</h2>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Order Number</p>
                <p className="font-medium">
                  ORD-{Math.floor(Math.random() * 10000)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="font-medium">${cartSummary.total.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Payment Method</p>
                <p className="font-medium">Credit Card</p>
              </div>
            </div>
            <Separator className="my-4" />
            <h3 className="mb-2 font-medium">Items</h3>
            <ul className="space-y-2">
              {cartSummary.items.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span className="font-medium">
                    ${item.price.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/orders">View Orders</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" className="mb-4 gap-2" asChild>
          <Link href="/cart">
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-gray-500">Complete your purchase</p>
      </div>

      <div className="mb-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex justify-between">
            <div className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  currentStep === "shipping" ||
                  currentStep === "payment" ||
                  currentStep === "review"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <MapPin className="h-5 w-5" />
              </div>
              <span className="ml-2 font-medium">Shipping</span>
            </div>
            <div className="flex-1 border-t border-dashed border-gray-300 self-center mx-4"></div>
            <div className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  currentStep === "payment" || currentStep === "review"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <CreditCard className="h-5 w-5" />
              </div>
              <span className="ml-2 font-medium">Payment</span>
            </div>
            <div className="flex-1 border-t border-dashed border-gray-300 self-center mx-4"></div>
            <div className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  currentStep === "review"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <ShoppingBag className="h-5 w-5" />
              </div>
              <span className="ml-2 font-medium">Review</span>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {currentStep === "shipping"
                  ? "Shipping Information"
                  : currentStep === "payment"
                    ? "Payment Details"
                    : "Order Review"}
              </CardTitle>
              <CardDescription>
                {currentStep === "shipping"
                  ? "Enter your shipping address"
                  : currentStep === "payment"
                    ? "Enter your payment information"
                    : "Review your order before placing it"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {currentStep === "shipping" && (
                <form onSubmit={handleShippingSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={shippingInfo.firstName}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            firstName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={shippingInfo.lastName}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            lastName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={shippingInfo.email}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            email: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            phone: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={shippingInfo.address}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            address: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={shippingInfo.city}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            city: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input
                        id="state"
                        value={shippingInfo.state}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            state: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                      <Input
                        id="zipCode"
                        value={shippingInfo.zipCode}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            zipCode: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select
                        value={shippingInfo.country}
                        onValueChange={(value) =>
                          setShippingInfo({ ...shippingInfo, country: value })
                        }
                      >
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="US">United States</SelectItem>
                          <SelectItem value="CA">Canada</SelectItem>
                          <SelectItem value="UK">United Kingdom</SelectItem>
                          <SelectItem value="AU">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="notes">Order Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Special instructions for delivery"
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Continue to Payment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              )}

              {currentStep === "payment" && (
                <form onSubmit={handlePaymentSubmit}>
                  <div className="mb-6">
                    <RadioGroup
                      value={paymentInfo.paymentMethod}
                      onValueChange={(value) =>
                        setPaymentInfo({ ...paymentInfo, paymentMethod: value })
                      }
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2 rounded-lg border p-4">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label
                          htmlFor="credit-card"
                          className="flex-1 cursor-pointer"
                        >
                          <div className="flex items-center">
                            <CreditCard className="mr-2 h-5 w-5 text-blue-600" />
                            <span>Credit / Debit Card</span>
                          </div>
                        </Label>
                      </div>
                      {/* <div className="flex items-center space-x-2 rounded-lg border p-4">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label
                          htmlFor="paypal"
                          className="flex-1 cursor-pointer"
                        >
                          <div className="flex items-center">
                            <svg
                              className="mr-2 h-5 w-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.5 8.25H4.5C3.67157 8.25 3 8.92157 3 9.75V18.75C3 19.5784 3.67157 20.25 4.5 20.25H19.5C20.3284 20.25 21 19.5784 21 18.75V9.75C21 8.92157 20.3284 8.25 19.5 8.25Z"
                                stroke="#0070BA"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.5 15.75C7.5 15.75 8.25 15 9.75 15C11.25 15 12.75 16.5 14.25 16.5C15.75 16.5 16.5 15.75 16.5 15.75"
                                stroke="#0070BA"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16.5 8.25V6C16.5 4.34315 15.1569 3 13.5 3H4.5C3.67157 3 3 3.67157 3 4.5V6.75"
                                stroke="#0070BA"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>PayPal</span>
                          </div>
                        </Label>
                      </div> */}
                    </RadioGroup>
                  </div>

                  {paymentInfo.paymentMethod === "credit-card" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input
                          id="cardName"
                          value={paymentInfo.cardName}
                          onChange={(e) =>
                            setPaymentInfo({
                              ...paymentInfo,
                              cardName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={paymentInfo.cardNumber}
                          onChange={(e) =>
                            setPaymentInfo({
                              ...paymentInfo,
                              cardNumber: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={paymentInfo.expiryDate}
                            onChange={(e) =>
                              setPaymentInfo({
                                ...paymentInfo,
                                expiryDate: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={paymentInfo.cvv}
                            onChange={(e) =>
                              setPaymentInfo({
                                ...paymentInfo,
                                cvv: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep("shipping")}
                      className="gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Continue to Review
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              )}

              {currentStep === "review" && (
                <div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 text-lg font-medium">
                        Shipping Information
                      </h3>
                      <div className="rounded-lg border p-4">
                        <p>
                          {shippingInfo.firstName} {shippingInfo.lastName}
                        </p>
                        <p>{shippingInfo.address}</p>
                        <p>
                          {shippingInfo.city}, {shippingInfo.state}{" "}
                          {shippingInfo.zipCode}
                        </p>
                        <p>
                          {shippingInfo.country === "US"
                            ? "United States"
                            : shippingInfo.country}
                        </p>
                        <p>
                          {shippingInfo.email} | {shippingInfo.phone}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 text-lg font-medium">
                        Payment Method
                      </h3>
                      <div className="rounded-lg border p-4">
                        {paymentInfo.paymentMethod === "credit-card" ? (
                          <div className="flex items-center">
                            <CreditCard className="mr-2 h-5 w-5 text-blue-600" />
                            <div>
                              <p>Credit Card</p>
                              <p className="text-sm text-gray-500">
                                **** **** ****{" "}
                                {paymentInfo.cardNumber.slice(-4)}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <svg
                              className="mr-2 h-5 w-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.5 8.25H4.5C3.67157 8.25 3 8.92157 3 9.75V18.75C3 19.5784 3.67157 20.25 4.5 20.25H19.5C20.3284 20.25 21 19.5784 21 18.75V9.75C21 8.92157 20.3284 8.25 19.5 8.25Z"
                                stroke="#0070BA"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.5 15.75C7.5 15.75 8.25 15 9.75 15C11.25 15 12.75 16.5 14.25 16.5C15.75 16.5 16.5 15.75 16.5 15.75"
                                stroke="#0070BA"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16.5 8.25V6C16.5 4.34315 15.1569 3 13.5 3H4.5C3.67157 3 3 3.67157 3 4.5V6.75"
                                stroke="#0070BA"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p>PayPal</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 text-lg font-medium">
                        Order Summary
                      </h3>
                      <div className="rounded-lg border p-4">
                        <div className="space-y-2">
                          {cartSummary.items.map((item) => (
                            <div key={item.id} className="flex justify-between">
                              <span>
                                {item.name} x {item.quantity}
                              </span>
                              <span className="font-medium">
                                ${item.price.toLocaleString()}
                              </span>
                            </div>
                          ))}
                        </div>
                        <Separator className="my-4" />
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span>
                              ${cartSummary.subtotal.toLocaleString()}
                            </span>
                          </div>
                          {cartSummary.discount > 0 && (
                            <div className="flex justify-between text-green-600">
                              <span>Discount</span>
                              <span>
                                -${cartSummary.discount.toLocaleString()}
                              </span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-gray-600">Shipping</span>
                            <span>
                              ${cartSummary.shipping.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tax</span>
                            <span>${cartSummary.tax.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span className="text-blue-700">
                              ${cartSummary.total.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep("payment")}
                      className="gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                      className="gap-2 bg-blue-600 hover:bg-blue-700"
                    >
                      {isProcessing ? (
                        <>
                          <LoadingSpinner size="sm" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Lock className="h-4 w-4" />
                          Place Order
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
