import { memo, useLayoutEffect, useState } from "react";

// material-ui
import { Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import NavItem from "./NavItem";
import NavGroup from "./NavGroup";

import menuItem from "@/layout/menu-items";
import { Menu } from "@/layout/menu-items/widget";
import { HORIZONTAL_MAX_ITEM } from "config";
import { useGetMenuMaster, useGetMenu } from "api/menu";

// types
import { NavItemType } from "types";
import useAuth from "@/hooks/useAuth";

const MenuList = () => {
  const downMD = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const { user } = useAuth();

  const { menuLoading } = useGetMenu();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const isHorizontal = false && !downMD;
  const [selectedID, setSelectedID] = useState<string | undefined>("");
  const [menuItems, setMenuItems] = useState<{ items: NavItemType[] }>({
    items: [],
  });

  let widgetMenu = Menu();

  useLayoutEffect(() => {
    const isFound = menuItem.items.some((element) => {
      if (element.id === "group-widget") {
        return true;
      }
      return false;
    });
    if (!menuLoading) {
      // menuItem.items.splice(0, menuItem.items.length, widgetMenu);

      setMenuItems({ items: [...menuItem.items] });
    }
    // else if (!menuLoading && widgetMenu?.id !== undefined && !isFound) {
    //   menuItem.items.splice(1, 1, widgetMenu);
    //   setMenuItems({ items: [...menuItem.items] });
    // }
    else {
      setMenuItems({ items: [...menuItem.items] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuLoading]);

  // last menu-item to show in horizontal menu bar
  const lastItem = isHorizontal ? HORIZONTAL_MAX_ITEM : null;

  let lastItemIndex = menuItems.items.length - 1;
  let remItems: NavItemType[] = [];
  let lastItemId: string;

  if (lastItem && lastItem < menuItems.items.length) {
    lastItemId = menuItems.items[lastItem - 1].id!;
    lastItemIndex = lastItem - 1;
    remItems = menuItems.items
      .slice(lastItem - 1, menuItems.items.length)
      .map((item) => ({
        title: item.title,
        elements: item.children,
        icon: item.icon,
        ...(item.url && {
          url: item.url,
        }),
      }));
  }
  console.log(menuItems.items);
  const navItems = menuItems.items
    .slice(0, lastItemIndex + 1)
    .map((item, index) => {
      if (item.allowedRoles?.includes(user?.role)) {
        switch (item.type) {
          case "group":
            if (item.url && item.id !== lastItemId) {
              return (
                <List key={item.id}>
                  <NavItem
                    item={item}
                    level={1}
                    isParents
                    setSelectedID={() => setSelectedID("")}
                  />
                  {!isHorizontal && index !== 0 && <Divider sx={{ py: 0.5 }} />}
                </List>
              );
            }
            return (
              <NavGroup
                key={item.id}
                setSelectedID={setSelectedID}
                selectedID={selectedID}
                item={item}
                lastItem={lastItem!}
                remItems={remItems}
                lastItemId={lastItemId}
              />
            );
          default:
            return (
              <Typography
                key={item.id}
                variant="h6"
                color="error"
                align="center"
              >
                Menu Items Error
              </Typography>
            );
        }
      }
    });

  return !isHorizontal ? (
    <Box {...(drawerOpen && { sx: { mt: 1.5 } })}>{navItems}</Box>
  ) : (
    <>{navItems}</>
  );
};

export default memo(MenuList);
