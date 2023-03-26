import React from 'react';
import { styled, useScrollTrigger, Zoom, Box, Fab, FabProps, CSSObject } from '@mui/material';
import { KeyboardArrowUp as UpIcon } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

import type { Children } from '../../types';

/**
 * Default Zoom Styles
 */
const zoomBoxStyles: CSSObject = {
  position: 'fixed',
  bottom: 25,
  right: 25,
};

/**
 * Scroll To Top Icon Button (FAB)
 */
const UpIconButton = styled(Fab)<FabProps>(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.mode === 'light'
    ? blue[700]
    : blue[800],
}));

/**
 * Scroll Top Props
 */
interface ScrollTopProps {
  children: React.ReactNode;
  window?: () => Window;
};

/**
 * Scroll Top Wrapper Component
 */
const ScrollTop = (props: ScrollTopProps) => {
  const { children, window } = props;

  /**
   * Scroll Trigger Options
   */
  const trigger: boolean = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 50,
  });

  /**
   * Handle Click Event
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
 */
const BackToTop = (props: Children) => (
  <ScrollTop {...props}>
    <UpIconButton color='primary' size='small' aria-label='scroll back to top'>
      <UpIcon />
    </UpIconButton>
  </ScrollTop>
);

export default BackToTop;