import { Box } from '@mui/material';

import Header from './Header';
import BackToTop from './BackToTop';
import { Footer } from './Footer';
import { TopAnchor } from './TopAnchor';
import { Container } from './Container';

import type { Children } from '../../types';

/**
 * Layout Wrapper Component
 */
export const Layout = ({ children }: Children) => (
  <Box component='div'>
    <TopAnchor />
    <Header
      children={children}
    />
    <Container>
      <BackToTop
        children={children}
      />
    </Container>
    <Footer />
  </Box>
);