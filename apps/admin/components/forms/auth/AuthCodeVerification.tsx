"use client";

import { useState } from "react";

import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import OtpInput from "react-otp-input";

// types
import { ThemeMode } from "types/config";

// ============================|| STATIC - CODE VERIFICATION ||============================ //

const AuthCodeVerification = () => {
  const theme = useTheme();
  const [otp, setOtp] = useState<string>();
  const borderColor =
    theme.palette.mode === ThemeMode.DARK
      ? theme.palette.grey[200]
      : theme.palette.grey[300];
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12 }}>
        <OtpInput
          value={otp}
          onChange={(otpNumber: string) => setOtp(otpNumber)}
          numInputs={4}
          renderInput={(props) => <input {...props} />}
          containerStyle={{ justifyContent: "space-between" }}
          inputStyle={{
            width: "100%",
            margin: "8px",
            padding: "10px",
            border: `1px solid ${borderColor}`,
            borderRadius: 4,
          }}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Button
          disableElevation
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Continue
        </Button>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Typography>
            Did not receive the email? Check your spam filter, or
          </Typography>
          <Typography
            variant="body1"
            sx={{
              minWidth: 85,
              marginLeft: 2,
              textDecoration: "none",
              cursor: "pointer",
            }}
            color="primary"
          >
            Resend code
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AuthCodeVerification;
