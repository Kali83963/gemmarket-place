"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import LoadingScreen from "@/components/LoadingScreen";

export default function RootPage() {
  const router = useRouter();
  const { user, isInitialized } = useAuth();

  useEffect(() => {
    if (isInitialized) {
      if (user) {
        // If user is logged in, redirect based on role
        if (user.role === "ENDORSER") {
          router.push("/dashboard/gemstone");
        } else {
          router.push("/dashboard");
        }
      } else {
        // If user is not logged in, redirect to login
        router.push("/login");
      }
    }
  }, [user, isInitialized, router]);

  // Show loading screen while checking authentication
  return <LoadingScreen />;
}
