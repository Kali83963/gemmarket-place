// material-ui
import { Theme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";

// types
import { UserProfile } from "types/user-profile";
import { DrawerContext } from "@/contexts/DrawerContext";

interface CustomDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  rowValue: UserProfile;
  children: React.ReactElement;
}

const CustomDrawer = ({
  open,
  setOpen,
  rowValue,
  children,
}: CustomDrawerProps) => {
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      sx={{
        flexShrink: 0,
        zIndex: 100,
        display: open ? "block" : "none",
        "& .MuiDrawer-paper": {
          position: "relative",
          ...(!downSM &&
            open && { borderTop: "1px solid", borderTopColor: "divider" }),
          ...(downSM && {
            position: "absolute",
          }),
          overflow: "unset",
          width: "100%",
          borderLeft: "none",
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerContext.Provider value={{ handleDrawerClose }}>
        {children}
      </DrawerContext.Provider>
      {/* <ClientDetails
        rowValue={rowValue}
        handleDrawerClose={handleDrawerClose}
      /> */}
    </Drawer>
  );
};

export default CustomDrawer;
