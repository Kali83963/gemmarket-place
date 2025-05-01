"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { ArrangementOrder } from "@/types";
import { Theme, useTheme } from "@mui/material";

interface TableContextProps {
  theme: Theme;
  order: ArrangementOrder;
  orderBy: string;
  selected: string[];
  page: number;
  rowsPerPage: number;
  handleRequestSort: (
    event: React.SyntheticEvent<Element, Event>,
    property: string
  ) => void;
  handleSelectAllClick: (
    event: React.ChangeEvent<HTMLInputElement>,
    rows: any
  ) => void;
  handleClick: (name: string) => void;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isSelected: (name: string) => boolean;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  setOrder: React.Dispatch<React.SetStateAction<ArrangementOrder>>;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const TableContext = createContext<TableContextProps | undefined>(undefined);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context)
    throw new Error("useTableContext must be used within TableProvider");
  return context;
};

export const TableProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [order, setOrder] = useState<ArrangementOrder>("asc");
  const [orderBy, setOrderBy] = useState<string>("calories");
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const theme = useTheme();

  const handleRequestSort = useCallback(
    (event: React.SyntheticEvent<Element, Event>, property: string) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    },
    [order, orderBy]
  );

  const handleSelectAllClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    rows: any
  ) => {
    console.log("rows", rows);
    if (event.target.checked) {
      if (selected.length > 0) {
        setSelected([]);
      } else {
        const newSelectedId = rows.map((n: any) => n.id as string);
        setSelected(newSelectedId);
      }
      return;
    }
    setSelected([]);
  };

  const handleClick = useCallback((id: string) => {
    setSelected((prevSelected) => {
      const selectedIndex = prevSelected.indexOf(id);
      if (selectedIndex === -1) {
        return [...prevSelected, id];
      } else {
        return prevSelected.filter((item) => item !== id);
      }
    });
  }, []);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined
  ) => {
    event?.target.value && setRowsPerPage(parseInt(event?.target.value, 10));
    setPage(0);
  };

  const isSelected = useCallback(
    (id: string) => selected.indexOf(id) !== -1,
    [selected]
  );

  return (
    <TableContext.Provider
      value={{
        theme,
        order,
        orderBy,
        selected,
        page,
        rowsPerPage,
        handleRequestSort,
        handleSelectAllClick,
        handleClick,
        handleChangePage,
        handleChangeRowsPerPage,
        isSelected,
        setSelected,
        setOrder,
        setOrderBy,
        setPage,
        setRowsPerPage,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
