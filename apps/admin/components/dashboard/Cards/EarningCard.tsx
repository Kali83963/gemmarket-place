"use client";

import React from "react";
import Image from "next/image";

// material-ui
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

// project imports

// assets
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import GetAppTwoToneIcon from "@mui/icons-material/GetAppOutlined";
import FileCopyTwoToneIcon from "@mui/icons-material/FileCopyOutlined";
import PictureAsPdfTwoToneIcon from "@mui/icons-material/PictureAsPdfOutlined";
import ArchiveTwoToneIcon from "@mui/icons-material/ArchiveOutlined";

// types
import { ThemeMode } from "types/config";
import MainCard from "@/components/cards/MainCard";
import SkeletonCard from "@/components/extended/Cards/Skeleton/EarningCard";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

interface EarningCardProps {
  isLoading: boolean;
}

const EarningCard = ({ isLoading }: EarningCardProps) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<
    Element | (() => Element) | null | undefined
  >(null);

  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <MainCard
          border={false}
          content={false}
          sx={{
            bgcolor:
              theme.palette.mode === ThemeMode.DARK
                ? "dark.dark"
                : "secondary.dark",
            color: "#fff",
            overflow: "hidden",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              width: 210,
              height: 210,
              background:
                theme.palette.mode === ThemeMode.DARK
                  ? `linear-gradient(210.04deg, ${theme.palette.secondary.dark} -50.94%, rgba(144, 202, 249, 0) 95.49%)`
                  : // @ts-ignore
                    theme.palette.secondary[800],
              borderRadius: "50%",
              top: { xs: -105, sm: -85 },
              right: { xs: -140, sm: -95 },
            },
            "&:before": {
              content: '""',
              position: "absolute",
              width: 210,
              height: 210,
              background:
                theme.palette.mode === ThemeMode.DARK
                  ? `linear-gradient(140.9deg, ${theme.palette.secondary.dark} -14.02%, rgba(144, 202, 249, 0) 85.50%)`
                  : // @ts-ignore
                    theme.palette.secondary[800],
              borderRadius: "50%",
              top: { xs: -155, sm: -125 },
              right: { xs: -70, sm: -15 },
              opacity: 0.5,
            },
          }}
        >
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid>
                <Grid container justifyContent="space-between">
                  <Grid>
                    <Avatar
                      variant="rounded"
                      sx={{
                        // @ts-ignore
                        ...theme.typography.commonAvatar,
                        // @ts-ignore
                        ...theme.typography.largeAvatar,
                        bgcolor:
                          theme.palette.mode === ThemeMode.DARK
                            ? "dark.main"
                            : "secondary.800",
                        mt: 1,
                      }}
                    >
                      <AttachMoneyOutlinedIcon sx={{ color: "white" }} />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              <Grid>
                <Grid container alignItems="center">
                  <Grid>
                    <Typography
                      sx={{
                        fontSize: "2.125rem",
                        fontWeight: 500,
                        mr: 1,
                        mt: 1.75,
                        mb: 0.75,
                      }}
                    >
                      $500.00
                    </Typography>
                  </Grid>
                  <Grid>
                    <Avatar
                      sx={{
                        cursor: "pointer",

                        bgcolor: "secondary.200",
                        color: "secondary.dark",
                      }}
                    >
                      <ArrowUpwardIcon
                        fontSize="inherit"
                        sx={{ transform: "rotate3d(1, 1, 1, 45deg)" }}
                      />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              <Grid sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "secondary.200",
                  }}
                >
                  Total Earning
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </MainCard>
      )}
    </>
  );
};

export default EarningCard;
