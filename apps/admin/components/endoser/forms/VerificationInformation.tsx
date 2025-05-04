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

interface VerificationInformationProps {
  values: any;
  touched: any;
  errors: any;
  handleChange: any;
}

const VerificationInformation = ({
  values,
  touched,
  errors,
  handleChange,
}: VerificationInformationProps) => {
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
            label="Bio"
            name="endorserBio"
            multiline
            rows={4}
            maxRows={4}
            value={values.endorserBio}
            onChange={handleChange}
          />
          {errors.endorserBio && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.endorserBio}
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
    </Grid>
  );
};

export default VerificationInformation;
