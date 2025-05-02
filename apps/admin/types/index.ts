import { ChipProps, SvgIconTypeMap } from "@mui/material";

import { UserProfile } from "./user-profile";
import { FunctionComponent, ReactNode } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface InitialLoginContextProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: any | null | undefined;
}

export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};

export type HandleFunction = (i: string, s: string) => Promise<void>;

export interface ColorProps {
  readonly [key: string]: string;
}
export interface StringColorProps {
  id?: string;
  label?: string;
  color?: string;
  primary?: string;
  secondary?: string;
}
export type StringBoolFunc = (s: string) => boolean;
export type StringNumFunc = (s: string) => number;
export type NumbColorFunc = (n: number) => StringColorProps | undefined;
export type ChangeEventFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;

export type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

export type OverrideIcon =
  | (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    })
  | React.ComponentClass<any>
  | FunctionComponent<any>
  | any;
export interface GenericCardProps {
  title?: string;
  primary?: string | number | undefined;
  secondary?: string;
  content?: string;
  image?: string;
  dateTime?: string;
  iconPrimary?: OverrideIcon;
  color?: string;
  size?: string;
}

export type NavItemType = {
  id?: string;
  link?: string;
  icon?: GenericCardProps["iconPrimary"];
  target?: boolean;
  external?: boolean;
  url?: string | undefined;
  type?: string;
  title?: ReactNode | string;
  color?: "primary" | "secondary" | "default" | undefined;
  caption?: ReactNode | string;
  breadcrumbs?: boolean;
  disabled?: boolean;
  chip?: ChipProps;
  children?: NavItemType[];
  elements?: NavItemType[];
  search?: string;
};

export type ArrangementOrder = "asc" | "desc" | undefined;

export type DateRange = { start: number | Date; end: number | Date };

export type GetComparator = (
  o: ArrangementOrder,
  o1: string
) => (a: KeyedObject, b: KeyedObject) => number;

export interface EnhancedTableToolbarProps {
  numSelected: number;
}

export type HeadCell = {
  id: string;
  numeric: boolean;
  label: string;
  disablePadding?: string | boolean | undefined;
  align?: "left" | "right" | "inherit" | "center" | "justify" | undefined;
};

export interface TabsProps {
  children?: React.ReactElement | React.ReactNode | string;
  value: string | number;
  index: number;
}
