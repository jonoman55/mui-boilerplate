import { useMemo, useState } from 'react';
import { CardHeader, CardMedia, Typography, Avatar, Button, IconButton } from '@mui/material';
import { Share as ShareIcon } from '@mui/icons-material';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Card, CardContent, CardActions } from '../../styled/Card.styled';
import { useAppSelector } from '../../../app/hooks';

import muiLogo from '../../../images/mui-logo.png';
import muiIcon from '../../../images/mui-logo.png';
import { useNotify } from '../../../hooks';

/**
 * Material UI URL
 */
const muiUrl: string = 'https://mui.com/';
/**
 * Material UI Getting Started URL
 */
const muiGettingStartedUrl: string = 'https://mui.com/material-ui/getting-started/overview/';

/**
 * Home Card
 */
export const Home = () => {
  const notify = useNotify();

  const [copiedText, setCopiedText] = useState(muiUrl);

  const drawerOpen: boolean = useAppSelector(
    (state) => state.app.drawerOpen
  );
  const elevation: number = useMemo(
    () => drawerOpen ? 0 : 2,
    [drawerOpen]
  );

  const handleOnCopy = () => {
    setCopiedText(muiUrl);
    if (copiedText === muiUrl) notify({
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
    <Card elevation={elevation} drawerOpen={drawerOpen}>
      <CardHeader
        title='Material UI Boilerplate'
        subheader={`${new Date().toLocaleString('en-US', { dateStyle: 'full' })}`}
        avatar={<Avatar src={muiIcon} alt='mui-icon' />}
        action={actionJSX()}
      />
      <CardContent>
        <CardMedia
          image={muiLogo}
          title='mui-logo'
          sx={{ height: '512px', width: '512px' }}
        />
        <Typography component='p' variant='body1' paragraph gutterBottom>
          Material UI is a library of React UI components that implements Google's Material Design.
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='secondary' variant='contained' href={muiGettingStartedUrl} target='_blank'>
          Getting Started
        </Button>
      </CardActions>
    </Card>
  );
};