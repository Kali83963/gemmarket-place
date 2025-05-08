// material-ui
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";

// project imports
import { gridSpacing } from "store/constant";

// ==============================|| SKELETON TOTAL GROWTH BAR CHART ||============================== //

const SkeletonTotalGrowthBarChart = () => (
  <Card>
    <CardContent>
      <Grid container spacing={gridSpacing}>
        <Grid size={{ xs: 12 }}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={gridSpacing}
          >
            <Grid>
              <Grid container spacing={1}>
                <Grid size={{ xs: 12 }}>
                  <Skeleton variant="text" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Skeleton variant="rectangular" height={20} />
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <Skeleton variant="rectangular" height={50} width={80} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Skeleton variant="rectangular" height={530} />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default SkeletonTotalGrowthBarChart;
