import { useMemo } from 'react';
import { Box, Paper, Theme, Typography } from '@mui/material';

import { useAppSelector } from '../../../app/hooks';

export const Home = () => {
    const drawerOpen: boolean = useAppSelector(
        (state) => state.app.drawerOpen
    );
    const elevation: number = useMemo(
        () => drawerOpen ? 0 : 2,
        [drawerOpen]
    );
    return (
        <Box component='div'>
            <Paper elevation={elevation} sx={(theme: Theme) => ({
                m: 2,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.palette.primary.main,
                borderRadius: theme.shape.borderRadius,
                border: drawerOpen ? `1px solid ${theme.palette.divider}` : 'none'
            })}>
                <Typography variant='h6'>Home</Typography>
            </Paper>
        </Box>
    );
};