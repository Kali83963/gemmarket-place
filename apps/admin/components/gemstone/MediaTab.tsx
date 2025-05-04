// material-ui
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

// project imports

import { gridSpacing } from "store/constant";

// assets
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import { Image } from "antd";
// types
import { ThemeMode } from "types/config";
import Chip from "@/components/extended/Chip";
import SubCard from "../cards/SubCard";
import { Slider } from "@mui/material";

const detailsIconSX = {
  width: 15,
  height: 15,
  verticalAlign: "text-top",
  mr: 0.5,
  mt: 0.25,
};

// table data
function createData(
  product: string,
  description: string,
  quantity: string,
  amount: string,
  total: string
) {
  return { product, description, quantity, amount, total };
}

const rows = [
  createData(
    "Logo Design",
    "lorem ipsum dolor sit amat, connecter adieu siccing eliot",
    "6",
    "$200.00",
    "$1200.00"
  ),
  createData(
    "Landing Page",
    "lorem ipsum dolor sit amat, connecter adieu siccing eliot",
    "7",
    "$100.00",
    "$700.00"
  ),
  createData(
    "Admin Template",
    "lorem ipsum dolor sit amat, connecter adieu siccing eliot",
    "5",
    "$150.00",
    "$750.00"
  ),
];

// ==============================|| INVOICE DETAILS - DETAILS ||============================== //

const MediaTab = ({ data }: any) => {
  const theme = useTheme();

  const sxDivider = {
    borderColor:
      theme.palette.mode === ThemeMode.DARK ? "divider" : "primary.light",
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid size={{ xs: 12 }}>
        <SubCard>
          <Grid container spacing={gridSpacing}>
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={3}></Grid>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Divider sx={sxDivider} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={gridSpacing}>
                <Grid size={{ sm: 6, md: 6, xs: 12 }}>
                  <Stack spacing={2}>
                    <Typography variant="h4">Gemstone Images</Typography>
                    <Image.PreviewGroup>
                      {data?.images.map((image: any) => {
                        return <Image src={image?.url} />;
                      })}
                    </Image.PreviewGroup>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Divider sx={sxDivider} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={gridSpacing}>
                <Grid size={{ sm: 6, md: 4 }}>
                  <Stack spacing={2}>
                    <Typography variant="h4">Certificate</Typography>
                    <Image.PreviewGroup>
                      <Image src={data?.certification_document} />
                    </Image.PreviewGroup>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default MediaTab;
