"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  CreditCard,
  Settings,
  BarChart3,
  MessageSquare,
  Heart,
  Clock,
  ShieldCheck,
  LogOut,
  ChevronDown,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface RouteType {
  title: string;
  href: string;
  icon?: LucideIcon;
  active: boolean;
  submenu?: RouteType[];
  badge?: number;
}

export function SidebarNavigation({
  userType = "seller",
}: {
  userType?: "seller" | "buyer";
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  const sellerRoutes: RouteType[] = [
    {
      title: "Dashboard",
      href: "/dashboard/seller",
      icon: LayoutDashboard,
      active: pathname === "/dashboard/seller",
    },
    {
      title: "Inventory",
      href: "/dashboard/seller/inventory",
      icon: Package,
      active: pathname === "/dashboard/seller/inventory",
      submenu: [
        {
          title: "All Listings",
          href: "/dashboard/seller/inventory",
          active: pathname === "/dashboard/seller/inventory",
        },
        {
          title: "Add New Listing",
          href: "/dashboard/seller/add-listing",
          active: pathname === "/dashboard/seller/add-listing",
        },
      ],
    },
    {
      title: "Orders",
      href: "/dashboard/seller/orders",
      icon: ShoppingCart,
      active: pathname === "/dashboard/seller/orders",
    },
    {
      title: "Customers",
      href: "/dashboard/seller/customers",
      icon: Users,
      active: pathname === "/dashboard/seller/customers",
    },
    {
      title: "Analytics",
      href: "/dashboard/seller/analytics",
      icon: BarChart3,
      active: pathname === "/dashboard/seller/analytics",
    },
    {
      title: "Finances",
      href: "/dashboard/seller/finances",
      icon: CreditCard,
      active: pathname === "/dashboard/seller/finances",
    },
    {
      title: "Messages",
      href: "/messages",
      icon: MessageSquare,
      active: pathname === "/messages",
      badge: 5,
    },
    {
      title: "Verification",
      href: "/dashboard/seller/verification",
      icon: ShieldCheck,
      active: pathname === "/dashboard/seller/verification",
    },
    {
      title: "Settings",
      href: "/dashboard/seller/settings",
      icon: Settings,
      active: pathname === "/dashboard/seller/settings",
    },
  ];

  const buyerRoutes: RouteType[] = [
    {
      title: "Dashboard",
      href: "/dashboard/buyer",
      icon: LayoutDashboard,
      active: pathname === "/dashboard/buyer",
    },
    {
      title: "My Orders",
      href: "/dashboard/buyer/orders",
      icon: ShoppingCart,
      active: pathname === "/dashboard/buyer/orders",
    },
    {
      title: "Wishlist",
      href: "/dashboard/buyer/wishlist",
      icon: Heart,
      active: pathname === "/dashboard/buyer/wishlist",
    },
    {
      title: "Recently Viewed",
      href: "/dashboard/buyer/recently-viewed",
      icon: Clock,
      active: pathname === "/dashboard/buyer/recently-viewed",
    },
    {
      title: "Messages",
      href: "/messages",
      icon: MessageSquare,
      active: pathname === "/messages",
      badge: 3,
    },
    {
      title: "Settings",
      href: "/dashboard/buyer/settings",
      icon: Settings,
      active: pathname === "/dashboard/buyer/settings",
    },
  ];

  const routes = userType === "seller" ? sellerRoutes : buyerRoutes;

  return (
    <SidebarProvider defaultOpen={open} onOpenChange={setOpen}>
      <Sidebar variant="sidebar" collapsible="icon">
        <SidebarHeader className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 px-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
              G
            </div>
            <span className="text-lg font-bold">GemMarket</span>
          </Link>
          <SidebarTrigger />
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {routes.map((route) =>
              route.submenu ? (
                <Collapsible key={route.href} className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <route.icon className="h-5 w-5" />
                        <span>{route.title}</span>
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {route.submenu.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.href}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={subItem.active}
                            >
                              <Link href={subItem.href}>
                                <ChevronRight className="h-4 w-4" />
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem key={route.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={route.active}
                    tooltip={route.title}
                  >
                    <Link href={route.href}>
                      <route.icon className="h-5 w-5" />
                      <span>{route.title}</span>
                      {route.badge && (
                        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-medium text-white">
                          {route.badge}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            )}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button className="w-full text-red-500 hover:text-red-600">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
