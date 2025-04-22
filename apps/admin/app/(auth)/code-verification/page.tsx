"use client";

import Link from "next/link";

import { Theme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import AuthFooter from "@/components/footer/AuthFooter";
import Logo from "@/components/Logo";
import AuthCardWrapper from "@/components/wrapper/AuthCardWrapper";
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import AnimateButton from "@/components/extended/AnimatedButton";
import AuthCodeVerification from "@/components/forms/auth/AuthCodeVerification";

const CodeVerification = () => {
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
                      aria-label="theme-logo"
                      style={{ textDecoration: "none" }}
                    >
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Grid
                      container
                      direction={downMD ? "column-reverse" : "row"}
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
                            Enter Verification Code
                          </Typography>
                          <Typography variant="subtitle1" fontSize="1rem">
                            We send you on mail.
                          </Typography>
                          <Typography
                            variant="caption"
                            fontSize="0.875rem"
                            textAlign={downMD ? "center" : "inherit"}
                          >
                            We’ve send you code on jone.****@company.com
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <AuthCodeVerification />
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
                        href="#"
                        variant="subtitle1"
                        sx={{ textDecoration: "none" }}
                        textAlign={downMD ? "center" : "inherit"}
                      >
                        Did not receive the email? Check your spam filter, or
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <AnimateButton>
                      <Button
                        disableElevation
                        fullWidth
                        size="large"
                        type="submit"
                        variant="outlined"
                        color="secondary"
                      >
                        Resend Code
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

export default CodeVerification;
