import { 
  IconPackage, 
  IconDiamond 
} from "@tabler/icons-react";

import { NavItemType } from "types";

const icons = {
  IconPackage: IconPackage,
  IconDiamond: IconDiamond,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const products: NavItemType = {
  id: "products",
  title: "Products",
  icon: icons.IconPackage,
  allowedRoles: ["ADMIN", "ENDORSER"],
  type: "group",
  children: [
    {
      id: "gemstone",
      title: "Gemstone",
      type: "item",
      url: "/dashboard/gemstone",
      icon: icons.IconDiamond,
      allowedRoles: ["ADMIN", "ENDORSER"],
      breadcrumbs: true,
    },
  ],
};

export default products;
