// TODO : Add Sticky Footer Component

import { Box } from '@mui/material';

import Header from './Header';
import BackToTop from './BackToTop';
import { Container } from './Container';

import type { Children } from '../../types';

/**
 * Layout Wrapper Component
 */
export const Layout = ({ children }: Children) => (
  <Box component='div'>
    <Header
      children={children}
    />
    <Container>
      <BackToTop
        children={children}
      />
    </Container>
  </Box>
);