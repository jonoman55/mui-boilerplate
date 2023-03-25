// DOCS : https://mui.com/material-ui/getting-started/overview/

import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';

import { SnackbarProvider } from './contexts/AlertContext';
import { ErrorFallback, LoadingContainer } from './components';
import { useActiveTheme } from './hooks';

const Routes: React.LazyExoticComponent<() => JSX.Element> = lazy(
    () => import('./routes')
);

const App: React.FC<{}> = (): JSX.Element => {
    const theme: Theme = useActiveTheme();
    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider>
                <CssBaseline />
                <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
                    <Suspense fallback={<LoadingContainer />}>
                        <Routes />
                    </Suspense>
                </ErrorBoundary>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default App;