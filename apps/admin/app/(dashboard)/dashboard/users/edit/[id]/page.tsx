"use client";

import React, { useEffect } from "react";
import Link from "next/link";

// material-ui
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

// project imports
// import ContactDetail from "./ContactDetail";
// import Address from "./Address";
// import OtherDetail from "./OtherDetail";
import { gridSpacing } from "store/constant";
import { z } from "zod";
// assets
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import PersonAddTwoTone from "@mui/icons-material/PersonAddTwoTone";
import PinDropTwoTone from "@mui/icons-material/PinDropTwoTone";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

// types
import { TabsProps } from "types";
import { ThemeMode } from "types/config";
import AnimateButton from "@/components/extended/AnimatedButton";
import MainCard from "@/components/cards/MainCard";
import { borderRadius } from "@/theme";
import PersonalInformation from "@/components/users/forms/PersonalInfomation";
import { Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { editUser, fetchUser } from "@/http/api";
import { toast } from "react-toastify";

// tabs
function TabPanel({ children, value, index, ...other }: TabsProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// tabs option
const tabsOption = [
  {
    label: "Personal information",
    icon: <PersonAddTwoTone />,
    caption: "Profile Settings",
  },
  //   {
  //     label: "Contact detail",
  //     icon: <RecentActorsIcon />,
  //     caption: "Contact Information",
  //   },
  //   {
  //     label: "Address detail",
  //     icon: <PinDropTwoTone />,
  //     caption: "Address detail",
  //   },
  //   {
  //     label: "Other Detail",
  //     icon: <WorkTwoToneIcon />,
  //     caption: "Update Profile Security",
  //   },
];

const schema = z.object({
  firstName: z
    .string()
    .max(255, "First Name must be at most 255 characters")
    .nonempty("First Name is required"),
  lastName: z
    .string()
    .max(255, "Last Name must be at most 255 characters")
    .nonempty("Last Name is required"),
  role: z.enum(["BUYER", "SELLER"]),
  email: z
    .string()
    .email("Must be a valid email")
    .max(255, "Email must be at most 255 characters")
    .nonempty("Email is required"),
  password: z
    .string()
    .max(255, "Password must be at most 255 characters")
    .optional(),
});

const initialValues = {
  firstName: "", // Empty string to meet the "nonempty" rule
  lastName: "", // Empty string to meet the "nonempty" rule
  role: "BUYER", // Default to one of the valid enum values ("BUYER" or "SELLER")
  email: "", // Empty string to meet the "nonempty" rule
  password: "", // Empty string to meet the "nonempty" rule
};

export type PageProps = Promise<{ id: string }>;

const EditUser = ({ params }: { params: Promise<{ id: string }> }) => {
  const [value, setValue] = React.useState<number>(0);
  const { id } = React.use(params);
  const [formValues, setFormValues] = React.useState(initialValues);

  const handleChangeStep = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getUser = async (id: string) => {
    try {
      const response = await fetchUser(id);
      setFormValues(response?.data?.data);
    } catch (error) {
      toast.error("Error Fetching User");
    }
  };

  useEffect(() => {
    getUser(id);
  }, []);

  console.log(formValues);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid size={{ xs: 12 }}>
        <Formik
          enableReinitialize={true}
          initialValues={formValues}
          validationSchema={toFormikValidationSchema(schema)}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              const response = await editUser(id, values);
              toast.success(response?.data.message);
              setStatus({ success: true });

              setSubmitting(false);
            } catch (err: any) {
              console.error(err);
              toast.error(err.message);
              setStatus({ success: false });
              setErrors({ firstName: err.message });
              setSubmitting(false);
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
            <form noValidate onSubmit={handleSubmit}>
              <MainCard title="Add New User" content={false}>
                <Grid container spacing={gridSpacing}>
                  <Grid size={{ xs: 12, lg: 3 }}>
                    <CardContent sx={{ pr: 0 }}>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        orientation="vertical"
                        variant="scrollable"
                        sx={{
                          "& .MuiTabs-flexContainer": {
                            borderBottom: "none",
                          },
                          "& button": {
                            color: "grey.900",
                            minHeight: "auto",
                            minWidth: "100%",
                            py: 1.5,
                            px: 2,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            textAlign: "left",
                            justifyContent: "flex-start",
                            borderRadius: `${borderRadius}px`,
                          },
                          "& button.Mui-selected": {
                            color: "primary.main",
                            bgcolor: "grey.50",
                          },
                          "& button > svg": {
                            marginBottom: "0px !important",
                            marginRight: 1.25,
                            marginTop: 1.25,
                            height: 20,
                            width: 20,
                          },
                          "& button > div > span": {
                            display: "block",
                          },
                          "& > div > span": {
                            display: "none",
                          },
                        }}
                      >
                        {tabsOption.map((tab, index) => (
                          <Tab
                            key={index}
                            icon={tab.icon}
                            label={
                              <Grid container direction="column">
                                <Typography variant="subtitle1" color="inherit">
                                  {tab.label}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{ textTransform: "capitalize" }}
                                >
                                  {tab.caption}
                                </Typography>
                              </Grid>
                            }
                            {...a11yProps(index)}
                          />
                        ))}
                      </Tabs>
                    </CardContent>
                  </Grid>
                  <Grid size={{ xs: 12, lg: 9 }}>
                    <CardContent
                      sx={{
                        borderLeft: "1px solid",
                        borderColor: "grey.200",
                        height: "100%",
                      }}
                    >
                      <TabPanel value={value} index={0}>
                        <PersonalInformation
                          values={values}
                          touched={touched}
                          errors={errors}
                          handleChange={handleChange}
                        />
                      </TabPanel>
                    </CardContent>
                  </Grid>
                </Grid>
                <Divider />
                <CardActions>
                  <Grid container justifyContent="space-between" spacing={0}>
                    <Grid>
                      {value > 0 && (
                        <AnimateButton>
                          <Button
                            variant="outlined"
                            size="large"
                            onClick={(e) => handleChangeStep(e, value - 1)}
                          >
                            Back
                          </Button>
                        </AnimateButton>
                      )}
                    </Grid>
                    <Grid>
                      {value < tabsOption.length - 1 && (
                        <Stack spacing={1.5} direction="row">
                          <AnimateButton>
                            <Button
                              variant="outlined"
                              size="large"
                              type="submit"
                            >
                              Save
                            </Button>
                          </AnimateButton>
                          <AnimateButton>
                            <Button
                              variant="contained"
                              size="large"
                              onClick={(e) => handleChangeStep(e, 1 + value)}
                            >
                              Continue
                            </Button>
                          </AnimateButton>
                        </Stack>
                      )}
                      {value === tabsOption.length - 1 && (
                        <AnimateButton>
                          <Button
                            variant="contained"
                            size="large"
                            // disabled={isSubmitting}
                            fullWidth
                            type="submit"
                          >
                            Save
                          </Button>
                        </AnimateButton>
                      )}
                    </Grid>
                  </Grid>
                </CardActions>
              </MainCard>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default EditUser;
