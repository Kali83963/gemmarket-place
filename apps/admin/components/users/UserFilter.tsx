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
  users: any[];
  setUsers: (users: any[]) => void;
}

// ==============================|| CLIENT LIST - FILTER ||============================== //

const UserFilter = ({ users, setUsers }: Props) => {
  const [search, setSearch] = React.useState<string>("");
  const [originalUsers, setOriginalUsers] = React.useState<any[]>([]);

  // Initialize originalUsers only once when component mounts
  React.useEffect(() => {
    if (users.length > 0 && originalUsers.length === 0) {
      setOriginalUsers([...users]);
    }
  }, [users]);

  const debouncedSearch = React.useCallback(
    (searchTerm: string) => {
      if (searchTerm && searchTerm.trim() !== "") {
        const newRows = originalUsers?.filter((row: KeyedObject) => {
          let matches = true;
          const properties = [
            "id",
            "firstName",
            "lastName",
            "email",
            "role",
          ];
          let containsQuery = false;

          properties.forEach((property) => {
            if (
              row[property] &&
              row[property]
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
        setUsers([...newRows]);
      } else {
        setUsers([...originalUsers]);
      }
    },
    [originalUsers, setUsers]
  );

  // Create debounced function
  const debouncedSearchRef = React.useRef<ReturnType<typeof setTimeout>>();

  const handleSearch = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
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
        placeholder="Search User"
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
      <Stack direction="row" alignItems="center" spacing={1.25}>
       
        {/* client add & dialog */}
        <Tooltip title="Add User">
          <Link href="/dashboard/users/add">
            <Fab
              color="primary"
              size="small"
              sx={{ boxShadow: "none", width: 32, height: 32, minHeight: 32 }}
            >
              <AddIcon fontSize="small" />
            </Fab>
          </Link>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default UserFilter;
