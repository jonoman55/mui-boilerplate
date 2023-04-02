// TODO : Implement useLogout hook

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Login, Logout } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import { ToolTip } from '../controls';
import { Drawer, DrawerHeader, List, ThemeListSubheader, ToggleButtonText, colorStyles, toggleButtonGroupStyles, toggleButtonStyles } from '../styled/Sidebar.styled';
import { appActions } from '../../reducers/appSlice';
import { themeActions } from '../../reducers/themeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useAuth, usePathname } from '../../hooks';
import { linkItems, themeItems } from '../../constants';

import type { Children, LinkItem, ThemeItem, ThemeMode } from '../../types';

/**
 * Sidebar
 */
const Sidebar = ({ children }: Children) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const pathname = usePathname();
  const auth = useAuth();

  const [alignment, setAlignment] = useState<string>('');

  const themeMode: ThemeMode = useAppSelector(
    (state) => state.theme.themeMode
  );

  const drawerOpen: boolean = useAppSelector(
    (state) => state.app.drawerOpen
  );

  const authText = useMemo<string>(
    () => auth ? 'Logout' : 'Login',
    [auth]
  );

  const themeText = useMemo<string>(
    () => themeMode === 'light' ? 'Light Mode' : 'Dark Mode',
    [themeMode]
  );

  useEffect(() => {
    if (alignment === '') {
      setAlignment(themeMode as string);
    }
  }, [alignment, themeMode]);

  const selectedItem = useCallback<(to: string) => boolean>(
    (to: string) => pathname === to,
    [pathname]
  );

  const selectedTheme = useCallback<(mode: ThemeMode) => () => void>(
    (mode: ThemeMode) => () => {
      dispatch(themeActions.setThemeMode(mode));
      dispatch(themeActions.switchThemeMode(mode));
    },
    [dispatch]
  );

  const handleDrawerClose = () => {
    dispatch(appActions.setDrawerOpen(false));
  };

  const handleDrawerOpen = () => {
    dispatch(appActions.setDrawerOpen(true));
  };

  const handleThemeChange = (_e: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  const handleLogout = () => {
    if (!auth) navigate('/');
    else {
      // logout function to be implemented
    }
  };

  return (
    <React.Fragment>
      <Drawer variant='permanent' open={drawerOpen}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={colorStyles}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {drawerOpen && <Divider />}
        <List component='nav' disablePadding>
          {linkItems.map(({ id, name, to, icon }: LinkItem) => (
            <ToolTip key={id} title={name} placement='right' sx={{ width: '100%' }} component={
              <ListItemButton component={Link} to={to} selected={selectedItem(to)} divider>
                <ListItemIcon sx={colorStyles}>{icon}</ListItemIcon>
                <ListItemText primary={name} sx={colorStyles} />
              </ListItemButton>}
            />
          ))}
        </List>
        <List subheader={drawerOpen && <ThemeListSubheader>Theme Mode</ThemeListSubheader>} disablePadding>
          <ListItem divider disableGutters disablePadding={!drawerOpen}>
            {drawerOpen ? (
              <ToggleButtonGroup
                value={alignment}
                onChange={handleThemeChange}
                exclusive
                fullWidth
                aria-label='theme-modes'
                sx={(theme) => toggleButtonGroupStyles(theme)}
              >
                {themeItems.map(({ id, name, mode, icon }: ThemeItem) => (
                  <ToggleButton
                    key={id}
                    value={name}
                    aria-label={name}
                    size='medium'
                    disabled={themeMode === mode}
                    selected={themeMode === mode}
                    onClick={selectedTheme(mode)}
                    sx={(theme) => toggleButtonStyles(theme)}
                  >
                    {icon}
                    <ToggleButtonText>{name}</ToggleButtonText>
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            ) : (
              <ToolTip title={themeText} placement='right' sx={{ width: '100%' }} component={
                <ListItemButton onClick={handleDrawerOpen}>
                  <ListItemIcon sx={colorStyles}>
                    {themeMode === 'light' ? themeItems[0].icon : themeItems[2].icon}
                  </ListItemIcon>
                  <ListItemText primary={themeText} sx={colorStyles} />
                </ListItemButton>}
              />
            )}
          </ListItem>
          <ToolTip title={authText} placement='right' sx={{ width: '100%' }} component={
            <ListItemButton onClick={handleLogout} divider>
              <ListItemIcon>{auth ? <Logout sx={colorStyles} /> : <Login sx={colorStyles} />}</ListItemIcon>
              <ListItemText primary={authText} sx={colorStyles} />
            </ListItemButton>}
          />
        </List>
      </Drawer>
      {children}
    </React.Fragment>
  );
};

export default Sidebar;