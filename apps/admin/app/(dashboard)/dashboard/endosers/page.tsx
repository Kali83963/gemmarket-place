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
import { TableProvider } from "@/contexts/TableContext";
import GenericTable from "@/components/table/GenericTable";
import EndoserTableHeader from "@/components/endoser/table/EndoserTableHeader";
import EndoserTableFilter from "@/components/endoser/table/EndoserTableFilter";
import EndoserTableRows from "@/components/endoser/table/EndoserTableRows";
import EndoserDetails from "@/components/endoser/EndoserDetails";
import { deleteEndoser, fetchEndosers } from "@/http/api";
import { toast } from "react-toastify";

const EndoserPage = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [rows, setRows] = React.useState<any[]>([]);

  //   const { detailCards } = useSelector((state) => state.user);
  const [rowValue, setRowValue] = React.useState(null);

  const getEndosers = async () => {
    try {
      const response = await fetchEndosers();
      setRows(response?.data?.data);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleDeleteEndoser = async (id: string) => {
    try {
      const response = await deleteEndoser(id);
      toast.error(response?.data.message);
      await getEndosers();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  React.useEffect(() => {
    getEndosers();
  }, []);

  //   React.useEffect(() => {
  //     setUsers(detailCards);
  //   }, [detailCards]);

  return (
    <MainCard content={false}>
      {/* filter section */}
      <CardContent>
        <EndoserTableFilter {...{ rows, setRows }} />
      </CardContent>

      {/* table */}
      <Box display={open ? "flex" : "block"}>
        <Grid container sx={{ position: "relative" }}>
          <Grid size={{ sm: open ? 5 : 12, xs: 12 }}>
            <TableProvider>
              <GenericTable
                open={open}
                setOpen={setOpen}
                data={rows}
                handleDelete={handleDeleteEndoser}
                setRowValue={setRowValue}
                HeaderComponent={EndoserTableHeader}
                BodyComponent={EndoserTableRows}
              />
            </TableProvider>
          </Grid>
          <Grid
            size={{ sm: open ? 7 : 12, xs: 12 }}
            sx={{ borderLeft: "1px solid", borderLeftColor: "divider" }}
          >
            <CustomDrawer open={open} setOpen={setOpen} rowValue={rowValue!}>
              <EndoserDetails rowValue={rowValue!} />
            </CustomDrawer>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
};

export default EndoserPage;
