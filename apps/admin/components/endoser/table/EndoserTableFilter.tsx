"use client";

import * as React from "react";
import Link from "next/link";

// material-ui
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

// assets
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterListTwoTone";
import PrintIcon from "@mui/icons-material/PrintTwoTone";
import FileCopyIcon from "@mui/icons-material/FileCopyTwoTone";
import AddIcon from "@mui/icons-material/AddTwoTone";

// types
import { KeyedObject } from "types";
import { UserProfile } from "types/user-profile";

interface Props {
  rows: any;
  setRows: (rows: any) => void;
}

// ==============================|| CLIENT LIST - FILTER ||============================== //

const EndoserTableFilter = ({ rows, setRows }: Props) => {
  const [search, setSearch] = React.useState<string>("");
  const [originalRows, setOriginalRows] = React.useState<any[]>([]);

  // Initialize originalRows only once when component mounts
  React.useEffect(() => {
    if (rows.length > 0 && originalRows.length === 0) {
      setOriginalRows([...rows]);
    }
  }, [rows]);

  const debouncedSearch = React.useCallback(
    (searchTerm: string) => {
      if (searchTerm && searchTerm.trim() !== "") {
        const newRows = originalRows?.filter((row: KeyedObject) => {
          let matches = true;
          const properties = [
            "user.firstName",
            "user.lastName",
            "user.email",
            "user.phoneNumber",
            "id",

            "phoneNumber",
          ];
          let containsQuery = false;

          properties.forEach((property) => {
            const value = property.includes(".")
              ? property.split(".").reduce((obj, key) => obj?.[key], row)
              : row[property];

            if (
              value &&
              value
                .toString()
                .toLowerCase()
                .includes(searchTerm.toString().toLowerCase())
            ) {
              containsQuery = true;
            }
          });

          if (!containsQuery) {
            matches = false;
          }
          return matches;
        });
        setRows([...newRows]);
      } else {
        setRows([...originalRows]);
      }
    },
    [originalRows, setRows]
  );

  // Create debounced function
  const debouncedSearchRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleSearch = React.useCallback(
    (
      event:
        | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        | undefined
    ) => {
      const newString = event?.target.value;
      setSearch(newString || "");

      // Clear previous timeout
      if (debouncedSearchRef.current) {
        clearTimeout(debouncedSearchRef.current);
      }

      // Set new timeout
      debouncedSearchRef.current = setTimeout(() => {
        debouncedSearch(newString || "");
      }, 300); // 300ms delay
    },
    [debouncedSearch]
  );

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (debouncedSearchRef.current) {
        clearTimeout(debouncedSearchRef.current);
      }
    };
  }, []);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    >
      <TextField
        inputMode="search"
        onChange={handleSearch}
        placeholder="Search Endoser"
        value={search}
        size="medium"
        sx={{ width: "400px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default EndoserTableFilter;
