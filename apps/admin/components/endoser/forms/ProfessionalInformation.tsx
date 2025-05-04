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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
import dayjs from "dayjs";

interface ProfessionalInformationProps {
  values: any;
  touched: any;
  errors: any;
  handleChange: any;
  setFieldValue: any;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ProfessionalInformation = ({
  values,
  touched,
  errors,
  handleChange,
  setFieldValue,
}: ProfessionalInformationProps) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
          />
          {errors.firstName && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.phoneNumber}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Certification Number"
            name="certificationNumber"
            value={values.certificationNumber}
            onChange={handleChange}
          />
          {errors.certificationNumber && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.certificationNumber}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Certifying Authority"
            type="text"
            name="certifyingAuthority"
            value={values.certifyingAuthority}
            onChange={handleChange}
          />
          {errors.certifyingAuthority && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.certifyingAuthority}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Certification Type"
            type="text"
            name="certificationType"
            value={values.certificationType}
            onChange={handleChange}
          />
          {errors.certificationType && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.certificationType}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={
                values.certificationExpiryDate
                  ? dayjs(values.certificationExpiryDate)
                  : null
              }
              onChange={(value) => {
                setFieldValue(
                  "certificationExpiryDate",
                  value ? value.toISOString() : null
                );
              }}
              label="Certification Expiry"
              name="certificationExpiryDate"
            />
          </LocalizationProvider>
          {errors.certificationExpiryDate && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.certificationExpiryDate}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Years of Experience"
            type="number"
            name="yearsOfExperience"
            value={values.yearsOfExperience}
            onChange={handleChange}
          />
          {errors.yearsOfExperience && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.yearsOfExperience}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <InputLabel id="specialization-name-label">Specialization</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="specialization-name-label"
            multiple
            name="specializations"
            value={values.specializations || []}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {["Diamonds", "Rubies", "Sapphires"].map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          {errors.specializations && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.specializations}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <InputLabel id="specialization-name-label">
            Professional Memberships
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="specialization-name-label"
            multiple
            name="professionalMemberships"
            value={values.professionalMemberships || []}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {["American Gem Society"].map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          {errors.professionalMemberships && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.professionalMemberships}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <InputLabel id="specialization-name-label">
            Verification Methods
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="specialization-name-label"
            multiple
            name="verificationMethods"
            value={values.verificationMethods || []}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {["Visual Inspection", "Spectroscopy"].map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          {errors.verificationMethods && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.verificationMethods}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <InputLabel id="specialization-name-label">
            Verification Equipment
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="specialization-name-label"
            multiple
            name="verificationEquipment"
            value={values.verificationEquipment || []}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {["Gem Microscope", "Refractometer"].map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          {errors.verificationEquipment && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.verificationEquipment}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Bio"
            name="endorserBio"
            multiline
            rows={4}
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
    </Grid>
  );
};

export default ProfessionalInformation;
