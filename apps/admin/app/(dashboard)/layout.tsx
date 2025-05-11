"use client";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthGuard from "@/utils/guard/role-guard";
import { Suspense } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <DashboardLayout>
        <Suspense fallback={<LoadingScreen />}>
          {children}
        </Suspense>
      </DashboardLayout>
    </AuthGuard>
  );
}
