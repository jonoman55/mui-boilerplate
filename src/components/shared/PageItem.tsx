import { Container } from '@mui/material';

import type { Children } from '../../types';

/**
 * Page Item Wrapper Component
 */
export const PageItem = ({ children }: Children) => (
	<Container sx={{ mt: 8 }}>
		{children}
	</Container>
);