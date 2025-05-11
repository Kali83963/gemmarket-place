import { 
  IconShoppingCart, 
  IconReceipt 
} from "@tabler/icons-react";

import { NavItemType } from "types";

const icons = {
  IconShoppingCart: IconShoppingCart,
  IconReceipt: IconReceipt,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const order: NavItemType = {
  id: "orders",
  title: "Order",
  icon: icons.IconShoppingCart,
  allowedRoles: ["ADMIN"],
  type: "group",
  children: [
    {
      id: "order",
      title: "Order",
      type: "item",
      url: "/dashboard/order",
      icon: icons.IconReceipt,
      allowedRoles: ["ADMIN"],
      breadcrumbs: true,
    },
  ],
};

export default order;
