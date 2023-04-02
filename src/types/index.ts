import * as React from "react";
import { AppBarProps, TooltipProps } from "@mui/material";

/**
 * React Children Props
 */
export type Children = React.PropsWithChildren;

/**
 * React Lazy Load
 */
export type Lazy = React.LazyExoticComponent<() => JSX.Element>;

/**
 * Custom MUI Theme Pallette
 */
export type CustomPalette = {
  palette: {
    orange: string;
  }
};

/**
 * AppBar Position
 */
export type Position = AppBarProps["position"];

/**
 * Tooltip Placement
 */
export type Placement = TooltipProps["placement"];

/**
 * Nav Link Item
 */
export type LinkItem = {
  id: number;
  name: string;
  description?: string;
  to: string;
  icon: React.ReactNode;
};

/**
 * Theme Mode Option Item
 */
export type ThemeItem = {
  id: number;
  name: string;
  mode: ThemeMode;
  icon: React.ReactNode;
};

/**
 * App Theme Mode
 */
export type ThemeMode = "light" | "dark" | "system";
