"use client";

import { useEffect, useState } from "react";

// material-ui
import Grid from "@mui/material/Grid";

// project imports
import { gridSpacing } from "store/constant";

// assets
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import EarningCard from "@/components/dashboard/Cards/EarningCard";
import TotalOrderLineChartCard from "@/components/dashboard/Cards/TotalOrderInlineCard";
import TotalGrowthBarChart from "@/components/dashboard/Cards/TotalGrowthBarChart";
import TotalIncomeDarkCard from "@/components/dashboard/Cards/TotalIncomeDarkChart";
import TotalIncomeLightCard from "@/components/dashboard/Cards/TotalIncomeLightCard";
import { getAnalytics, getCharts } from "@/http/api";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [cardData, setCardData] = useState({
    totalRevenue: 0,
    orders: {},
    totalUsers: 0,
    totalGemstones: 0,
  });
  const [chartData, setChartData] = useState({
    ordersTrend: {},
  });
  const getDashboardData = async () => {
    try {
      setLoading(true);
      const [cardDataResponse, chartDataResponse] = await Promise.all([
        getAnalytics(),
        getCharts(),
      ]);
      setCardData(cardDataResponse?.data?.data);
      setChartData(chartDataResponse?.data?.data);
    } catch (e: any) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const onChangeChartDuration = async (value: any) => {
    try {
      const response = await getCharts(value);
      setChartData(response?.data?.data);
    } catch (e: any) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid size={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
            <EarningCard isLoading={isLoading} value={cardData?.totalRevenue} />
          </Grid>
          <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
            <TotalOrderLineChartCard
              isLoading={isLoading}
              value={cardData?.orders}
            />
          </Grid>
          <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>
            <Grid container spacing={gridSpacing}>
              <Grid size={{ lg: 12, md: 6, sm: 6, xs: 12 }}>
                <TotalIncomeDarkCard
                  isLoading={isLoading}
                  value={cardData?.totalUsers}
                />
              </Grid>
              <Grid size={{ lg: 12, md: 6, sm: 6, xs: 12 }}>
                <TotalIncomeLightCard
                  {...{
                    isLoading: isLoading,
                    total: cardData?.totalGemstones,
                    label: "Total Gemstone",
                    icon: <StorefrontTwoToneIcon fontSize="inherit" />,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid size={{ xs: 12 }}>
            <TotalGrowthBarChart
              isLoading={isLoading}
              handleChangeDuration={onChangeChartDuration}
              values={chartData?.ordersTrend}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
