// material-ui
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";

import { gridSpacing } from "store/constant";

import { Image, Upload } from "antd";
// types
import { ThemeMode } from "types/config";
import Chip from "@/components/extended/Chip";
import SubCard from "../cards/SubCard";
import { Box, Slider } from "@mui/material";

const MediaTab = ({ data }: any) => {
  const theme = useTheme();

  const sxDivider = {
    borderColor:
      theme.palette.mode === ThemeMode.DARK ? "divider" : "primary.light",
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
              <Divider sx={sxDivider} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={gridSpacing}>
                <Grid size={{ xs: 12 }}>
                  {/* <Stack spacing={2}> */}
                  <Typography variant="h4">Gemstone Images</Typography>
                  <Box display="flex" flexWrap="wrap" gap={2}>
                    <Image.PreviewGroup>
                      {data?.images.map((image: any) => {
                        return <Image src={image?.url} width={200} />;
                      })}
                    </Image.PreviewGroup>
                  </Box>
                  {/* </Stack> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Divider sx={sxDivider} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={gridSpacing}>
                <Grid size={{ xs: 12 }}>
                  <Stack spacing={2}>
                    <Typography variant="h4">Certificate</Typography>
                    <Upload
                      fileList={[
                        {
                          uid: "1",
                          name: "certificate",
                          status: "done",
                          url: data?.certification_document,
                        },
                      ]}
                      showUploadList={{
                        showDownloadIcon: true,
                        showRemoveIcon: false, // Hide the cross button
                        showPreviewIcon: true, // Optional: show eye icon
                      }}
                      onPreview={(file) => window.open(file.url, "_blank")} // Open in new tab
                      listType="text" // or 'picture' or 'picture-card'
                      itemRender={(originNode, file) => originNode} // optional: just renders default list
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default MediaTab;
