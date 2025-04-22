"use client";

import Link from "next/link";

import { Theme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import AuthWrapper from "@/components/wrapper/AuthWrapper";
import AuthCardWrapper from "@/components/wrapper/AuthCardWrapper";
import Logo from "@/components/Logo";
import AuthFooter from "@/components/footer/AuthFooter";
import AuthResetPassword from "@/components/forms/auth/AuthResetPassword";

const ResetPassword = () => {
  const downMD = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

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
                      aria-label="theme logo"
                      style={{ textDecoration: "none" }}
                    >
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Grid
                      container
                      direction={{ xs: "column-reverse", md: "row" }}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid>
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Typography
                            color="secondary.main"
                            gutterBottom
                            variant={downMD ? "h3" : "h2"}
                          >
                            Reset Password
                          </Typography>
                          <Typography
                            variant="caption"
                            fontSize="16px"
                            textAlign={{ xs: "center", md: "inherit" }}
                          >
                            Please choose your new password
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <AuthResetPassword />
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

export default ResetPassword;
