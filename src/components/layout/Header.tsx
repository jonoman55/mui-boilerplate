// TODO : Move styled components to Header.styled.tsx under styled dir
// TODO : Convert MUI Typography to Link and Icon when drawerOpen is true

import { useMemo } from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

import Sidebar from './Sidebar';
import { ThemeSwitch, SidebarButton as MenuButton } from '../design';
import { appActions } from '../../reducers/appSlice';
import { themeActions } from '../../reducers/themeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import type { Children } from '../../types';

/**
 * Drawer (Sidebar) Width
 */
const drawerWidth: number = 240;

/**
 * AppBar Props
 */
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
};

/**
 * Styled AppBar
 */
const AppBar = styled(MuiAppBar, {
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
 * Header
 */
const Header = ({ children }: Children) => {
  const dispatch = useAppDispatch();

  const drawerOpen: boolean = useAppSelector(
    (state) => state.app.drawerOpen
  );

  const darkMode: boolean = useAppSelector(
    (state) => state.theme.darkMode
  );

  const handleDrawerClick = () => {
    dispatch(appActions.setDrawerOpen(true));
  };

  const handleThemeChange = () => {
    dispatch(themeActions.switchThemeMode());
  };

  const elevation = useMemo<number>(
    () => drawerOpen ? 0 : 2,
    [drawerOpen]
  );

  const position = useMemo<MuiAppBarProps["position"]>(
    () => drawerOpen ? 'absolute' : 'fixed',
    [drawerOpen]
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position={position} elevation={elevation} open={drawerOpen}>
        <Toolbar id='back-to-top-anchor' sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <MenuButton
            drawerOpen={drawerOpen}
            onClick={handleDrawerClick}
          />
          <Typography component='div' variant='h6' noWrap>
            {drawerOpen ? 'MUI' : 'MUI Boilerplate'}
          </Typography>
          <ThemeSwitch
            checked={darkMode}
            onChange={handleThemeChange}
            sx={{ ml: 1 }}
          />
        </Toolbar>
      </AppBar>
      <Sidebar children={children} />
    </Box>
  );
};

export default Header;