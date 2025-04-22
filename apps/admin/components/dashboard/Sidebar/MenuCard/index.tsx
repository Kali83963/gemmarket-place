import { memo } from "react";

import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";

import Typography from "@mui/material/Typography";

import { linearProgressClasses } from "@mui/material/LinearProgress";

interface LinearProgressWithLabelProps {
  value: number;
}

function LinearProgressWithLabel({
  value,
  ...others
}: LinearProgressWithLabelProps) {
  const theme = useTheme();

  return (
    <Grid container direction="column" spacing={1} sx={{ mt: 1.5 }}>
      <Grid>
        <Grid container justifyContent="space-between">
          <Grid>
            <Typography
              variant="h6"
              sx={{
                color: "primary.800",
              }}
            >
              Progress
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h6"
              color="inherit"
            >{`${Math.round(value)}%`}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <LinearProgress
          aria-label="progress of theme"
          variant="determinate"
          value={value}
          {...others}
          sx={{
            height: 10,
            borderRadius: 30,
            [`&.${linearProgressClasses.colorPrimary}`]: {
              bgcolor: "background.paper",
            },
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 5,
              bgcolor: "primary.dark",
            },
          }}
        />
      </Grid>
    </Grid>
  );
}

const MenuCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        bgcolor: "primary.light",
        mb: 2.75,
        overflow: "hidden",
        position: "relative",
        "&:after": {
          content: '""',
          position: "absolute",
          width: 157,
          height: 157,
          bgcolor: "primary.200",
          borderRadius: "50%",
          top: -105,
          right: -96,
        },
      }}
    ></Card>
  );
};

export default memo(MenuCard);
