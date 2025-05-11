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
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/seperator";
import { useLoginMutation } from "@/store/slices/authApi";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/slices/authSlice";
import { toast } from "sonner";

export default function LoginPage() {
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading: isSubmitting }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    setSubmitError("");
    setSuccessMessage("");

    try {
      const response = await login(data).unwrap();
      dispatch(setCredentials(response));
      toast.success("Login successful!");

      // Check for redirect URL
      const redirectUrl = sessionStorage.getItem("redirectAfterLogin");
      if (redirectUrl) {
        sessionStorage.removeItem("redirectAfterLogin");
        router.push(redirectUrl);
      } else {
        router.push("/");
      }
    } catch (error: any) {
      setSubmitError(error?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="container mx-auto max-w-md py-8">
      <div className="flex items-center justify-center flex-col gap-3 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Diamond className="h-6 w-6 text-blue-600" />
          <h1 className="text-3xl font-bold">GemMarket</h1>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">Welcome back</h2>
        <p className="mt-2 text-sm text-gray-600">
          Sign in to your account to continue
        </p>
      </div>

      <Card className="border-gray-200 shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-gray-800">Sign In</CardTitle>
            <CardDescription className="text-gray-600">
              Enter your email and password to access your account
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
              </div>
              <Input
                id="password"
                type="password"
                className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-gray-200" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center pt-2 pb-6">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
