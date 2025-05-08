// material-ui
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import NotificationSection from "./NotificationSection";

import { IconMenu2 } from "@tabler/icons-react";

import { menuOrientation } from "@/theme";
import ProfileSection from "./ProfileSection";
import MobileSection from "./MobileSection";
import LogoSection from "../LogoSection";
import { handlerDrawerOpen, useGetMenuMaster } from "api/menu";

const Header = () => {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down("md"));

  const menuOrien = menuOrientation;
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  // menuOrien === MenuOrientation.HORIZONTAL
  const isHorizontal = false && !downMD;

  return (
    <>
      {/* logo & toggler button */}
      <Box sx={{ width: downMD ? "auto" : 228, display: "flex" }}>
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          <LogoSection />
        </Box>
        {!isHorizontal && (
          <Avatar
            variant="rounded"
            sx={{
              // @ts-expect-error Property 'commonAvatar'
              ...theme.typography.commonAvatar,
              // @ts-expect-error Property 'mediumAvatar'
              ...theme.typography.mediumAvatar,
              overflow: "hidden",
              transition: "all .2s ease-in-out",
              bgcolor: "secondary.light",
              color: "secondary.dark",
              "&:hover": {
                bgcolor: "secondary.dark",
                color: "secondary.light",
              },
            }}
            onClick={() => handlerDrawerOpen(!drawerOpen)}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="20px" />
          </Avatar>
        )}
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />
      {/* notification
      <NotificationSection /> */}
      {/* profile */}
      <ProfileSection />
      {/* mobile header */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <MobileSection />
      </Box>
    </>
  );
};

export default Header;
