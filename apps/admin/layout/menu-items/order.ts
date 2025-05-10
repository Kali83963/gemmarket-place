import { IconDashboard, IconDeviceAnalytics } from "@tabler/icons-react";

import { NavItemType } from "types";

const icons = {
  IconDashboard: IconDashboard,
  IconDeviceAnalytics: IconDeviceAnalytics,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const order: NavItemType = {
  id: "orders",
  title: "Order",
  icon: icons.IconDashboard,
  allowedRoles: ["ADMIN"],
  type: "group",
  children: [
    {
      id: "order",
      title: "Order",
      type: "item",
      url: "/dashboard/order",
      icon: icons.IconDashboard,
      allowedRoles: ["ADMIN"],
      breadcrumbs: true,
    },
  ],
};

export default order;
