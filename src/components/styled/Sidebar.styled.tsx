import React, { memo } from 'react';
import { 
  Box as MuiBox,
  BoxProps as MuiBoxProps,
  List as MuiList,
  ListProps as MuiListProps,
  ListSubheader as MuiListSubheader, 
  ListSubheaderProps as MuiListSubheaderProps, 
  Typography as MuiTypography, 
  TypographyProps as MuiTypographyProps,
} from '@mui/material';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import { styled, darken, lighten, Theme, CSSObject } from '@mui/material/styles';

import type { Children } from '../../types';

/**
 * Drawer (Sidebar) Width
 */
const drawerWidth: number = 240;

/**
 * Open Drawer (Sidebar) Styles
 */
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

/**
 * Closed Drawer (Sidebar) Styles
 */
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

/**
 * Styled Drawer
 */
export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})<DrawerProps>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

/**
 * Icon Styles
 */
export const colorStyles: CSSObject = {
  color: 'primary.contrastText'
};

/**
 * Styled Drawer (Sidebar) Header
 */
export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface ListProps extends MuiListProps {
  component?: React.ReactNode;
};

/**
 * Styled List
 */
export const List = styled(MuiList)<ListProps>(({ theme }) => ({
  '& .MuiDrawer-paper': {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  }
}));

/**
 * Styled List Subheader
 */
export const SidebarListSubheader = styled(MuiListSubheader)<MuiListSubheaderProps>(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(1.314),
  backgroundColor: theme.palette.mode === 'light'
    ? lighten(
      theme.palette.background.paper,
      theme.palette.action.hoverOpacity
    )
    : darken(
      theme.palette.background.paper,
      theme.palette.action.focusOpacity
    ),
}));

/**
 * Styled ListSubheader Text
 */
export const SidebarListSubheaderText = styled(MuiTypography)<MuiTypographyProps>(({ theme }) => ({
  marginRight: theme.spacing(0.5),
  cursor: 'default',
  ...theme.typography.subtitle1,
  fontWeight: 'bold',
  color: theme.palette.mode === 'light' 
    ? theme.palette.info.main
    : theme.palette.info.dark
}));

/**
 * Styled Theme List Subheader
 */
export const ThemeListSubheader = styled(MuiListSubheader)<MuiListSubheaderProps>(({ theme }) => ({
  marginTop: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: 'inherit',
  color: theme.palette.primary.contrastText,
  ...theme.typography.subtitle2,
}));

/**
 * Toggle Button Text Props
 */
interface ToggleButtonTextProps extends MuiBoxProps {
  matches?: boolean;
};

/**
 * Styled Toggle Button Text
 */
export const ToggleButtonText = styled(({ ...props }: ToggleButtonTextProps) =>
  <MuiBox component='span' {...props} />, {
  shouldForwardProp: (prop: PropertyKey) => prop !== 'matches'
})(({ theme, matches }) => ({
  fontSize: matches ? 11 : 13,
  textTransform: 'capitalize',
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(0.25),
}));

/**
 * Toggle Button Group Styles
 */
export const toggleButtonGroupStyles = (theme: Theme) => ({
  padding: theme.spacing(0, 2),
  margin: theme.spacing(0, 0, 0, 0.5),
  '& .MuiSvgIcon-root': {
    marginTop: theme.spacing(0.5),
  },
  '& .MuiToggleButton-root.Mui-selected': {
    backgroundColor: theme.palette.mode === 'light'
      ? lighten(
        theme.palette.primary.dark,
        theme.palette.action.hoverOpacity
      )
      : darken(
        theme.palette.primary.light,
        theme.palette.action.focusOpacity
      ),
  },
});

/**
 * Toggle Button Styles
 */
export const toggleButtonStyles = (theme: Theme, matches: boolean) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: !matches ? theme.spacing(1) : theme.spacing(0.75),
});

/**
 * Sidebar Header (Memoized)
 */
export const SidebarHeader = memo(({ children }: Children) => (
  <SidebarListSubheader>
    <SidebarListSubheaderText>
      {children}
    </SidebarListSubheaderText>
  </SidebarListSubheader>
));