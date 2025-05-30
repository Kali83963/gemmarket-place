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

import SubCard from "../cards/SubCard";
import {
  Button,
  CardActions,
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
import React from "react";
import { z } from "zod";
import AnimateButton from "../extended/AnimatedButton";
import { updateGemstoneStatusAdmin } from "@/http/api";

const schema = z.object({
  status: z.enum(["PENDING", "AVAILABLE", "SOLD"]),
  isActive: z.boolean().default(true),
});

const initialValues = {
  status: "",
  isActive: true, // Empty string to meet the "nonempty" rule
};

const VerificationTab = ({
  data,
  id,
  onSumbitForm,
}: {
  data: any;
  id: string;
  onSumbitForm: any;
}) => {
  const theme = useTheme();

  const [formValues, setFormValues] = React.useState(data);

  React.useEffect(() => {
    setFormValues(data);
  }, []);

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
                  enableReinitialize={true}
                  initialValues={formValues}
                  validationSchema={toFormikValidationSchema(schema)}
                  onSubmit={async (
                    values,
                    { setErrors, setStatus, setSubmitting, resetForm }
                  ) => {
                    console.log(values);
                    try {
                      const response = await updateGemstoneStatusAdmin(
                        id,
                        values
                      );

                      setStatus({ success: true });
                      setSubmitting(false);
                      onSumbitForm((prev: any) => ({ ...prev, ...values }));
                      setFormValues(values);
                      resetForm();
                      toast.success(response?.data?.message);
                    } catch (err: any) {
                      console.error(err);

                      setStatus({ success: false });
                      setErrors({ firstName: err.message });
                      setSubmitting(false);
                      toast.error("Error creating User!");
                    }
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
                      <form onSubmit={handleSubmit}>
                        <Grid size={{ xs: 12 }}>
                          <FormControl fullWidth>
                            <InputLabel id="role-select-label">
                              Status
                            </InputLabel>
                            <Select
                              labelId="role-select-label"
                              id="role-select"
                              label="Status"
                              name="status"
                              onChange={handleChange}
                              value={values?.status}
                            >
                              <MenuItem value={"PENDING"}>Pending</MenuItem>
                              <MenuItem value={"AVAILABLE"}>AVAILABLE</MenuItem>
                              <MenuItem value={"SOLD"}>SOLD</MenuItem>
                            </Select>
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
                              checked={values?.isActive}
                              onChange={handleChange}
                            />
                          </FormControl>
                        </Grid>
                        <CardActions>
                          <Grid
                            container
                            justifyContent="space-between"
                            spacing={0}
                          >
                            <Grid>
                              <AnimateButton>
                                <Button
                                  variant="contained"
                                  size="large"
                                  disabled={isSubmitting}
                                  fullWidth
                                  type="submit"
                                >
                                  Save
                                </Button>
                              </AnimateButton>
                            </Grid>
                          </Grid>
                        </CardActions>
                      </form>
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
