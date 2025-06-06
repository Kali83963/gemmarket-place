"use client";

import React from "react";
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
import PersonalInformation from "@/components/endoser/forms/PersonalInfomation";
import { z } from "zod";
import { Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import ProfessionalInformation from "@/components/endoser/forms/ProfessionalInformation";
import VerificationInformation from "@/components/endoser/forms/VerificationInformation";
import { createEndoser } from "@/http/api";
import { toast } from "react-toastify";

const schema = z.object({
  firstName: z
    .string()
    .max(255, "First Name must be at most 255 characters")
    .nonempty("First Name is required"),
  lastName: z
    .string()
    .max(255, "Last Name must be at most 255 characters")
    .nonempty("Last Name is required"),
  email: z
    .string()
    .email("Must be a valid email")
    .max(255, "Email must be at most 255 characters")
    .nonempty("Email is required"),
  password: z
    .string()
    .max(255, "Password must be at most 255 characters")
    .nonempty("Password is required"),
  isActive: z.boolean().default(true),

  phoneNumber: z.string(),

  certificationNumber: z.string(),
  certifyingAuthority: z.string(),
  certificationType: z.string(),
  certificationExpiryDate: z.date().nullable().optional(),

  yearsOfExperience: z.number().int().nonnegative().optional(),
  specializations: z.array(z.string()),
  professionalMemberships: z.array(z.string()),
  verificationMethods: z.array(z.string()),
  verificationEquipment: z.array(z.string()),

  endorserBio: z.string().optional(),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isActive: true,

  phoneNumber: "",

  certificationNumber: "",
  certifyingAuthority: "",
  certificationType: "",
  certificationExpiryDate: null,

  yearsOfExperience: null, // optional number
  specializations: [],
  professionalMemberships: [],
  verificationMethods: [],
  verificationEquipment: [],

  endorserBio: "",
};

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
  {
    label: "Professional Information",
    icon: <RecentActorsIcon />,
    caption: "Professional Settings",
  },
];

interface Props {
  isOpen?: boolean;
  handleDialogToggler?: () => void;
}

const AddEndoser = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChangeStep = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid size={{ xs: 12 }}>
        <Formik
          initialValues={initialValues}
          validationSchema={toFormikValidationSchema(schema)}
          onSubmit={async (
            values,
            { setErrors, setStatus, setSubmitting, resetForm }
          ) => {
            console.log(values);
            try {
              const {
                firstName,
                lastName,
                email,
                password,
                isActive,
                ...rest
              } = values;
              const payload = {
                user: {
                  firstName,
                  lastName,
                  email,
                  password,
                  isActive,
                },
                ...rest,
              };
              console.log(payload);
              const respones = await createEndoser(payload);
              toast.success(respones?.data.message);
              // setValue(0);
              // resetForm();
              setStatus({ success: true });
              setSubmitting(false);
            } catch (err: any) {
              console.error(err);
              toast.error(err?.message);
              setStatus({ success: false });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            isSubmitting,
            touched,
            values,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <MainCard title="Add New Endoser" content={false}>
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
                      <TabPanel value={value} index={1}>
                        <ProfessionalInformation
                          values={values}
                          touched={touched}
                          setFieldValue={setFieldValue}
                          errors={errors}
                          handleChange={handleChange}
                        />
                      </TabPanel>
                    </CardContent>
                  </Grid>
                </Grid>
                <Divider />
                <CardActions>
                  <Grid container justifyContent="space-between" spacing={1}>
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
                          {/* <AnimateButton>
                            <Button
                              variant="outlined"
                              size="large"
                              type="submit"
                            >
                              Save
                            </Button>
                          </AnimateButton> */}
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
                            disabled={isSubmitting}
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

export default AddEndoser;
