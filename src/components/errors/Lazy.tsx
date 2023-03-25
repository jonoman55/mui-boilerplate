import { styled, Box, Button, CircularProgress, Typography } from '@mui/material';

const ErrorContainer = styled(Box)<{
    component?: React.ReactNode;
    role?: string;
}>(({ theme }) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper
}));

interface ErrorProps {
    error: { message: string };
    resetErrorBoundary: () => void;
};

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorProps) => (
    <ErrorContainer component='div' role='alert'>
        <Typography variant='body1' fontSize='large' gutterBottom>Something went wrong:</Typography>
        <Typography component='code' color='error' sx={{ p: 2, whiteSpace: 'pre-line' }}>{error.message}</Typography>
        <Button variant='contained' color='primary' onClick={resetErrorBoundary}>Try Again</Button>
    </ErrorContainer>
);

const Container = styled(Box)<{
    component?: React.ReactNode;
}>(({ theme }) => ({
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

const Text = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(2),
    color: theme.palette.primary.contrastText,
}));

const Loader = styled(CircularProgress)(({ theme }) => ({
    color: theme.palette.error.main,
}));

export const LoadingContainer = () => (
    <Container component='main'>
        <Loader />
        <Text variant='h5'>
            Loading...
        </Text>
    </Container>
);