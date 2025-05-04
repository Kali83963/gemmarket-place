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

function stableSort(
  array: UserProfile[],
  comparator: (a: UserProfile, b: UserProfile) => number
) {
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

const UserRows = ({
  rows,
  open = false,
  handleDrawerOpen,
  handleDelete,
}: TableRowsProps) => {
  const { theme, order, orderBy, isSelected, page, rowsPerPage, handleClick } =
    useTableContext();
  console.log("Open2", open);
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
                sx={open ? { pl: 3, display: "none" } : { pl: 3 }}
                onClick={() => handleClick(row.id!)}
              >
                <Checkbox color="primary" checked={isItemSelected} />
              </TableCell>
              <TableCell sx={open ? { display: "none" } : {}}>
                <Typography variant="h5">{row.id}</Typography>
              </TableCell>
              <TableCell
                component="th"
                id={labelId}
                onClick={() => (open ? handleDrawerOpen(row) : "")}
                scope="row"
                sx={open ? { alignItems: "center", cursor: "pointer" } : {}}
              >
                <Stack direction="row" spacing={1.25}>
                  <Avatar alt="" src={row.avatar && avatarProfile} />
                  <Stack>
                    <Typography variant="h5">
                      {row.firstName} {row.lastName}
                    </Typography>
                    <Typography variant="caption">{row.role}</Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell sx={open ? { display: "none" } : {}}>
                {row.email}
              </TableCell>

              <TableCell
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
              </TableCell>
              <TableCell sx={open ? { display: "none" } : {}}>
                {row.isActive ? "Active" : "Inactive"}
              </TableCell>

              <TableCell
                align="center"
                sx={{ pr: 3, ...(open && { display: "none" }) }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  justifyContent="center"
                >
                  <Tooltip title="View">
                    <IconButton
                      color="primary"
                      size="small"
                      aria-label="View"
                      onClick={() => handleDrawerOpen(row)}
                    >
                      <VisibilityTwoToneIcon sx={{ fontSize: "1.3rem" }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <Link href={`/dashboard/users/edit/${row.id}`}>
                      <IconButton
                        color="secondary"
                        size="small"
                        aria-label="Edit"
                      >
                        <EditTwoToneIcon sx={{ fontSize: "1.3rem" }} />
                      </IconButton>
                    </Link>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      color="error"
                      size="small"
                      aria-label="Delete"
                      onClick={() => handleDelete && handleDelete(row?.id)}
                    >
                      <DeleteTwoToneIcon sx={{ fontSize: "1.3rem" }} />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </TableCell>
            </TableRow>
          );
        })}
    </>
  );
};

export default UserRows;
