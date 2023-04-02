// TODO : Convert MUI Typography to Link and Icon when drawerOpen is true
// TODO : Add ToolTip to ThemeSwitch

import { useMemo } from 'react';
import { Box, Typography } from '@mui/material';

import Sidebar from './Sidebar';
import { ThemeSwitch, SidebarMenuButton as MenuButton } from '../design';
import { AppBar, Toolbar } from '../styled/Header.styled';
import { appActions } from '../../reducers/appSlice';
import { themeActions } from '../../reducers/themeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import type { Children, Position } from '../../types';

/**
 * Header
 */
const Header = ({ children }: Children) => {
  const dispatch = useAppDispatch();

  const drawerOpen: boolean = useAppSelector(
    (state) => state.app.drawerOpen
  );

  const {
    darkMode,
    themeMode
  } = useAppSelector((state) => state.theme);

  const handleDrawerClick = () => {
    dispatch(appActions.setDrawerOpen(true));
  };

  const handleThemeChange = () => {
    dispatch(themeActions.setThemeMode(
      !darkMode ? 'dark' : 'light'
    ));
    dispatch(themeActions.switchThemeMode(
      themeMode !== 'light' ? 'light' : 'dark'
    ));
  };

  const elevation = useMemo<number>(
    () => drawerOpen ? 0 : 2,
    [drawerOpen]
  );

  const position = useMemo<Position>(
    () => drawerOpen ? 'absolute' : 'fixed',
    [drawerOpen]
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='div' position={position} elevation={elevation} open={drawerOpen}>
        <Toolbar>
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