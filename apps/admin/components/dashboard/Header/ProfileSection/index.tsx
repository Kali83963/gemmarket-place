"use client";

import { useEffect, useRef, useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import OutlinedInput from "@mui/material/OutlinedInput";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports
import useAuth from "hooks/useAuth";

// types
import { ThemeMode } from "types/config";

// assets
import {
  IconLogout,
  IconSearch,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import Transitions from "@/components/extended/Transitions";
import MainCard from "@/components/cards/MainCard";
import { borderRadius } from "@/theme";
import { useRouter } from "next/navigation";

const User1 = "/assets/images/users/user-round.svg";

const ProfileSection = () => {
  const theme = useTheme();
  const router = useRouter();

  const [notification, setNotification] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { logout, user } = useAuth();
  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different components and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef<any>(null);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = (
    event: React.MouseEvent<HTMLDivElement> | MouseEvent | TouchEvent
  ) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number,
    route: string = ""
  ) => {
    setSelectedIndex(index);
    handleClose(event);

    if (route && route !== "") {
      router.push(route);
    }
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Chip
        sx={{
          height: "48px",
          alignItems: "center",
          borderRadius: "27px",
          transition: "all .2s ease-in-out",
          borderColor:
            theme.palette.mode === ThemeMode.DARK
              ? "dark.main"
              : "primary.light",
          bgcolor:
            theme.palette.mode === ThemeMode.DARK
              ? "dark.main"
              : "primary.light",
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: "primary.main",
            bgcolor: `${theme.palette.primary.main} !important`,
            color: "primary.light",
            "& svg": {
              stroke: theme.palette.primary.main,
            },
          },
          "& .MuiChip-label": {
            lineHeight: 0,
          },
        }}
        icon={
          <Avatar
            src={User1}
            sx={{
              // @ts-expect-error Property 'mediumAvatar'
              ...theme.typography.mediumAvatar,
              margin: "8px 0 8px 8px !important",
              cursor: "pointer",
            }}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            color="inherit"
            alt="user images"
          />
        }
        label={<IconSettings stroke={1.5} size="24px" />}
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 14],
            },
          },
        ]}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions in={open} {...TransitionProps}>
              <Paper>
                {open && (
                  <MainCard
                    border={false}
                    elevation={16}
                    content={false}
                    boxShadow
                    shadow={theme.shadows[16]}
                  >
                    <Box sx={{ p: 2, pb: 0 }}>
                      <Stack>
                        <Stack
                          direction="column"
                          spacing={0.5}
                          alignItems="start"
                        >
                          <Typography variant="h4">Good Morning,</Typography>
                          <Typography
                            component="span"
                            variant="h4"
                            color="text.primary"
                            sx={{ fontWeight: 400 }}
                          >
                            {user?.firstName} {user?.lastName}
                          </Typography>
                          <Typography
                            component="span"
                            variant="h5"
                            color="text.secondary"
                            sx={{ fontWeight: 400 }}
                          >
                            {user?.email}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                    <PerfectScrollbar
                      style={{
                        height: "100%",
                        maxHeight: "calc(100vh - 250px)",
                        overflowX: "hidden",
                      }}
                    >
                      <Box sx={{ paddingTop: 0 }}>
                        <Divider />
                        <List
                          component="nav"
                          sx={{
                            width: "100%",
                            maxWidth: 350,
                            minWidth: 300,
                            bgcolor: theme.palette.background.paper,
                            borderRadius: `${borderRadius}px`,
                            "& .MuiListItemButton-root": { mt: 0.5 },
                          }}
                        >
                          <ListItemButton
                            sx={{ borderRadius: `${borderRadius}px` }}
                            selected={selectedIndex === 0}
                            onClick={(
                              event: React.MouseEvent<HTMLDivElement>
                            ) =>
                              handleListItemClick(event, 0, "/dashboard/account")
                            }
                          >
                            <ListItemIcon>
                              <IconSettings stroke={1.5} size="20px" />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  Account Settings
                                </Typography>
                              }
                            />
                          </ListItemButton>
                          <ListItemButton
                            sx={{ borderRadius: `${borderRadius}px` }}
                            selected={selectedIndex === 4}
                            onClick={handleLogout}
                          >
                            <ListItemIcon>
                              <IconLogout stroke={1.5} size="20px" />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">Logout</Typography>
                              }
                            />
                          </ListItemButton>
                        </List>
                      </Box>
                    </PerfectScrollbar>
                  </MainCard>
                )}
              </Paper>
            </Transitions>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
