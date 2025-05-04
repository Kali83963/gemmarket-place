"use-client";
// material-ui
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// project imports
import { gridSpacing } from "store/constant";
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import { Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

interface PersonalInfomationProps {
  values: any;
  touched: any;
  errors: any;
  handleChange: any;
}

const PersonalInformation = ({
  values,
  touched,
  errors,
  handleChange,
}: PersonalInfomationProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  console.log(errors);
  console.log(touched);

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault()!;
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.firstName}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.lastName}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.email}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={values.password}
            name="password"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {errors.password && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.password}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12 }} sx={{ display: "flex", alignItems: "center" }}>
        <InputLabel id="active-checkbox-label">Active</InputLabel>
        <FormControl>
          <Checkbox
            name="isActive"
            color="primary"
            checked={values.isActive}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default PersonalInformation;
