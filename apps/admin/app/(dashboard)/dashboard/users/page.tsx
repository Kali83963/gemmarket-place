"use client";

import * as React from "react";

// material-ui
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

// project-imports

import { dispatch, useSelector } from "store";

// types
import { UserProfile } from "types/user-profile";
import MainCard from "@/components/cards/MainCard";
import CustomTable from "@/components/table/Table";
import CustomDrawer from "@/components/drawer/Drawer";
import UserDetails from "@/components/users/UserDetails";
import UserFilter from "@/components/users/UserFilter";
import { TableProvider } from "@/contexts/TableContext";
import GenericTable from "@/components/table/GenericTable";
import UserTableHeader from "@/components/users/table/UserTableHeaders";
import UserRows from "@/components/users/table/UserRow";
import { fetchUsers } from "@/http/api";
import { toast } from "react-toastify";

const UsersPage = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [users, setUsers] = React.useState<any[]>([]);

  //   const { detailCards } = useSelector((state) => state.user);
  const [rowValue, setRowValue] = React.useState<any | null>(null);

  const getUsers = async () => {
    try {
      const response = await fetchUsers();
      setUsers(response?.data?.data);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <MainCard content={false}>
      {/* filter section */}
      <CardContent>
        <UserFilter {...{ users: users, setUsers }} />
      </CardContent>

      {/* table */}
      <Box display={open ? "flex" : "block"}>
        <Grid container sx={{ position: "relative" }}>
          <Grid size={{ sm: open ? 5 : 12, xs: 12 }}>
            <TableProvider>
              <GenericTable
                open={open}
                setOpen={setOpen}
                data={users}
                setRowValue={setRowValue}
                HeaderComponent={UserTableHeader}
                BodyComponent={UserRows}
              />
            </TableProvider>
          </Grid>
          <Grid
            size={{ sm: open ? 7 : 12, xs: 12 }}
            sx={{ borderLeft: "1px solid", borderLeftColor: "divider" }}
          >
            <CustomDrawer open={open} setOpen={setOpen} rowValue={rowValue!}>
              <UserDetails rowValue={rowValue!} />
            </CustomDrawer>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
};

export default UsersPage;
