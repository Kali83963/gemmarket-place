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
import { useRouter } from "next/navigation";
import {
  useGetCartQuery,
  usePlaceOrderMutation,
} from "@/store/slices/gemstoneApi";
import { StripeProvider } from "@/components/stripe-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  shippingSchema,
  ShippingFormData,
  paymentSchema,
  PaymentFormData,
} from "@/lib/validations/order";
import { toast } from "sonner";
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
import { PaymentForm } from "@/components/payment-form";
import { getContract } from "@/utils/contracts";

export default function CheckoutPage() {
  // All hooks must be called at the top level
  const router = useRouter();
  const { data: cart, isLoading: isCartLoading } = useGetCartQuery();
  const [currentStep, setCurrentStep] = useState<
    "shipping" | "payment" | "review"
  >("shipping");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [orderResponse, setOrderResponse] = useState<any>(null);
  const [paymentInfo, setPaymentInfo] = useState({
    nameOnCard: "",
    cardNumber: "",
    token: "",
    paymentMethod: "credit-card",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      country: "US",
    },
  });

  const [placeOrder] = usePlaceOrderMutation();

  // Calculate totals
  const subtotal =
    cart?.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ) ?? 0;
  const shipping = 50;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Event handlers
  const handleShippingSubmit = handleSubmit((data) => {
    setCurrentStep("payment");
  });

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("review");
  };

  if (cart?.items.length !== 0) {
    console.log(Number(cart?.items[0].product?.blockchainGemstoneId) - 1);
  }

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    try {
      const orderData = {
        shipping: {
          firstName: watch("firstName"),
          lastName: watch("lastName"),
          email: watch("email"),
          phone: watch("phone"),
          address: watch("address"),
          city: watch("city"),
          state: watch("state"),
          postalCode: watch("postalCode"),
          country: watch("country"),
          notes: watch("notes"),
        },
        payment: {
          nameOnCard: paymentInfo.nameOnCard,
          token: paymentInfo.token,
        },
        shippingCost: shipping,
        tax: tax,
      };

      const response = await placeOrder(orderData).unwrap();

      const { contract, signer } = await getContract();

      if (
        cart?.items &&
        cart?.items.length > 0 &&
        cart?.items[0].product?.blockchainGemstoneId
      ) {
        const tx = await contract.transferGemstone(
          Number(cart?.items[0].product?.blockchainGemstoneId),
          signer.getAddress()
        );
        await tx.wait();
      }

      // console.log("Transaction successful:", tx);

      // Process each gemstone transfer
      // for (const item of cart?.items || []) {
      //   const gemstoneId = item.product?.blockchainGemstoneId;
      //   if (!gemstoneId) {
      //     console.warn("No blockchain ID found for gemstone:", item.product?.name);
      //     continue;
      //   }

      //   try {
      //     const tx = await contract.transferGemstone(
      //       Number(gemstoneId),
      //       signer.getAddress()
      //     );
      //     await tx.wait();
      //     console.log("Transaction successful for gemstone:", gemstoneId);
      //   } catch (error) {
      //     console.error("Error transferring gemstone:", error);
      //     toast.error(`Failed to transfer gemstone ${item.product?.name}. Please contact support.`);
      //   }
      // }

      toast.success("Order placed successfully!");
      // setIsComplete(true);
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Render different states
  if (isCartLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex h-[50vh] items-center justify-center">
          <div className="text-center">
            <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isProcessing && (!cart || cart.items.length === 0)) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="rounded-full bg-blue-100 p-6 text-blue-600">
            <ShoppingBag className="h-12 w-12" />
          </div>
          <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
          <p className="max-w-md text-gray-600">
            Please add items to your cart before proceeding to checkout.
          </p>
          <Button className="mt-4 bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/search">Browse Gemstones</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (isComplete && orderResponse) {
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
                <p className="font-medium">{orderResponse.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">
                  {new Date(orderResponse.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="font-medium">
                  ${orderResponse.totalAmount.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">{orderResponse.status}</p>
              </div>
            </div>
            <Separator className="my-4" />
            <h3 className="mb-2 font-medium">Items</h3>
            <ul className="space-y-2">
              {orderResponse.orderItems.map((item: any) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.product?.name} x {item.quantity}
                  </span>
                  <span className="font-medium">
                    ${(item.price * item.quantity).toLocaleString()}
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

  // Main checkout form
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
                      <Input id="firstName" {...register("firstName")} />
                      {errors.firstName && (
                        <p className="text-sm text-red-500">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" {...register("lastName")} />
                      {errors.lastName && (
                        <p className="text-sm text-red-500">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" {...register("email")} />
                      {errors.email && (
                        <p className="text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" {...register("phone")} />
                      {errors.phone && (
                        <p className="text-sm text-red-500">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" {...register("address")} />
                      {errors.address && (
                        <p className="text-sm text-red-500">
                          {errors.address.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" {...register("city")} />
                      {errors.city && (
                        <p className="text-sm text-red-500">
                          {errors.city.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input id="state" {...register("state")} />
                      {errors.state && (
                        <p className="text-sm text-red-500">
                          {errors.state.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">ZIP/Postal Code</Label>
                      <Input id="postalCode" {...register("postalCode")} />
                      {errors.postalCode && (
                        <p className="text-sm text-red-500">
                          {errors.postalCode.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select
                        defaultValue="US"
                        onValueChange={(value) => setValue("country", value)}
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
                      {errors.country && (
                        <p className="text-sm text-red-500">
                          {errors.country.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="notes">Order Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        {...register("notes")}
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
                <StripeProvider>
                  <PaymentForm
                    onPaymentSuccess={(token: string, nameOnCard: string) => {
                      setPaymentInfo({
                        ...paymentInfo,
                        cardNumber: "**** **** **** " + token.slice(-4),
                        nameOnCard: nameOnCard,
                        token: token,
                      });
                      setCurrentStep("review");
                    }}
                    onBack={() => setCurrentStep("shipping")}
                    onContinue={() => setCurrentStep("review")}
                  />
                </StripeProvider>
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
                          {watch("firstName")} {watch("lastName")}
                        </p>
                        <p>{watch("address")}</p>
                        <p>
                          {watch("city")}, {watch("state")}{" "}
                          {watch("postalCode")}
                        </p>
                        <p>
                          {watch("country") === "US"
                            ? "United States"
                            : watch("country")}
                        </p>
                        <p>
                          {watch("email")} | {watch("phone")}
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
                          {cart?.items.map((item) => (
                            <div key={item.id} className="flex justify-between">
                              <span>
                                {item.product?.name} x {item.quantity}
                              </span>
                              <span className="font-medium">
                                ${(item.price * item.quantity).toLocaleString()}
                              </span>
                            </div>
                          ))}
                        </div>
                        <Separator className="my-4" />
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span>${subtotal.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Shipping</span>
                            <span>${shipping.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tax</span>
                            <span>${tax.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span className="text-blue-700">
                              ${total.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
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
                      disabled={isProcessing || isCartLoading}
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
