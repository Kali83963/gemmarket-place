// lib/withAuth.tsx
"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RootState } from "@/store";
import React from "react";

// Add constraint to P
export default function withAuth<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>
) {
  return function AuthenticatedComponent(props: P) {
    const user = useSelector((state: RootState) => state.auth.user);
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push("/auth/login");
      }
    }, [user, router]);

    if (!user) {
      return null; // You can show a loader or "Redirecting..." message here
    }

    return <WrappedComponent {...props} />;
  };
}
