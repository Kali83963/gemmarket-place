import { 
  IconUsers, 
  IconUserCheck, 
  IconUserCircle 
} from "@tabler/icons-react";

import { NavItemType } from "types";

const icons = {
  IconUsers: IconUsers,
  IconUserCheck: IconUserCheck,
  IconUserCircle: IconUserCircle,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const users: NavItemType = {
  id: "user",
  title: "User",
  icon: icons.IconUsers,
  allowedRoles: ["ADMIN"],
  type: "group",
  children: [
    {
      id: "user",
      title: "Users",
      type: "item",
      url: "/dashboard/users",
      icon: icons.IconUserCircle,
      allowedRoles: ["ADMIN"],
      breadcrumbs: true,
      // children: [
      //   {
      //     id: "add-user",
      //     title: "Add Users",
      //     type: "item",
      //     url: "/dashboard/users/add",
      //     icon: icons.IconDashboard,
      //     breadcrumbs: true,
      //   },
      // ],
    },
    {
      id: "endoser",
      title: "Endosers",
      type: "item",
      url: "/dashboard/endosers",
      allowedRoles: ["ADMIN"],
      icon: icons.IconUserCheck,
      breadcrumbs: true,
    },
  ],
};

export default users;
