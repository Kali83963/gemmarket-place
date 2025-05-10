"use client";

import React from "react";
import dynamic from "next/dynamic";

// material-ui
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// third-party
import { Props as ChartProps } from "react-apexcharts";

// project imports

// assets
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// types
import { ThemeMode } from "types/config";
import SkeletonCard from "@/components/extended/Cards/Skeleton/EarningCard";
import MainCard from "@/components/cards/MainCard";

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const chartOptions: ChartProps = {
  chart: {
    type: "line",
    height: 90,
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#fff"],
  fill: {
    type: "solid",
    opacity: 1,
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },

  tooltip: {
    theme: "dark",
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: () => "Total Order",
      },
    },
    marker: {
      show: false,
    },
  },
};

interface TotalOrderLineChartCardProps {
  isLoading: boolean;
  value: any;
}

const TotalOrderLineChartCard = ({
  isLoading,
  value,
}: TotalOrderLineChartCardProps) => {
  const [series, setSeries] = React.useState(value?.yearSeries);

  const [timeValue, setTimeValue] = React.useState<boolean>(false);
  const handleChangeTime = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newValue: boolean
  ) => {
    setTimeValue(newValue);
    setSeries(timeValue ? value?.yearSeries : value?.monthSeries);
  };

  React.useEffect(() => {
    setSeries(value?.yearSeries);
  }, [value]);

  return (
    <>
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <MainCard
          border={false}
          content={false}
          sx={{
            bgcolor: "primary.dark",
            color: "#fff",
            overflow: "hidden",
            position: "relative",
            "&>div": {
              position: "relative",
              zIndex: 5,
            },
            "&:after": {
              content: '""',
              position: "absolute",
              width: 210,
              height: 210,
              background: `linear-gradient(210.04deg,  -50.94%, rgba(144, 202, 249, 0) 95.49%)`,
              borderRadius: "50%",
              top: { xs: -105, sm: -85 },
              right: { xs: -140, sm: -95 },
            },
            "&:before": {
              content: '""',
              position: "absolute",
              zIndex: 1,
              width: 210,
              height: 210,
              background: `linear-gradient(140.9deg,  -14.02%, rgba(144, 202, 249, 0) 85.50%)`,
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
                        bgcolor: "primary.800",
                        color: "#fff",
                        mt: 1,
                      }}
                    >
                      <LocalMallOutlinedIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>
                  <Grid>
                    <Button
                      disableElevation
                      variant={timeValue ? "contained" : "text"}
                      size="small"
                      sx={{ color: "inherit" }}
                      onClick={(e) => handleChangeTime(e, true)}
                    >
                      Month
                    </Button>
                    <Button
                      disableElevation
                      variant={!timeValue ? "contained" : "text"}
                      size="small"
                      sx={{ color: "inherit" }}
                      onClick={(e) => handleChangeTime(e, false)}
                    >
                      Year
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid size={{ xs: 6 }}>
                    <Grid container alignItems="center">
                      <Grid>
                        {timeValue ? (
                          <Typography
                            sx={{
                              fontSize: "2.125rem",
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75,
                            }}
                          >
                            ${series?.total}
                          </Typography>
                        ) : (
                          <Typography
                            sx={{
                              fontSize: "2.125rem",
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75,
                            }}
                          >
                            ${series?.total}
                          </Typography>
                        )}
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "primary.200",
                          }}
                        >
                          Total Order
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <ReactApexChart
                      options={chartOptions}
                      series={[{ data: series?.data, name: series?.name }]}
                      type="line"
                      height={90}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </MainCard>
      )}
    </>
  );
};

export default TotalOrderLineChartCard;
