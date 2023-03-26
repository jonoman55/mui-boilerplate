import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

/**
 * Sidebar Menu Button Props
 */
interface SidebarMenuButtonProps {
  drawerOpen: boolean;
  onClick: () => void;
};

/**
 * Sidebar Menu Button 
 */
export const SidebarMenuButton = ({ drawerOpen, onClick }: SidebarMenuButtonProps) => (
  <IconButton
    aria-label='open drawer'
    onClick={onClick}
    edge='start'
    sx={{
      color: 'primary.contrastText',
      marginRight: 5,
      ...(drawerOpen && { display: 'none' }),
    }}
  >
    <MenuIcon />
  </IconButton>
);