import * as React from "react";

// material-ui
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { visuallyHidden } from "@mui/utils";

// types
import { HeadCell, EnhancedTableToolbarProps, ArrangementOrder } from "types";

// assets
import DeleteIcon from "@mui/icons-material/Delete";
import { useTableContext } from "@/contexts/TableContext";

// table header options
const headCells: HeadCell[] = [
  {
    id: "id",
    numeric: true,
    label: "Order ID",
    align: "center",
  },
  {
    id: "name",
    numeric: false,
    label: "Customer Name",
    align: "center",
  },
  {
    id: "email",
    numeric: false,
    label: "Email",
  },
  {
    id: "phoneNumber",
    numeric: false,
    label: "Phone Number",
  },
  {
    id: "totalAmount",
    numeric: false,
    label: "Total Amount",
  },
  {
    id: "shippingCost",
    numeric: false,
    label: "Shipping Cost",
  },
  {
    id: "tax",
    numeric: true,
    label: "Tax",
  },
  {
    id: "paymentMethod",
    numeric: false,
    label: "Payment Method",
  },
  {
    id: "status",
    numeric: false,
    label: "Status",
  },
  {
    id: "createdAt",
    numeric: false,
    label: "Date (Ordered)",
  },
  {
    id: "items",
    numeric: false,
    label: "# Items	",
  },
];

interface OrderTableHeaderProps {
  drawer: boolean;
  rows: any;
  selected: string[];
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: ArrangementOrder;
  orderBy: string;
  numSelected: number;
  rowCount: number;
  onRequestSort: (
    event: React.SyntheticEvent<Element, Event>,
    property: string
  ) => void;
}

// ==============================|| CLIENT LIST - HEADER TOOLBAR ||============================== //

const EnhancedTableToolbar = ({ numSelected }: EnhancedTableToolbarProps) => (
  <Toolbar
    sx={{
      p: 0,
      pl: 1,
      pr: 1,
      ...(numSelected > 0 && { color: "secondary.main" }),
    }}
  >
    {numSelected > 0 ? (
      <Typography color="inherit" variant="h4">
        {numSelected} Selected
      </Typography>
    ) : (
      <Typography variant="h6" id="tableTitle">
        Nutrition
      </Typography>
    )}
    <Box sx={{ flexGrow: 1 }} />
    {numSelected > 0 && (
      <Tooltip title="Delete">
        <IconButton size="large">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    )}
  </Toolbar>
);

// ==============================|| CLIENT LIST - HEADER ||============================== //

const OrderTableHeader = ({
  drawer,
  rowCount,
  rows,
}: OrderTableHeaderProps) => {
  const { selected, order, orderBy, handleSelectAllClick, handleRequestSort } =
    useTableContext();

  const numSelected = selected?.length || 0;

  const createSortHandler =
    (property: string) => (event: React.SyntheticEvent<Element, Event>) => {
      handleRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell
          padding="checkbox"
          sx={drawer ? { pl: 3, display: "none" } : { pl: 3 }}
        >
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={(event) => handleSelectAllClick(event, rows)}
          />
        </TableCell>
        {numSelected > 0 && (
          <TableCell padding="none" colSpan={12}>
            <EnhancedTableToolbar numSelected={selected.length} />
          </TableCell>
        )}
        {numSelected <= 0 &&
          headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.align}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : undefined}
              sx={drawer ? { display: "none" } : {}}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : undefined}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        {numSelected <= 0 && (
          <TableCell
            sortDirection={false}
            align="center"
            sx={drawer ? { pr: 3, display: "none" } : { pr: 3 }}
          >
            Action
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  );
};

export default OrderTableHeader;
