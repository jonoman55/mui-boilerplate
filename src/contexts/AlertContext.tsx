// DOCS : https://notistack.com/getting-started

import { createRef, useCallback } from 'react';
import { Slide, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { SnackbarProvider as NotistackProvider, SnackbarKey, SnackbarOrigin } from 'notistack';

import type { Children } from '../types';

/**
 * Dismiss Icon Props
 */
interface DismissIconProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * Snackbar Dismiss Icon Button
 */
const DismissIconButton = ({ onClick }: DismissIconProps) => (
    <IconButton size='small' onClick={onClick}>
        <CloseIcon
            fontSize='small'
            sx={{ color: 'common.white' }}
        />
    </IconButton>
);

/**
 * Default Snackbar Anchor Origin
 */
export const defaultAnchorOrigin: SnackbarOrigin = {
    vertical: 'bottom',
    horizontal: 'right'
};

/**
 * Notistack Context Provider
 */
export const SnackbarProvider = ({ children }: Children) => {
    /**
     * Notistack Provider Ref
     */
    const notistackRef: React.RefObject<NotistackProvider> = createRef<NotistackProvider>();

    /**
     * Dismiss Notistack Snackbar Notification Callback
     */
    const onClickDismiss = useCallback<(key: SnackbarKey) => () => void>(
        (key: SnackbarKey) => () =>
            notistackRef?.current?.closeSnackbar(key),
        [notistackRef]
    );

    return (
        <NotistackProvider
            ref={notistackRef}
            maxSnack={3}
            preventDuplicate={true}
            autoHideDuration={3000}
            TransitionComponent={Slide}
            hideIconVariant={false}
            anchorOrigin={defaultAnchorOrigin}
            action={(key: SnackbarKey) => (
                <DismissIconButton onClick={onClickDismiss(key)} />
            )}
        >
            {children}
        </NotistackProvider>
    );
};