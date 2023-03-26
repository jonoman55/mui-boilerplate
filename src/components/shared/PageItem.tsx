import { Container } from '@mui/material';

import type { Children } from '../../types';

/**
 * Page Item Wrapper Component
 */
export const PageItem = ({ children }: Children) => (
	<Container maxWidth='lg' sx={{ mt: 4 }}>
		{children}
	</Container>
);