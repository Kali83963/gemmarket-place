"use client";

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { gridSpacing } from "store/constant";
import { StorefrontTwoTone } from "@mui/icons-material"

import EarningCard from "@/components/dashboard/Cards/EarningCard";
import TotalOrderLineChartCard from "@/components/dashboard/Cards/TotalOrderInlineCard";
import TotalGrowthBarChart from "@/components/dashboard/Cards/TotalGrowthBarChart";
import TotalIncomeDarkCard from "@/components/dashboard/Cards/TotalIncomeDarkChart";
import TotalIncomeLightCard from "@/components/dashboard/Cards/TotalIncomeLightCard";
import { getAnalytics, getCharts } from "@/http/api";
import { useLoading } from "@/hooks/useLoading";
import LoadingScreen from "@/components/LoadingScreen";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const { isLoading, withLoading } = useLoading(true);
  const [analytics, setAnalytics] = useState<any>(null);
  const [charts, setCharts] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      await withLoading(async () => {
        try {
          const [analyticsResponse, chartsResponse] = await Promise.all([
            getAnalytics(),
            getCharts()
          ]);
          setAnalytics(analyticsResponse.data);
          setCharts(chartsResponse.data);
        } catch (error) {
          console.error('Error fetching dashboard data:', error);
        }
      });
    };

    fetchData();
  }, [withLoading]);

  const onChangeChartDuration = async (duration: string) => {
    const response = await getCharts(duration);
    setCharts(response?.data?.data);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid size={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
            <EarningCard isLoading={isLoading} value={analytics?.totalRevenue} />
          </Grid>
          <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
            <TotalOrderLineChartCard
              isLoading={isLoading}
              value={analytics?.orders}
            />
          </Grid>
          <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>
            <Grid container spacing={gridSpacing}>
              <Grid size={{ lg: 12, md: 6, sm: 6, xs: 12 }}>
                <TotalIncomeDarkCard
                  isLoading={isLoading}
                  value={analytics?.totalUsers}
                />
              </Grid>
              <Grid size={{ lg: 12, md: 6, sm: 6, xs: 12 }}>
                <TotalIncomeLightCard
                  {...{
                    isLoading: isLoading,
                    total: analytics?.totalGemstones,
                    label: "Total Gemstone",
                    icon: <StorefrontTwoTone fontSize="inherit" />,
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
              values={charts?.ordersTrend}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
