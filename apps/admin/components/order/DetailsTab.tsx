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
        <SubCard
          secondary={
            <Typography variant="subtitle1">{data?.createdAt}</Typography>
          }
        >
          <Grid container spacing={gridSpacing}>
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={3}>
                <Grid>
                  <Typography variant="body2">
                    <CalendarTodayTwoToneIcon sx={detailsIconSX} />{" "}
                    {data?.shippingInfo?.firstName}{" "}
                    {data?.shippingInfo?.lastName}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="body2">
                    <PhoneAndroidTwoToneIcon sx={detailsIconSX} />{" "}
                    {data?.shippingInfo?.phone}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="body2">
                    <EmailTwoToneIcon sx={detailsIconSX} />{" "}
                    {data?.shippingInfo?.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Divider sx={sxDivider} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={gridSpacing}>
                <Grid size={{ sm: 6, md: 4, xs: 12 }}>
                  <Stack spacing={2}>
                    <Typography variant="h4">Payment method</Typography>
                    <Stack spacing={0}>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        Credit Card
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Transaction ID :
                        </Typography>
                        <Typography variant="body2">{data?.name}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Amount :</Typography>
                        <Typography variant="body2">
                          {data?.totalAmount}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ sm: 6, md: 4, xs: 12 }}>
                  <Stack spacing={2}>
                    <Typography variant="h4">Shipping method</Typography>
                    <Stack spacing={0}>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        Carrier
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          Tracking Code :
                        </Typography>
                        <Typography variant="body2">FX-012345-6</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Date :</Typography>
                        <Typography variant="body2">
                          {data?.createdAt}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ sm: 6, md: 4, xs: 12 }}>
                  <Stack spacing={0} sx={{ mt: { xs: 0, md: 3 } }}>
                    <Stack direction="row" spacing={1}>
                      <Typography variant="subtitle1">
                        Fulfillment status :
                      </Typography>
                      <Typography variant="body2">{data?.status}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Typography variant="subtitle1">
                        Payment status :
                      </Typography>
                      <Chip
                        label={"Paid"}
                        variant="outlined"
                        size="small"
                        chipcolor={"success"}
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
                    <Typography variant="h4">Billing address</Typography>
                    <Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          First name :
                        </Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.firstName}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Last name :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.lastName}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Address :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.address}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">City :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.city}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Country :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.country}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">State :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.state}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Zip code :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.postalCode}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Phone :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.phone}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ sm: 6, md: 4 }}>
                  <Stack spacing={2}>
                    <Typography variant="h4">Shipping address</Typography>
                    <Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">
                          First name :
                        </Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.firstName}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Last name :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.lastName}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Address :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.address}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">City :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.city}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Country :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.country}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">State :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.state}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Zip code :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.postalCode}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1">Phone :</Typography>
                        <Typography variant="body2">
                          {data?.shippingInfo?.phone}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <SubCard title="Items" content={false}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12 }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ pl: 3 }}>Description</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Total</TableCell>
                      <TableCell align="right" sx={{ pr: 3 }} />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.orderItems.map((row: any, index: number) => (
                      <TableRow key={index}>
                        <TableCell sx={{ pl: 3 }}>
                          <Typography variant="subtitle1">
                            {row?.product.name}
                          </Typography>
                          <Typography variant="body2">
                            {row?.product.description}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">{row?.quantity}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <SubCard
                sx={{
                  mx: 3,
                  mb: 3,
                  bgcolor: "primary.light",
                }}
              >
                <Grid container justifyContent="flex-end" spacing={gridSpacing}>
                  <Grid size={{ sm: 6, md: 4 }}>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12 }}>
                        <Grid container spacing={1}>
                          <Grid size={{ xs: 6 }}>
                            <Typography align="right" variant="subtitle1">
                              Sub Total :
                            </Typography>
                          </Grid>
                          <Grid size={{ xs: 6 }}>
                            <Typography align="right" variant="body2">
                              ${data?.totalAmount}
                            </Typography>
                          </Grid>
                          <Grid size={{ xs: 6 }}>
                            <Typography align="right" variant="subtitle1">
                              Tax :
                            </Typography>
                          </Grid>
                          <Grid size={{ xs: 6 }}>
                            <Typography align="right" variant="body2">
                              ${data?.tax}
                            </Typography>
                          </Grid>
                          <Grid size={{ xs: 6 }}>
                            <Typography align="right" variant="subtitle1">
                              Shipping Cost :
                            </Typography>
                          </Grid>
                          <Grid size={{ xs: 6 }}>
                            <Typography align="right" variant="body2">
                              ${data?.shippingCost}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Divider sx={{ bgcolor: "dark.main" }} />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Grid container spacing={1}>
                          <Grid size={{ xs: 6 }}>
                            <Typography
                              align="right"
                              color="primary"
                              variant="subtitle1"
                            >
                              Total :
                            </Typography>
                          </Grid>
                          <Grid size={{ xs: 6 }}>
                            <Typography
                              align="right"
                              color="primary"
                              variant="subtitle1"
                            >
                              $
                              {data?.totalAmount +
                                data?.shippingCost +
                                data?.tax}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </SubCard>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default DetailsTab;
