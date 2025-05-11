// material-ui
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

// project imports

import { gridSpacing } from "store/constant";

import SubCard from "../cards/SubCard";
import {
  Button,
  CardActions,
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { toast } from "react-toastify";
import React from "react";
import { z } from "zod";
import AnimateButton from "../extended/AnimatedButton";
import {
  generateGemstoneHash,
  updateGemstoneStatusAdmin,
  verifyGemstone,
} from "@/http/api";
import { Upload, UploadProps, Button as UploadButton } from "antd";
import { UploadIcon } from "lucide-react";
import { getContract } from "@/utils/contracts";

const schema = z.object({
  file: z.string().nonempty(),
});

const uploadProps: UploadProps = {
  name: "file",
  action: "http://localhost:5000/uploads",
  onPreview: (file) => window.open(file.url, "_blank"),
};

const EndorserVerificationTab = ({
  setValues,
  blockChainId,
  id,
}: {
  setValues: any;
  blockChainId: any;
  id: string;
}) => {
  const theme = useTheme();

  const sxDivider = {
    borderColor: "primary.light",
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid size={{ xs: 12 }}>
        <SubCard>
          <Grid container spacing={gridSpacing}>
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={3}></Grid>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Grid container spacing={gridSpacing}>
                <Formik
                  enableReinitialize={true}
                  initialValues={{
                    file: "",
                  }}
                  validationSchema={toFormikValidationSchema(schema)}
                  onSubmit={async (
                    values,
                    { setErrors, setStatus, setSubmitting, resetForm }
                  ) => {
                    try {
                      const payload = {
                        certification: values.file,
                      };
                      const response = await generateGemstoneHash(id, payload);
                      const verificationHash = response.data.data;
                      const contract = await getContract();

                      const statusText = (status: BigInt) => {
                        if (status === 1n) return "ACCEPTED";
                        if (status === 2n) return "REJECTED";
                        return "PENDING";
                      };
                      const tx = await contract.verifyGemstone(
                        blockChainId,
                        verificationHash
                      );

                      await tx.wait();

                      const gemstone = await contract.gemstones(blockChainId);

                      const status = statusText(gemstone.status);

                      console.log(status);

                      await verifyGemstone(id, { status: status });

                      setValues((prev: any) => ({
                        ...prev,
                        certificationStatus: status,
                      }));

                      setStatus({ success: true });
                      setSubmitting(false);
                      resetForm();
                      toast.success(response?.data?.message);
                    } catch (err: any) {
                      console.error(err);

                      setStatus({ success: false });
                      setErrors({ file: err.message });
                      setSubmitting(false);
                      toast.error("Error Verifying Gemstone !");
                    }
                  }}
                >
                  {({
                    errors,
                    handleBlur,
                    handleChange,
                    setFieldValue,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                  }) => (
                    <>
                      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                        <Grid size={{ xs: 12 }}>
                          <Stack spacing={2}>
                            <InputLabel id="role-select-label">
                              Certificate
                            </InputLabel>
                            <Upload
                              maxCount={1}
                              {...uploadProps}
                              onRemove={(info) => {
                                console.log(info);
                                setFieldValue("file", "");
                              }}
                              onChange={(info) => {
                                if (info.file.status !== "uploading") {
                                  console.log(info.file, info.fileList);
                                }
                                if (info.file.status === "done") {
                                  console.log(info);
                                  setFieldValue(
                                    "file",
                                    info.file.response.fileUrl
                                  );
                                  toast.success(
                                    `${info.file.name} file uploaded successfully`
                                  );
                                } else if (info.file.status === "error") {
                                  toast.error(
                                    `${info.file.name} file upload failed.`
                                  );
                                }
                              }}
                            >
                              <UploadButton icon={<UploadIcon />}>
                                Click to Upload
                              </UploadButton>
                            </Upload>
                          </Stack>
                        </Grid>

                        <CardActions>
                          <Grid
                            container
                            justifyContent="space-between"
                            spacing={0}
                          >
                            <Grid>
                              <AnimateButton>
                                <Button
                                  variant="contained"
                                  size="large"
                                  disabled={isSubmitting}
                                  fullWidth
                                  type="submit"
                                >
                                  Verify
                                </Button>
                              </AnimateButton>
                            </Grid>
                          </Grid>
                        </CardActions>
                      </form>
                    </>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default EndorserVerificationTab;
