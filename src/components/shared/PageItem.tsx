import { Container } from '@mui/material';

import type { Children } from '../../types';

/**
 * Page Item Wrapper Component
 * @param children React Props With Children 
 * @returns JSX Element wrapped in MUI container
 */
export const PageItem = ({ children }: Children) => (
    <Container sx={{ mt: 8 }}>
        {children}
    </Container>
);