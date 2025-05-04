// material-ui
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Chip, { ChipProps } from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

// assets
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import EditTwoTone from "@mui/icons-material/EditTwoTone";
import ReceiptTwoTone from "@mui/icons-material/ReceiptTwoTone";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

// types
import { UserProfile } from "types/user-profile";
import { ThemeMode } from "types/config";
import Avatar from "../extended/Avatar";
import { useDrawer } from "@/contexts/DrawerContext";

interface RowDetailProps {
  rowValue: any;
}

// ==============================|| CLIENT LIST - DETAILS ||============================== //

const EndoserDetails = ({ rowValue }: RowDetailProps) => {
  const theme = useTheme();
  const balance = Math.floor(Math.random() * 4);
  const matchesXs = useMediaQuery(theme.breakpoints.down("sm"));
  const { handleDrawerClose } = useDrawer();

  let label: string;
  let color: string;
  let chipcolor;

  switch (rowValue?.role) {
    case "SELLER":
      label = "Seller";
      color = "orange.dark";
      // @ts-expect-error Property 'orange'
      chipcolor = alpha(theme.palette.orange.light, 0.8);
      break;
    case "BUYER":
      label = "Buyer";
      color = "warning.dark";
      chipcolor = "warning.light";
      break;
    default:
      label = "New";
      color = "primary";
      break;
  }

  return (
    <Grid container spacing={1.5}>
      <Grid size={{ xs: 12 }}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2.5, pt: 1.5 }}
        >
          <Stack direction="row" spacing={1}>
            <IconButton
              onClick={handleDrawerClose}
              sx={{ mr: "10px", padding: matchesXs ? "0px" : "" }}
            >
              {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 1.5,
                borderColor: "divider",
                color: "grey.900",
              }}
              startIcon={<EditTwoTone />}
            >
              Edit
            </Button>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing={{ xs: 1, sm: 2.5 }}
          >
            <Tooltip title="Delete">
              <IconButton
                color="error"
                sx={{
                  borderRadius: 1.5,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <DeleteOutlineOutlined />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Divider />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box
          sx={{
            bgcolor: "grey.50",
            my: -1.5,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="space-between"
            sx={{ py: 1.5, px: 2.5 }}
          >
            <Stack direction={"row"} spacing={1}>
              <Stack spacing={1}>
                <Avatar
                  alt="User 1"
                  sx={{ height: "30px", width: "30px", alignItems: "center" }}
                  src={
                    rowValue?.image &&
                    `/assets/images/e-commerce/${rowValue?.image}`
                  }
                />
              </Stack>
              <Stack>
                <Typography variant="subtitle1">
                  {rowValue?.user.firstName} {rowValue?.user.lastName}
                  <Chip
                    label={label}
                    size="small"
                    variant="filled"
                    sx={{
                      ml: 0.75,
                      height: "20px",
                      bgcolor: chipcolor,
                      color: color,
                      cursor: "pointer",
                    }}
                  />
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  {rowValue?.user.role}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Divider />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box sx={{ px: 2.5 }}>
          <Grid container spacing={2.5}>
            <Grid size={{ xs: 12 }}>
              <Typography variant="h5">Personal Information</Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              <Typography variant="subtitle1">{rowValue?.user.id}</Typography>
              <Typography variant="subtitle2">ID number</Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              <Typography variant="subtitle1">
                {rowValue?.user.firstName} {rowValue?.user.lastName}
              </Typography>
              <Typography variant="subtitle2">Endorser name</Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              <Typography variant="subtitle1">
                {rowValue?.user.email}
              </Typography>
              <Typography variant="subtitle2">Email</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Divider />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box sx={{ px: 2.5 }}>
          <Grid container spacing={2.5}>
            <Grid size={{ xs: 12 }}>
              <Typography variant="h5">Professional Information</Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              <Typography variant="subtitle1">
                {rowValue?.phoneNumber}
              </Typography>
              <Typography variant="subtitle2">Phone number</Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              <Typography variant="subtitle1">
                {rowValue?.certificationNumber}
              </Typography>
              <Typography variant="subtitle2">Certification number</Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              <Typography variant="subtitle1">
                {rowValue?.certificationType}
              </Typography>
              <Typography variant="subtitle2">Certification Type</Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              <Typography variant="subtitle1">
                {rowValue?.certifyingAuthority}
              </Typography>
              <Typography variant="subtitle2">
                Certification Authority
              </Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              <Typography variant="subtitle1">
                {rowValue?.certificationExpiryDate}
              </Typography>
              <Typography variant="subtitle2">
                Certification Expiry Date
              </Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              <Typography variant="subtitle1">
                {rowValue?.yearsOfExperience}
              </Typography>
              <Typography variant="subtitle2">Year of Experience</Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              {rowValue?.professionalMemberships?.map(
                (s: any, index: number) => (
                  <Typography variant="subtitle1">
                    {s}
                    {index < rowValue.professionalMemberships.length - 1
                      ? ", "
                      : ""}
                  </Typography>
                )
              )}

              <Typography variant="subtitle2">
                Professional Membership
              </Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              {rowValue?.specializations?.map((s: any, index: number) => (
                <Typography variant="subtitle1">
                  {s}
                  {index < rowValue.specializations.length - 1 ? ", " : ""}
                </Typography>
              ))}

              <Typography variant="subtitle2">Specialization</Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              {rowValue?.verificationEquipment?.map((s: any, index: number) => (
                <Typography variant="subtitle1">
                  {s}
                  {index < rowValue.verificationEquipment.length - 1
                    ? ", "
                    : ""}
                </Typography>
              ))}

              <Typography variant="subtitle2">
                Verification Equipment
              </Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              {rowValue?.verificationEquipment?.map((s: any, index: number) => (
                <Typography variant="subtitle1">
                  {s}
                  {index < rowValue.verificationEquipment.length - 1
                    ? ", "
                    : ""}
                </Typography>
              ))}

              <Typography variant="subtitle2">
                Verification Equipment
              </Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              {rowValue?.verificationMethods?.map((s: any, index: number) => (
                <Typography variant="subtitle1">
                  {s}
                  {index < rowValue.verificationMethods.length - 1 ? ", " : ""}
                </Typography>
              ))}

              <Typography variant="subtitle2">Verification Method</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Divider />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box sx={{ px: 2.5 }}>
          <Grid container spacing={2.5}>
            <Grid size={{ xs: 12 }}>
              <Typography variant="h5">Verification Information</Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              <Typography variant="subtitle1">{rowValue?.status}</Typography>
              <Typography variant="subtitle2">Status</Typography>
            </Grid>
            <Grid size={{ sm: 6, xs: 12 }}>
              <Typography variant="subtitle1">
                {rowValue?.lastVerified}
              </Typography>
              <Typography variant="subtitle2">Last Verified</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EndoserDetails;
