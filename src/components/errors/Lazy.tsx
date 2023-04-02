import { FallbackProps } from 'react-error-boundary';
import { styled, Box, BoxProps, Button, CircularProgress, CircularProgressProps, Typography, TypographyProps } from '@mui/material';

/**
 * Error Container Props
 */
interface ErrorContainerProps extends BoxProps {
	role?: string;
};

/**
 * Styled Error Container
 */
const ErrorContainer = styled(Box)<ErrorContainerProps>(({ theme }) => ({
	padding: theme.spacing(2),
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: theme.palette.background.paper
}));

/**
 * Error Fallback
 */
export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
	<ErrorContainer component='div' role='alert'>
		<Typography variant='body1' fontSize='large' gutterBottom>Something went wrong:</Typography>
		<Typography component='code' color='error' sx={{ p: 2, whiteSpace: 'pre-line' }}>{error.message}</Typography>
		<Button variant='contained' color='primary' onClick={resetErrorBoundary}>Try Again</Button>
	</ErrorContainer>
);

/**
 * Styled Container
 */
const Container = styled(Box)<BoxProps>(({ theme }) => ({
	height: '100vh',
	width: '100vw',
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	alignItems: 'center',
	justifyContent: 'center',
	margin: theme.spacing(0),
	padding: theme.spacing(1),
	backgroundColor: theme.palette.background.paper
}));

/**
 * Styled Text
 */
const Text = styled(Typography)<TypographyProps>(({ theme }) => ({
	padding: theme.spacing(2),
	color: theme.palette.primary.contrastText,
}));

/**
 * Styled Loader
 */
const Loader = styled(CircularProgress)<CircularProgressProps>(({ theme }) => ({
	color: theme.palette.info.dark,
}));

/**
 * Loading Container
 */
export const LoadingContainer = () => (
	<Container component='main'>
		<Loader />
		<Text variant='h5'>Loading...</Text>
	</Container>
);