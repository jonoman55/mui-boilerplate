import React from 'react';
import { styled, useScrollTrigger, Zoom, Box, Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

import type { Children, ZoomStyles } from '../../types';

/**
 * Default Zoom Styles
 */
const zoomBoxStyles: ZoomStyles = {
    position: 'fixed',
    bottom: 100,
    right: 25,
};

/**
 * Scroll To Top Icon
 */
const UpIcon = styled(Fab)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
}));

/**
 * Scroll Top Props
 */
interface ScrollTopProps {
    children: React.ReactNode;
    window?: () => Window;
}

/**
 * Scroll Top Wrapper Component
 * @param {ScrollTopProps} props 
 * @returns JSX Element
 */
const ScrollTop = (props: ScrollTopProps) => {
    const { children, window } = props;

    /**
     * Scroll Trigger Options
     */
    const trigger: boolean = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    /**
     * Handle Click Event
     * @param event React Mouse Event
     */
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');
        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
                behavior: 'smooth'
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box role='presentation' onClick={handleClick} sx={zoomBoxStyles}>
                {children}
            </Box>
        </Zoom>
    );
};

/**
 * Scroll Back To Top Button
 * @param {Children} props React Node
 * @returns JSX Element
 */
const BackToTop = (props: Children) => (
    <ScrollTop {...props}>
        <UpIcon color='primary' size='small' aria-label='scroll back to top'>
            <KeyboardArrowUp />
        </UpIcon>
    </ScrollTop>
);

export default BackToTop;