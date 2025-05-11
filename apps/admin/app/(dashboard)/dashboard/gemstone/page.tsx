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
import EndoserTableHeader from "@/components/endoser/table/EndoserTableHeader";
import EndoserTableFilter from "@/components/endoser/table/EndoserTableFilter";
import EndoserTableRows from "@/components/endoser/table/EndoserTableRows";
import EndoserDetails from "@/components/endoser/EndoserDetails";
import GemstoneTableHeader from "@/components/gemstone/table/GemstoneTableHeader";
import GemstoneTableRows from "@/components/gemstone/table/GemstoneTableRows";
import { useRouter } from "next/router";
import { deleteGemstone, fetchGemstones } from "@/http/api";
import { toast } from "react-toastify";
import GemstoneTableFilter from "@/components/gemstone/table/GemstoneTableFilter";

const GemstonePage = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [rows, setRows] = React.useState<any[]>([]);

  //   const { detailCards } = useSelector((state) => state.user);
  const [rowValue, setRowValue] = React.useState(null);

  const getGemstone = async () => {
    try {
      const response = await fetchGemstones();
      setRows(response?.data?.data);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleDeleteEndoser = async (id: string) => {
    try {
      const response = await deleteGemstone(id);
      toast.error(response?.data.message);
      await getGemstone();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  React.useEffect(() => {
    getGemstone();
  }, []);

  return (
    <MainCard content={false}>
      {/* filter section */}
      <CardContent>
        <GemstoneTableFilter {...{ rows, setRows }} />
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
                HeaderComponent={GemstoneTableHeader}
                BodyComponent={GemstoneTableRows}
              />
            </TableProvider>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
};

export default GemstonePage;
