import DashboardLayout from "@/layout/DashboardLayout";
import AuthGuard from "@/utils/guard/role-guard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
}
