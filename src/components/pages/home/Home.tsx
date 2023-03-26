import { useMemo, useState } from 'react';
import { Card, CardContent, CardMedia, CardActions, CardHeader, Typography, Avatar, Button, IconButton } from '@mui/material';
import { Share as ShareIcon } from '@mui/icons-material';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useAppSelector } from '../../../app/hooks';

import muiLogo from '../../../images/mui-logo.png';
import muiIcon from '../../../images/mui-logo.png';
import { useNotify } from '../../../hooks';

/**
 * Material UI Share Link
 */
const muiUrl: string = 'https://mui.com/'

/**
 * Home Card
 */
export const Home = () => {
  const notify = useNotify();

  const [copiedText, setCopiedText] = useState('');

  const drawerOpen: boolean = useAppSelector(
    (state) => state.app.drawerOpen
  );
  const elevation: number = useMemo(
    () => drawerOpen ? 0 : 2,
    [drawerOpen]
  );

  const handleOnCopy = () => {
    setCopiedText(muiUrl);
    notify({
      variant: 'success',
      message: 'Successfully copied share link!'
    });
  };

  const actionJSX = () => (
    <CopyToClipboard text={copiedText} onCopy={handleOnCopy}>
      <IconButton sx={{ color: 'primary.contrastText' }}>
        <ShareIcon />
      </IconButton>
    </CopyToClipboard>
  );

  return (
    <Card elevation={elevation} sx={(theme) => ({
      margin: theme.spacing(6, 0),
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius,
      border: drawerOpen ? `1px solid ${theme.palette.divider}` : 'none'
    })}>
      <CardHeader
        title='Material UI Boilerplate'
        subheader={`${new Date().toLocaleString('en-US', { dateStyle: 'full' })}`}
        avatar={<Avatar src={muiIcon} alt='mui-icon' />}
        action={actionJSX()}
      />
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CardMedia
          image={muiLogo}
          title='mui-logo'
          sx={{ height: '512px', width: '512px' }}
        />
        <Typography component='p' variant='body1' paragraph gutterBottom>
          Material UI is a library of React UI components that implements Google's Material Design.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button color='secondary' variant='contained' href='https://mui.com/material-ui/getting-started/overview/' target='_blank'>
          Getting Started
        </Button>
      </CardActions>
    </Card>
  );
};