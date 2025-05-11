"use client";

import React, { useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

// assets
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

// types
import { TabsProps } from "types";
import Link from "next/link";
import { ThemeMode } from "types/config";
import MainCard from "@/components/cards/MainCard";
import DetailsTab from "@/components/gemstone/DetailsTab";
import SpecificationTab from "@/components/gemstone/SpecificationTab";
import MediaTab from "@/components/gemstone/MediaTab";
import { fetchGemstone } from "@/http/api";
import { toast } from "react-toastify";
import VerificationTab from "@/components/gemstone/VerificationTab";
import useAuth from "@/hooks/useAuth";
import EndorserVerificationTab from "@/components/gemstone/EndorserVerificationTab";

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
const GemstoneDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  const [value, setValue] = useState<number>(0);
  const { user } = useAuth();
  const [data, setData] = useState({
    status: null,
    isActive: null,
    blockchainGemstoneId: null,
    certificationStatus: "",
  });
  const handleChangeTabs = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const handleChangeStep = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const getGemstone = async (id: string) => {
    try {
      const response = await fetchGemstone(id);

      setData(response?.data.data);
    } catch (error) {
      toast.error("Error Fetching User");
    }
  };

  React.useEffect(() => {
    getGemstone(id);
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
          icon={<InfoOutlinedIcon />}
          component={Link}
          href="#"
          label="Basic Details"
          {...a11yProps(0)}
        />

        <Tab
          icon={<ImageOutlinedIcon />}
          component={Link}
          href="#"
          label="Images & Media"
          {...a11yProps(1)}
        />
        {user?.role === "ADMIN" ? (
          <Tab
            icon={<SettingsOutlinedIcon />}
            component={Link}
            href="#"
            label="Settings"
            {...a11yProps(2)}
          />
        ) : user?.role === "ENDORSER" &&
          data?.certificationStatus === "PENDING" ? (
          <Tab
            icon={<VerifiedUserOutlinedIcon />}
            component={Link}
            href="#"
            label="Verification"
            {...a11yProps(2)}
          />
        ) : null}
      </Tabs>

      {/* tab - details */}
      <TabPanel value={value} index={0}>
        <DetailsTab data={data} />
      </TabPanel>

      {/* tab - status */}
      <TabPanel value={value} index={1}>
        <MediaTab data={data} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {user?.role === "ADMIN" ? (
          <VerificationTab
            onSumbitForm={setData}
            data={{ status: data?.status, isActive: data?.isActive }}
            id={id}
          />
        ) : user?.role === "ENDORSER" &&
          data?.certificationStatus === "PENDING" ? (
          <EndorserVerificationTab
            setValues={setData}
            blockChainId={data?.blockchainGemstoneId}
            id={id}
          />
        ) : null}
      </TabPanel>
    </MainCard>
  );
};

export default GemstoneDetails;
