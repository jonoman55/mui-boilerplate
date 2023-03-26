import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiToolbar, { ToolbarProps as MuiToolbarProps } from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

/**
 * Drawer (Sidebar) Width
 */
const drawerWidth: number = 240;

/**
 * AppBar Props
 */
interface AppBarProps extends MuiAppBarProps {
  component?: React.ReactNode;
  open?: boolean;
};

/**
 * Styled AppBar
 */
export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: PropertyKey) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'inherit',
  }),
}));

/**
 * Toolbar Props
 */
interface ToolbarProps extends MuiToolbarProps {
  id?: string;
};

/**
 * Styled Toolbar
 */
export const Toolbar = styled(MuiToolbar)<ToolbarProps>(({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}));
