// TODO : Create ListItem Button Link components with react-router-dom Links for navigation
// TODO : Create ToggleButtonGroup for the themeItems
// TODO : Create List Item for authItems

import React from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, MoveToInbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';
import { useTheme, Theme } from '@mui/material/styles';

import { Drawer, DrawerHeader, iconStyles } from '../styled/Sidebar.styled';
import { appActions } from '../../reducers/appSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { linkItems } from '../../constants';

import type { Children, LinkItem } from '../../types';

/**
 * Sidebar
 */
const Sidebar = ({ children }: Children) => {
  const dispatch = useAppDispatch();

  const theme: Theme = useTheme();

  const drawerOpen: boolean = useAppSelector(
    (state) => state.app.drawerOpen
  );

  const handleDrawerClose = () => {
    dispatch(appActions.setDrawerOpen(false));
  };

  return (
    <React.Fragment>
      <Drawer variant='permanent' open={drawerOpen}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon sx={iconStyles} />
            ) : (
              <ChevronLeftIcon sx={iconStyles} />
            )}
          </IconButton>
        </DrawerHeader>
        {drawerOpen && <Divider />}
        <List>
          {linkItems.map((item: LinkItem, index: number) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: drawerOpen ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: drawerOpen ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: drawerOpen ? 1 : 0, textTransform: 'capitalize' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: drawerOpen ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: drawerOpen ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? (
                    <InboxIcon sx={iconStyles} />
                  ) : (
                    <MailIcon sx={iconStyles} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: drawerOpen ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {children}
    </React.Fragment>
  );
};

export default Sidebar;