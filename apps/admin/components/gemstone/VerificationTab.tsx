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
import {
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { toast } from "react-toastify";

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

const VerificationTab = ({ data }: any) => {
  const theme = useTheme();

  const sxDivider = {
    borderColor: "primary.light",
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
              <Grid container spacing={gridSpacing}>
                <Formik
                  initialValues={{}}
                  // validationSchema={toFormikValidationSchema(schema)}
                  onSubmit={async (
                    values,
                    { setErrors, setStatus, setSubmitting, resetForm }
                  ) => {
                    console.log(values);
                    // try {
                    //   const response = await createUser(values);

                    //   setStatus({ success: true });
                    //   setSubmitting(false);
                    //   resetForm();
                    //   toast.success("User created successfully!");
                    // } catch (err: any) {
                    //   console.error(err);

                    //   setStatus({ success: false });
                    //   setErrors({ firstName: err.message });
                    //   setSubmitting(false);
                    //   toast.error("Error creating User!");
                    // }
                  }}
                >
                  {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                  }) => (
                    <>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth>
                          <InputLabel id="role-select-label">
                            Certificate Status
                          </InputLabel>
                          <Select
                            labelId="role-select-label"
                            id="role-select"
                            label="Certificate Status"
                            name="certificationStatus"
                            onChange={handleChange}
                            value={null}
                          >
                            <MenuItem value={"PENDING"}>Pending</MenuItem>
                            <MenuItem value={"ACCEPTED"}>Accepted</MenuItem>
                            <MenuItem value={"REJECTED"}>Rejected</MenuItem>
                          </Select>
                          {/* {errors.role && (
                              <FormHelperText
                                error
                                id="standard-weight-helper-text-email-login"
                              >
                                {errors.role}
                              </FormHelperText>
                            )} */}
                        </FormControl>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth>
                          <InputLabel id="role-select-label">Status</InputLabel>
                          <Select
                            labelId="role-select-label"
                            id="role-select"
                            label="Status"
                            name="status"
                            onChange={handleChange}
                            value={null}
                          >
                            <MenuItem value={"PENDING"}>Pending</MenuItem>
                            <MenuItem value={"AVIALABLE"}>AVIALABLE</MenuItem>
                            <MenuItem value={"SOLD"}>SOLD</MenuItem>
                          </Select>
                          {/* {errors.role && (
                              <FormHelperText
                                error
                                id="standard-weight-helper-text-email-login"
                              >
                                {errors.role}
                              </FormHelperText>
                            )} */}
                        </FormControl>
                      </Grid>
                      <Grid
                        size={{ xs: 12 }}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <InputLabel id="active-checkbox-label">
                          Active
                        </InputLabel>
                        <FormControl>
                          <Checkbox
                            name="isActive"
                            color="primary"
                            checked={false}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Grid>
                    </>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default VerificationTab;
