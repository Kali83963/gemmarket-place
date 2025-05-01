// components/table/GenericTable.tsx
import { useTableContext } from "@/contexts/TableContext";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { TableRowsProps } from "../users/table/UserRow";

interface GenericTableProps {
  data: any;
  open: boolean;
  setOpen: (open: boolean) => void;
  setRowValue: (data: any) => void;
  HeaderComponent: React.FC<any>;
  BodyComponent: React.FC<TableRowsProps>;
}

const GenericTable = ({
  open,
  setOpen,
  setRowValue,
  data,
  HeaderComponent,
  BodyComponent,
}: GenericTableProps) => {
  const {
    theme,
    order,
    orderBy,
    selected,
    page,
    rowsPerPage,
    setPage,
    setRowsPerPage,
  } = useTableContext();
  const [rows, setRows] = useState<any>([]);

  const Main = styled("main", {
    shouldForwardProp: (prop) => prop !== "open",
  })<{
    open?: boolean;
  }>(({ theme }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
      width: open ? "100%" : "42%",
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: "relative",
  }));

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDrawerOpen = (row: any) => {
    setRowValue(row);
    setOpen(true);
  };

  console.log("Open", open);

  useEffect(() => {
    setRows(data!);
  }, [data]);

  return (
    <Main>
      <TableContainer>
        <Table sx={{ minWidth: open ? 300 : 750 }} aria-labelledby="tableTitle">
          <HeaderComponent drawer={open} rows={rows} />
          <TableBody>
            <BodyComponent
              rows={data}
              open={open}
              handleDrawerOpen={handleDrawerOpen}
            />
            {emptyRows > 0 && (
              <TableRow sx={{ height: 53 * emptyRows }}>
                <TableCell colSpan={10} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Main>
  );
};

export default GenericTable;
