"use client";

import { usePathname, useRouter } from "next/navigation";

// project imports
import useAuth from "hooks/useAuth";
import { useEffect } from "react";

// types
import { GuardProps } from "types";
import SpinnerLoader from "@/components/Loader";

type UserRole = "ADMIN" | "ENDORSER"; // you can expand with other roles if needed

// ==============================|| AUTH GUARD ||============================== //
const protectedRoutes: Record<string, UserRole[]> = {
  "/dashboard": ["ADMIN"],
  "/dashboard/users": ["ADMIN"],
  "/dashboard/users/add/:id": ["ADMIN"],
  "/dashboard/users/edit/:id": ["ADMIN"],
  "/dashboard/endorser": ["ADMIN"],
  "/dashboard/endorser/add/:id": ["ADMIN"],
  "/dashboard/endorser/edit/:id": ["ADMIN"],
  "/dashboard/orders": ["ADMIN"],
  "/dashboard/orders/details": ["ADMIN"],
  "/dashboard/gemstone": ["ADMIN", "ENDORSER"],
  "/dashboard/gemstone/details/:id": ["ADMIN", "ENDORSER"],
  "/dashboard/account": ["ADMIN", "ENDORSER"],
};
const defaultRoute = {
  ADMIN: "/dashboard",
  ENDORSER: "/dashboard/gemstone",
};
const matchRoute = (pathname: string) => {
  return Object.keys(protectedRoutes).find((route) => {
    const pattern = new RegExp("^" + route.replace(/:\w+/g, "[^/]+") + "$");
    return pattern.test(pathname);
  });
};
const AuthGuard = ({ children }: GuardProps) => {
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  console.log("User In,", user);

  const User = user?.data || user;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    const matchedRoute = matchRoute(pathname);
    console.log("match Routes", matchRoute);
    if (matchedRoute) {
      const allowedRoles = protectedRoutes[matchedRoute];
      if (!allowedRoles.includes(User?.role as UserRole)) {
        // Ensure `user?.role` is a valid UserRole by type casting it
        const route = defaultRoute[User?.role as UserRole];
        if (route) {
          console.log("ROLE HERE");
          router.push(route);
        } else {
          console.log("ROLE HERE NOT");
          router.push("/dashboard");
        }
      }
    }
  }, [isLoggedIn, router, pathname, user?.role]);

  if (!isLoggedIn) return <SpinnerLoader />;

  return children;
};

export default AuthGuard;
