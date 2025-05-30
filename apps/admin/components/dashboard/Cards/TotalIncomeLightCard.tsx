import { ReactNode } from "react";

// material-ui
import { alpha, useTheme, styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import TotalIncomeCard from "@/components/extended/Cards/Skeleton/TotalIncomeChart";

// types
import { ThemeMode } from "types/config";
import MainCard from "@/components/cards/MainCard";

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: "50%",
    top: -30,
    right: -180,
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: "50%",
    top: -160,
    right: -130,
  },
}));

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

interface TotalIncomeLightCardProps {
  isLoading: boolean;
  icon: ReactNode;
  label: string;
  total: number;
}

const TotalIncomeLightCard = ({
  isLoading,
  total,
  icon,
  label,
}: TotalIncomeLightCardProps) => {
  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2 }}>
            <List sx={{ py: 0 }}>
              <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    sx={{
                      // @ts-ignore
                      ...theme.typography.commonAvatar,
                      // @ts-ignore
                      ...theme.typography.largeAvatar,
                      bgcolor:
                        theme.palette.mode === ThemeMode.DARK
                          ? "dark.main"
                          : label === "Meeting attends"
                            ? alpha(theme.palette.error.light, 0.25)
                            : "warning.light",
                      color:
                        label === "Meeting attends"
                          ? "error.dark"
                          : "warning.dark",
                    }}
                  >
                    {icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{ py: 0, mt: 0.45, mb: 0.45 }}
                  primary={<Typography variant="h4">{total}</Typography>}
                  secondary={
                    <Typography
                      variant="subtitle2"
                      sx={{ color: theme.palette.grey[500], mt: 0.5 }}
                    >
                      {label}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

export default TotalIncomeLightCard;
