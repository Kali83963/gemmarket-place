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
  type: "group",
  children: [
    {
      id: "order",
      title: "Order",
      type: "item",
      url: "/dashboard/order",
      icon: icons.IconDashboard,
      breadcrumbs: true,
    },
  ],
};

export default order;
