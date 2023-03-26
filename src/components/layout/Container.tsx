import { Box } from '@mui/material';
import { Children } from '../../types';

import { DrawerHeader } from '../styled/Sidebar.styled';

/**
 * Main Container Wrapper with Drawer (Sidebar) Header
 */
export const Container = ({ children }: Children) => (
  <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
    <DrawerHeader />
    {children}
  </Box>
);