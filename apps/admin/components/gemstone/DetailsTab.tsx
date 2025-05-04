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

// types
import { ThemeMode } from "types/config";
import Chip from "@/components/extended/Chip";
import SubCard from "../cards/SubCard";

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

const DetailsTab = ({ data }: any) => {
  const sxDivider = {
    borderColor: "primary.light",
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid size={{ xs: 12 }}>
        <SubCard>
          <Grid container spacing={gridSpacing}>
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={gridSpacing}>
                <Grid size={{ sm: 6, md: 4, xs: 12 }}>
                  <Stack spacing={2}>
                    <Typography variant="h4">Basic Details</Typography>
                    <Stack spacing={0}>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Gemstone Name
                        </Typography>
                        <Typography variant="body2">{data?.name}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Description :
                        </Typography>
                        <Typography variant="body2">
                          {data?.description}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Gemstone Type :
                        </Typography>
                        <Typography variant="body2">{data?.type}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Shape :</Typography>
                        <Typography variant="body2">{data?.shape}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Origin :</Typography>
                        <Typography variant="body2">{data?.origin}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Treatment :</Typography>
                        <Typography variant="body2">
                          {data?.treatment}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ sm: 6, md: 4, xs: 12 }}>
                  <Stack spacing={2}>
                    <Typography variant="h4">Specification</Typography>
                    <Stack spacing={0}>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Carat Weight :
                        </Typography>
                        <Typography variant="body2">{data?.weight}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Dimension (mm) :
                        </Typography>
                        <Typography variant="body2">
                          {data?.dimension}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Certification :
                        </Typography>
                        <Typography variant="body2">
                          {data?.certification}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ sm: 6, md: 4, xs: 12 }}>
                  <Stack spacing={0} sx={{ mt: { xs: 0, md: 3 } }}>
                    <Stack direction="row" spacing={1}>
                      <Typography variant="subtitle1">
                        Certificate Status :
                      </Typography>
                      <Chip
                        label={data?.certificationStatus}
                        variant="outlined"
                        size="small"
                        chipcolor={
                          data?.certificationStatus === "ACCEPTED"
                            ? "success"
                            : "secondary"
                        }
                      />
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Typography variant="subtitle1">Status :</Typography>
                      <Chip
                        label={data?.status}
                        variant="outlined"
                        size="small"
                        chipcolor={
                          data?.status === "AVIALABLE" ? "success" : "secondary"
                        }
                      />
                    </Stack>
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
                    <Typography variant="h4">Specific Attributes</Typography>
                    <Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Color Grade :
                        </Typography>
                        <Typography variant="body2">
                          {data?.color_grade}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Clarity Grade :
                        </Typography>
                        <Typography variant="body2">
                          {data?.clarity_grade}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Cut Grade :</Typography>
                        <Typography variant="body2">
                          {data?.cut_grade}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Polish :</Typography>
                        <Typography variant="body2">{data?.polish}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Symmetry :</Typography>
                        <Typography variant="body2">
                          {data?.symmetry}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Fluorescence :
                        </Typography>
                        <Typography variant="body2">
                          {data?.fluorescence}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ sm: 6, md: 4 }}>
                  <Stack spacing={2}>
                    <Typography variant="h4">
                      Colored Gemstone Attributes
                    </Typography>
                    <Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Color / Hue :
                        </Typography>
                        <Typography variant="body2">{data?.color}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Transparency :
                        </Typography>
                        <Typography variant="body2">
                          {data?.transparency}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Color Saturation :
                        </Typography>
                        <Typography variant="body2">
                          {data?.color_saturation}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Additional Information :
                        </Typography>
                        <Typography variant="body2">
                          {data?.additional_specification}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ sm: 6, md: 4, xs: 12 }}>
                  <Stack spacing={2}>
                    <Typography variant="h4">Price & Quantity </Typography>
                    <Stack spacing={0}>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Price :</Typography>
                        <Typography variant="body2">{data?.price}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Quantity :</Typography>
                        <Typography variant="body2">
                          {data?.quantity}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Available Quantity :
                        </Typography>
                        <Typography variant="body2">
                          {data?.quantity}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">SKU :</Typography>
                        <Typography variant="body2">{data?.sku}</Typography>
                      </Stack>
                    </Stack>
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

export default DetailsTab;
