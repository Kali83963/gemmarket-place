"use client";

import React, { useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

// assets
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import ReceiptTwoToneIcon from "@mui/icons-material/ReceiptTwoTone";

// types
import { TabsProps } from "types";
import Link from "next/link";
import { ThemeMode } from "types/config";
import MainCard from "@/components/cards/MainCard";
import { fetchGemstone, fetchOrder } from "@/http/api";
import { toast } from "react-toastify";
import VerificationTab from "@/components/gemstone/VerificationTab";
import DetailsTab from "@/components/order/DetailsTab";

// tab content
function TabPanel({ children, value, index, ...other }: TabsProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// ==============================|| INVOICE DETAILS ||============================== //
export type PageProps = Promise<{ id: string }>;
const OrderDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  const [value, setValue] = useState<number>(0);
  const [data, setData] = useState();
  const handleChangeTabs = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const handleChangeStep = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const getOrder = async (id: string) => {
    try {
      const response = await fetchOrder(id);

      setData(response?.data.data);
    } catch (error) {
      toast.error("Error Fetching User");
    }
  };

  React.useEffect(() => {
    getOrder(id);
  }, []);

  return (
    <MainCard>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChangeTabs}
        variant="scrollable"
        aria-label="simple tabs example"
        sx={{
          "& a": {
            minHeight: "auto",
            minWidth: 10,
            px: 1,
            py: 1.5,
            mr: 2.25,
            color: "grey.900",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
          "& a.Mui-selected": { color: "primary.main" },
          "& a > svg": { marginBottom: "0px !important", marginRight: 1.25 },
          mb: 3,
        }}
      >
        <Tab
          icon={<DescriptionTwoToneIcon />}
          component={Link}
          href="#"
          label="Basic Details"
          {...a11yProps(0)}
        />
      </Tabs>

      {/* tab - details */}
      <TabPanel value={value} index={0}>
        <DetailsTab data={data} />
      </TabPanel>

      {/* tab - status */}
      {/* <TabPanel value={value} index={1}>
        <MediaTab data={data} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <VerificationTab data={data} />
      </TabPanel> */}
    </MainCard>
  );
};

export default OrderDetails;
