// assets
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { GetComparator, KeyedObject } from "@/types";
import { UserProfile } from "@/types/user-profile";
import { alpha, useTheme, styled } from "@mui/material/styles";
import { useTableContext } from "@/contexts/TableContext";
import {
  Checkbox,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import Avatar from "@/components/extended/Avatar";
import Chip from "@/components/extended/Chip";
import Link from "next/link";
const avatarImage = "/assets/images/users";
function descendingComparator(a: KeyedObject, b: KeyedObject, orderBy: string) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
const getComparator: GetComparator = (order, orderBy) =>
  order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);

function stableSort(array: any[], comparator: (a: any, b: any) => number) {
  if (!array || array.length === 0) return [];
  const stabilizedThis = array?.map((el: any, index: number) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return (a[1] as number) - (b[1] as number);
  });
  return stabilizedThis?.map((el) => el[0]);
}

export interface TableRowsProps {
  rows: any;
  open: boolean;
  handleDrawerOpen: (data: any) => void;
  handleDelete?: (id: string) => void;
}

const GemstoneTableRows = ({
  rows,
  open = false,
  handleDelete,
  handleDrawerOpen,
}: TableRowsProps) => {
  const { theme, order, orderBy, isSelected, page, rowsPerPage, handleClick } =
    useTableContext();
  let label;
  let color;
  let chipcolor;
  return (
    <>
      {stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index: number) => {
          /** Make sure no display bugs if row isn't an OrderData object */
          if (typeof row === "number") return null;

          const avatarProfile = `${avatarImage}/avatar-${Math.floor(Math.random() * 9) + 1}.png`;
          const isItemSelected = isSelected(row.id!);
          const labelId = `enhanced-table-checkbox-${index}`;

          switch (row.role) {
            case "SELLER":
              label = "Seller";
              color = "orange.dark";
              // @ts-expect-error Property 'orange'
              chipcolor = alpha(theme.palette.orange.light, 0.8);
              break;
            case "BUYER":
              label = "Buyer";
              color = "warning.dark";
              chipcolor = "warning.light";
              break;
            default:
              label = "New";
              color = "primary.dark";
              chipcolor = theme.palette.primary.light;
              break;
          }

          return (
            <TableRow
              hover
              key={index}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              selected={isItemSelected}
              {...(open && {
                sx: {
                  "&:first-of-type": {
                    borderTop: "1px solid",
                    borderTopColor: "divider",
                  },
                },
              })}
            >
              <TableCell
                padding="checkbox"
                sx={{ pl: 3 }}
                onClick={() => handleClick(row.id!)}
              >
                <Checkbox color="primary" checked={isItemSelected} />
              </TableCell>
              <TableCell>
                <Typography variant="h5">{row.id}</Typography>
              </TableCell>
              <TableCell
                component="th"
                id={labelId}
                scope="row"
                sx={open ? { alignItems: "center", cursor: "pointer" } : {}}
              >
                <Stack direction="row" spacing={1.25}>
                  <Avatar alt="" src={row.images[0]?.url && avatarProfile} />
                  <Stack>
                    <Typography variant="h5">
                      {row.user.firstName} {row.user.lastName}
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.shape}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell>{row.color_grade}</TableCell>
              <TableCell>{row.clarity_grade}</TableCell>
              <TableCell>{row.cut_grade}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.status}</TableCell>

              {/* <TableCell
                sx={open ? { cursor: "pointer" } : {}}
                onClick={() => (open ? handleDrawerOpen(row) : "")}
              >
                <Chip
                  label={row.role}
                  size="small"
                  sx={{
                    bgcolor: chipcolor,
                    color: color,
                    cursor: "pointer",
                  }}
                />
              </TableCell> */}

              <TableCell align="center" sx={{ pr: 3 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  justifyContent="center"
                >
                  <Tooltip title="View">
                    <Link
                      href={`/dashboard/gemstone/details/${encodeURIComponent(row.id)}`}
                    >
                      <IconButton
                        color="primary"
                        size="small"
                        aria-label="View"
                      >
                        <VisibilityTwoToneIcon sx={{ fontSize: "1.3rem" }} />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Stack>
              </TableCell>
            </TableRow>
          );
        })}
    </>
  );
};

export default GemstoneTableRows;
