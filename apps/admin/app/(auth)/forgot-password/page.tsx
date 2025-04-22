"use client";

import Link from "next/link";

import { Theme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import useAuth from "hooks/useAuth";
import AuthFooter from "@/components/footer/AuthFooter";
import AuthForgotPassword from "@/components/forms/auth/AuthForgotPassword";
import Logo from "@/components/Logo";
import AuthCardWrapper from "@/components/wrapper/AuthCardWrapper";
import AuthWrapper from "@/components/wrapper/AuthWrapper";

const ForgotPassword = () => {
  const downMD = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const { isLoggedIn } = useAuth();

  return (
    <AuthWrapper>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{ minHeight: "100vh" }}
      >
        <Grid size={{ xs: 12 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "calc(100vh - 68px)" }}
          >
            <Grid sx={{ margin: { xs: 1, sm: 3 }, marginBottom: 0 }}>
              <AuthCardWrapper>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid sx={{ marginBottom: 3 }}>
                    <Link
                      href="#"
                      aria-label="theme-logo"
                      style={{ textDecoration: "none" }}
                    >
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="center"
                      textAlign="center"
                      spacing={2}
                    >
                      <Grid size={{ xs: 12 }}>
                        <Typography
                          color="secondary.main"
                          gutterBottom
                          variant={downMD ? "h3" : "h2"}
                        >
                          Forgot password?
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Typography
                          variant="caption"
                          fontSize="16px"
                          textAlign="center"
                        >
                          Enter your email address below and we&apos;ll send you
                          password reset OTP.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <AuthForgotPassword />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Divider />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      size={{ xs: 12 }}
                    >
                      <Typography
                        component={Link}
                        href={"/login"}
                        variant="subtitle1"
                        sx={{ textDecoration: "none" }}
                      >
                        Already have an account?
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }} sx={{ margin: 3, marginTop: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default ForgotPassword;
