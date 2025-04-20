"use client";

import React, { useEffect } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";

import { z } from "zod";
import { Formik } from "formik";

import useAuth from "hooks/useAuth";
import useScriptRef from "hooks/useScriptRef";

import { dispatch } from "store";
// import { openSnackbar } from "store/slices/snackbar";
import { strengthColor, strengthIndicator } from "utils/password-strength";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// types
import { StringColorProps } from "types";
import { toFormikValidationSchema } from "zod-formik-adapter";
import AnimateButton from "@/components/extended/AnimatedButton";

const schema = z
  .object({
    password: z
      .string()
      .max(255, { message: "Password must be at most 255 characters" })
      .nonempty({ message: "Password is required" }),

    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"], // set error on confirmPassword
  });

const AuthResetPassword = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const [showPassword, setShowPassword] = React.useState(false);
  const [strength, setStrength] = React.useState(0);
  const [level, setLevel] = React.useState<StringColorProps>();

  const { isLoggedIn } = useAuth();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword("");
  }, []);

  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
        submit: null,
      }}
      validationSchema={toFormikValidationSchema(schema)}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // password reset
          if (scriptedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);

            // dispatch(
            //   openSnackbar({
            //     open: true,
            //     message: "Successfuly reset password.",
            //     variant: "alert",
            //     alert: {
            //       color: "success",
            //     },
            //     close: false,
            //   })
            // );

            setTimeout(() => {
              window.location.replace(
                isLoggedIn ? "/pages/authentication/auth3/login" : "/login"
              );
            }, 1500);
          }
        } catch (err: any) {
          console.error(err);
          if (scriptedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
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
        <form noValidate onSubmit={handleSubmit} {...others}>
          <FormControl
            fullWidth
            error={Boolean(touched.password && errors.password)}
            // @ts-expect-error Property 'customInput'
            sx={{ ...theme.typography.customInput }}
          >
            <InputLabel htmlFor="outlined-adornment-password-reset">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password-reset"
              type={showPassword ? "text" : "password"}
              value={values.password}
              name="password"
              onBlur={handleBlur}
              onChange={(e) => {
                handleChange(e);
                changePassword(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              inputProps={{}}
            />
          </FormControl>
          {touched.password && errors.password && (
            <FormControl fullWidth>
              <FormHelperText error id="standard-weight-helper-text-reset">
                {errors.password}
              </FormHelperText>
            </FormControl>
          )}
          {strength !== 0 && (
            <FormControl fullWidth>
              <Box sx={{ marginBottom: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid>
                    <Box
                      sx={{
                        backgroundColor: level?.color,
                        width: 85,
                        height: 8,
                        borderRadius: "7px",
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle1" fontSize="0.75rem">
                      {level?.label}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </FormControl>
          )}

          <FormControl
            fullWidth
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            // @ts-expect-error Property 'customInput'
            sx={{ ...theme.typography.customInput }}
          >
            <InputLabel htmlFor="outlined-adornment-confirm-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirm-password"
              type="password"
              value={values.confirmPassword}
              name="confirmPassword"
              label="Confirm Password"
              onBlur={handleBlur}
              onChange={handleChange}
              inputProps={{}}
            />
          </FormControl>

          {touched.confirmPassword && errors.confirmPassword && (
            <FormControl fullWidth>
              <FormHelperText
                error
                id="standard-weight-helper-text-confirm-password"
              >
                {" "}
                {errors.confirmPassword}{" "}
              </FormHelperText>
            </FormControl>
          )}

          {errors.submit && (
            <Box
              sx={{
                marginTop: 3,
              }}
            >
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )}
          <Box
            sx={{
              marginTop: 1,
            }}
          >
            <AnimateButton>
              <Button
                disableElevation
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="secondary"
              >
                Reset Password
              </Button>
            </AnimateButton>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default AuthResetPassword;
