import { IconDashboard, IconDeviceAnalytics } from "@tabler/icons-react";

import { NavItemType } from "types";

const icons = {
  IconDashboard: IconDashboard,
  IconDeviceAnalytics: IconDeviceAnalytics,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard: NavItemType = {
  id: "dashboard",
  title: "Dashboard",
  icon: icons.IconDashboard,
  type: "group",
  children: [
    {
      id: "default",
      title: "Default",
      type: "item",
      url: "/dashboard",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
