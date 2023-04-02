import { styled, Box, BoxProps, CircularProgress, CircularProgressProps } from '@mui/material';

/**
 * Styled Spinner Container
 */
const SpinnerContainer = styled(Box)<BoxProps>(({ theme }) => ({
  height: '83.9vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.dark,
  margin: theme.spacing(0),
}));

/**
 * Styled Loading Spinner
 */
const SpinnerProgress = styled(CircularProgress)<CircularProgressProps>(({ theme }) => ({
  color: theme.palette.mode === 'light'
    ? theme.palette.info.main
    : theme.palette.info.dark,
}));

/**
 * Loading Spinner
 */
export const Spinner = () => (
  <SpinnerContainer>
    <SpinnerProgress />
  </SpinnerContainer>
); 