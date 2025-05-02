import { IconDashboard, IconDeviceAnalytics } from "@tabler/icons-react";

import { NavItemType } from "types";

const icons = {
  IconDashboard: IconDashboard,
  IconDeviceAnalytics: IconDeviceAnalytics,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const products: NavItemType = {
  id: "products",
  title: "Products",
  icon: icons.IconDashboard,
  type: "group",
  children: [
    {
      id: "gemstone",
      title: "Gemstone",
      type: "item",
      url: "/dashboard/gemstone",
      icon: icons.IconDashboard,
      breadcrumbs: true,
    },
  ],
};

export default products;
