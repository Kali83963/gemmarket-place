// menu import
import dashboard from "./dashboard";
import users from "./user";

// types
import { NavItemType } from "types";

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, users],
};

export default menuItems;
