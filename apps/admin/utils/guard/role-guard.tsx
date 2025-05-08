"use client";

import { useRouter } from "next/navigation";

// project imports
import useAuth from "hooks/useAuth";
import { useEffect } from "react";

// types
import { GuardProps } from "types";
import SpinnerLoader from "@/components/Loader";

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }: GuardProps) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return <SpinnerLoader />;

  return children;
};

export default AuthGuard;
