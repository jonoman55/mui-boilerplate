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
 * Custom MUI Theme
 */
export type CustomPalette = {
  palette: {
    orange: string;
  }
};

/**
 * Scroll Zoom Styles
 */
export type ZoomStyles = {
  position: string;
  bottom: number;
  right: number;
};

export type LinkItem = {
  id: number;
  name: string;
  to: string;
  icon: React.ReactNode;
};
