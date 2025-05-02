import { IconDashboard, IconUserCheck } from "@tabler/icons-react";

import { NavItemType } from "types";

const icons = {
  IconDashboard: IconDashboard,
  IconUser: IconUserCheck,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const users: NavItemType = {
  id: "user",
  title: "User",
  icon: icons.IconUser,
  type: "group",
  children: [
    {
      id: "user",
      title: "Users",
      type: "item",
      url: "/dashboard/users",
      icon: icons.IconDashboard,
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
      icon: icons.IconDashboard,
      breadcrumbs: true,
    },
  ],
};

export default users;
