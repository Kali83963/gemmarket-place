"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// material-ui
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// third-party
import { Props as ChartProps } from "react-apexcharts";

// project imports
import { gridSpacing } from "store/constant";

// types
import { ThemeMode } from "types/config";
import MainCard from "@/components/cards/MainCard";
import SkeletonTotalGrowthBarChart from "@/components/extended/Cards/Skeleton/TotalGrowthBarChart";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// chart data
const chartOptions: ChartProps = {
  chart: {
    height: 480,
    type: "bar",
    id: "bar-chart",
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  legend: {
    show: true,
    fontFamily: `'Roboto', sans-serif`,
    position: "bottom",
    offsetX: 20,
    labels: {
      useSeriesColors: false,
    },
    markers: {
      width: 16,
      height: 16,
      radius: 5,
    },
    itemMargin: {
      horizontal: 15,
      vertical: 8,
    },
  },
  fill: {
    type: "solid",
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: true,
  },
};

const status = [
  {
    value: "today",
    label: "Today",
  },
  {
    value: "month",
    label: "This Month",
  },
  {
    value: "year",
    label: "This Year",
  },
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

interface TotalGrowthBarChartProps {
  isLoading: boolean;
}

const TotalGrowthBarChart = ({ isLoading }: TotalGrowthBarChartProps) => {
  const theme = useTheme();
  const [series] = useState([
    {
      name: "Investment",
      data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75],
    },
  ]);

  const [value, setValue] = useState("today");

  const { primary } = theme.palette.text;
  const divider = theme.palette.divider;
  const grey500 = theme.palette.grey[500];

  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  const [options, setOptions] = useState<ChartProps>(chartOptions);

  useEffect(() => {
    setOptions((prevState: any) => ({
      ...prevState,
      colors: [primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            colors: [
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
            ],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary],
          },
        },
      },
      grid: {
        borderColor: divider,
      },

      legend: {
        labels: {
          colors: grey500,
        },
      },
    }));
  }, [
    primaryDark,
    secondaryMain,
    secondaryLight,
    primary,
    divider,
    isLoading,
    grey500,
  ]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid size={{ xs: 12 }}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid>
                  <Grid container direction="column" spacing={1}>
                    <Grid>
                      <Typography variant="subtitle2">Total Growth</Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="h3">$2,324.00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <TextField
                    id="standard-select-currency"
                    select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              size={{ xs: 12 }}
              sx={{
                "& .apexcharts-menu.apexcharts-menu-open": {
                  bgcolor: "background.paper",
                },
              }}
            >
              <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={480}
              />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

export default TotalGrowthBarChart;
