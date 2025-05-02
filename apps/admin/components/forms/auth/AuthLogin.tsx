import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
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
import { DASHBOARD_PATH } from "config";
import { toFormikValidationSchema } from "zod-formik-adapter";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AnimateButton from "@/components/extended/AnimatedButton";
import { login } from "@/http/api";

const schema = z.object({
  email: z
    .string()
    .email("Must be a valid email")
    .max(255, "Email must be at most 255 characters")
    .nonempty("Email is required"),
  password: z
    .string()
    .max(255, "Password must be at most 255 characters")
    .nonempty("Password is required"),
});

const JWTLogin = ({ loginProp, ...others }: { loginProp?: number }) => {
  const theme = useTheme();
  const router = useRouter();
  const scriptedRef = useScriptRef();
  const { authLogin } = useAuth();

  const [checked, setChecked] = React.useState(true);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault()!;
  };

  return (
    <Formik
      initialValues={{
        email: "info@codedthemes.com",
        password: "123456",
        submit: null,
      }}
      validationSchema={toFormikValidationSchema(schema)}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          const payload = {
            email: values.email,
            password: values.password,
          };
          const response = await login(payload);
          console.log(response);
          setStatus({ success: true });
          authLogin(response?.data);
          router.push(DASHBOARD_PATH);
          // await login(values.email, values.password);
          // if (scriptedRef.current) {
          //   setStatus({ success: true });
          //   router.push(DASHBOARD_PATH);
          //   setSubmitting(false);
          // }
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
            error={Boolean(touched.email && errors.email)}
            // @ts-expect-error Property 'customInput'
            sx={{ ...theme.typography?.customInput }}
          >
            <InputLabel htmlFor="outlined-adornment-email-login">
              Email Address / Username
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-email-login"
              type="email"
              value={values.email}
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              inputProps={{}}
            />
            {touched.email && errors.email && (
              <FormHelperText
                error
                id="standard-weight-helper-text-email-login"
              >
                {errors.email}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl
            fullWidth
            error={Boolean(touched.password && errors.password)}
            // @ts-expect-error Property 'customInput'
            sx={{ ...theme.typography?.customInput }}
          >
            <InputLabel htmlFor="outlined-adornment-password-login">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password-login"
              type={showPassword ? "text" : "password"}
              value={values.password}
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
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
              label="Password"
            />
            {touched.password && errors.password && (
              <FormHelperText
                error
                id="standard-weight-helper-text-password-login"
              >
                {errors.password}
              </FormHelperText>
            )}
          </FormControl>

          <Grid container alignItems="center" justifyContent="space-between">
            <Grid>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    name="checked"
                    color="primary"
                  />
                }
                label="Keep me logged in"
              />
            </Grid>
            <Grid>
              <Typography
                variant="subtitle1"
                component={Link}
                href={"/forgot-password"}
                color="secondary"
                sx={{ textDecoration: "none" }}
              >
                Forgot Password?
              </Typography>
            </Grid>
          </Grid>

          {errors.submit && (
            <Box sx={{ mt: 3 }}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )}
          <Box sx={{ mt: 2 }}>
            <AnimateButton>
              <Button
                color="secondary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In
              </Button>
            </AnimateButton>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export { JWTLogin as AuthLogin };
