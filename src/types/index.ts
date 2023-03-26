import * as React from "react";

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
 * Nav Link Item
 */
export type LinkItem = {
  id: number;
  name: string;
  to: string;
  icon: React.ReactNode;
};
