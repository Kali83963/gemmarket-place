import { Grid, Stack, Typography } from "@mui/material";
import { Diamond } from "lucide-react";
const Logo = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Diamond
        className="h-12 w-12 text-blue-600"
        style={{
          width: 50,
          height: 30,
        }}
      />
      <Stack alignItems="center" justifyContent="center" spacing={1}>
        <Typography variant={"h2"}>GemMarket</Typography>
      </Stack>
    </Grid>
  );
};

export default Logo;
