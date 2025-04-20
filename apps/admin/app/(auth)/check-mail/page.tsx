"use client";

import Link from "next/link";

import { Theme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import useAuth from "hooks/useAuth";
import AuthFooter from "@/components/footer/AuthFooter";
import Logo from "@/components/Logo";
import AuthCardWrapper from "@/components/wrapper/AuthCardWrapper";
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import AnimateButton from "@/components/extended/AnimatedButton";

const CheckMail = () => {
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
                  <Grid sx={{ mb: 3 }}>
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
                          Hi, Check Your Mail
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Typography
                          variant="caption"
                          fontSize="16px"
                          textAlign={{ xs: "center", md: "inherit" }}
                        >
                          We have sent a password recover instructions to your
                          email.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <AnimateButton>
                      <Button
                        disableElevation
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        color="secondary"
                      >
                        Open Mail
                      </Button>
                    </AnimateButton>
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

export default CheckMail;
