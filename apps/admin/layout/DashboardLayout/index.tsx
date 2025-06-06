"use client";

import { useEffect, useMemo, FC, ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// material-ui
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";

// import HorizontalBar from './HorizontalBar';
// import MainContentStyled from './MainContentStyled';
// import Breadcrumbs from 'ui-component/extended/Breadcrumbs';

import { handlerDrawerOpen, useGetMenuMaster } from "api/menu";

import { MenuOrientation } from "types/config";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import Loader from "@/components/Loader";
import MainContentStyled from "@/components/MainContentStyled";
import { borderRadius, menuOrientation, container } from "@/theme";
import Breadcrumbs from "@/components/extended/BreadCrumbs";

interface Props {
  children: ReactNode;
}

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout: FC<Props> = ({ children }) => {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down("md"));
  const { menuMaster, menuMasterLoading } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;
  console.log("Theme", theme);

  useEffect(() => {
    downMD && handlerDrawerOpen(false);
  }, [downMD]);

  // horizontal menu-list bar : drawer

  if (menuMasterLoading) return <Loader />;

  return (
    <Box sx={{ display: "flex" }}>
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{ bgcolor: "background.default" }}
      >
        <Toolbar sx={{ p: 2 }}>
          <Header />
        </Toolbar>
      </AppBar>

      {/* menu / drawer */}
      <Sidebar />

      {/* main content */}
      <MainContentStyled
        {...{
          borderRadius: borderRadius,
          menuOrientation: menuOrientation,
          open: drawerOpen!,
        }}
      >
        <Container
          maxWidth={container ? "lg" : false}
          {...(!container && { sx: { px: { xs: 0 } } })}
        >
          <Breadcrumbs />
          {children}
        </Container>
      </MainContentStyled>
      <ToastContainer />
    </Box>
  );
};

export default MainLayout;
