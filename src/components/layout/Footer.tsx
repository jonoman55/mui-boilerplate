import { Box, Link, Typography } from '@mui/material';

/**
 * Footer
 */
export const Footer = () => (
  <Box component='footer'>
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/" target="_blank">
        Material UI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Box>
);
