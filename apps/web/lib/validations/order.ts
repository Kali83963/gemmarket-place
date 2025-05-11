import { z } from "zod";

export const shippingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
  notes: z.string().optional(),
});

export const paymentSchema = z.object({
  nameOnCard: z.string().min(1, "Name on card is required"),
  token: z.string().optional(), // Optional because it's only set after Stripe processing
});

export const orderSchema = z.object({
  shipping: shippingSchema,
  payment: paymentSchema,
  shippingCost: z.number().min(0),
  tax: z.number().min(0),
});

export type ShippingFormData = z.infer<typeof shippingSchema>;
export type PaymentFormData = z.infer<typeof paymentSchema>;
export type OrderFormData = z.infer<typeof orderSchema>; 