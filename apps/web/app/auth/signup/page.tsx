"use client";
import { useState } from "react";
import Link from "next/link";
import { Diamond } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/seperator";
import { Checkbox } from "@/components/ui/checkbox";
import { useSignupMutation } from "@/store/slices/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/slices/authSlice";

export default function SignupPage() {
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const [signup, { isLoading: isSubmitting }] = useSignupMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  // Watch the value of terms checkbox for validation
  const termsAccepted = watch("terms");

  // Handle checkbox change
  const handleTermsChange = (checked: boolean) => {
    setValue("terms", checked);
  };

  const onSubmit = async (data: any) => {
    setSubmitError("");
    setSuccessMessage("");

    try {
      const response = await signup({
        ...data,
        role: "BUYER" // Hardcoded role
      }).unwrap();
      dispatch(setCredentials(response));
      setSuccessMessage("Account created successfully!");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error: any) {
      setSubmitError(error?.data?.message || "An error occurred during signup");
    }
  };

  return (
    <div className="container mx-auto max-w-md py-8">
      <div className="mb-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-2">
          <Diamond className="h-6 w-6 text-blue-600" />
          <h1 className="text-3xl font-bold">GemMarket</h1>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Create an account
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Join our gemstone marketplace community
        </p>
      </div>

      <Card className="border-gray-200 shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-gray-800">Sign Up</CardTitle>
            <CardDescription className="text-gray-600">
              Enter your information to create an account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {submitError && (
              <div className="p-3 text-sm bg-red-50 border border-red-200 text-red-600 rounded-md">
                {submitError}
              </div>
            )}
            {successMessage && (
              <div className="p-3 text-sm bg-green-50 border border-green-200 text-green-600 rounded-md">
                {successMessage}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-700">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-700">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
              />
              {errors.password ? (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              ) : (
                <p className="text-xs text-gray-500">
                  Password must be at least 8 characters long
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="terms"
                className="text-blue-600 border-gray-300"
                checked={termsAccepted}
                onCheckedChange={handleTermsChange}
                {...register("terms", {
                  required:
                    "You must accept the Terms of Service and Privacy Policy",
                })}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link
                  href="/terms-of-service"
                  className="text-blue-600 hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.terms && (
              <p className="text-xs text-red-500 mt-1">{errors.terms.message}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-gray-200" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center pt-2 pb-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
