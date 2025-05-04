// menu import
import dashboard from "./dashboard";
import products from "./products";
import users from "./user";
import order from "./order";

// types
import { NavItemType } from "types";

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, users, products, order],
};

export default menuItems;
