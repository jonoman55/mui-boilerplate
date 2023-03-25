import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

interface SidebarButtonProps {
    drawerOpen: boolean;
    onClick: () => void;
}

export const SidebarButton = ({ drawerOpen, onClick }: SidebarButtonProps) => (
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