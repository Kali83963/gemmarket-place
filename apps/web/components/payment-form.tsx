"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema, type PaymentFormData } from "@/lib/validations/order";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "sonner";

interface PaymentFormProps {
  onPaymentSuccess: (token: string , nameOnCard:string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export function PaymentForm({
  onPaymentSuccess,
  onBack,
  onContinue,
}: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    
  });

  const elementStyle = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
        "&.StripeElement--focus": {
          outline: "none",
          boxShadow: "none",
        },
        "&.StripeElement--empty": {
          color: "#aab7c4",
        },
        "&.StripeElement--invalid": {
          color: "#9e2146",
        },
      },
    },
  };

  const onSubmit = handleSubmit(async (data) => {
    if (!stripe || !elements) {
      toast.error("Stripe is not initialized");
      return;
    }

    setIsProcessing(true);

    try {
      const cardNumberElement = elements.getElement(CardNumberElement);
      if (!cardNumberElement) {
        throw new Error("Card number element not found");
      }

      const { error, token } = await stripe.createToken(cardNumberElement, {
        name: data.nameOnCard,
      });

      if (error) {
        toast.error(error.message);
      } else {
        setValue("token", token.id);
        onPaymentSuccess(token.id ,data.nameOnCard);
        onContinue();
      }
    } catch (err) {
      toast.error("An error occurred while processing your payment.");
    } finally {
      setIsProcessing(false);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-6">
        <div className="flex items-center space-x-2 rounded-lg border p-4">
          <div className="flex-1">
            <div className="flex items-center">
              <svg
                className="mr-2 h-5 w-5 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 8.25H4.5C3.67157 8.25 3 8.92157 3 9.75V18.75C3 19.5784 3.67157 20.25 4.5 20.25H19.5C20.3284 20.25 21 19.5784 21 18.75V9.75C21 8.92157 20.3284 8.25 19.5 8.25Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 15.75C7.5 15.75 8.25 15 9.75 15C11.25 15 12.75 16.5 14.25 16.5C15.75 16.5 16.5 15.75 16.5 15.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 8.25V6C16.5 4.34315 15.1569 3 13.5 3H4.5C3.67157 3 3 3.67157 3 4.5V6.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Credit / Debit Card</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="nameOnCard">Name on Card</Label>
          <Input
            id="nameOnCard"
            {...register("nameOnCard")}
          />
          {errors.nameOnCard && (
            <p className="text-sm text-red-500">{errors.nameOnCard.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Card Number</Label>
          <div className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
            <CardNumberElement options={elementStyle} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Expiry Date</Label>
            <div className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <CardExpiryElement options={elementStyle} />
            </div>
          </div>

          <div className="space-y-2">
            <Label>CVC</Label>
            <div className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <CardCvcElement options={elementStyle} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="gap-2"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </Button>
        <Button
          type="submit"
          className="gap-2 bg-blue-600 hover:bg-blue-700"
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Continue to Review"}
          <svg
            className="ml-2 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </form>
  );
}