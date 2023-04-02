// TODO : Finish implement this card component using user data from localStorage

import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, CardHeader, Grid, Typography } from '@mui/material';
import { Construction as ConstructionIcon, AccountCircle as ProfileIcon } from '@mui/icons-material';

import { Card, CardContent, CardActions } from '../../styled/Card.styled';

/**
 * User Profile Card
 */
export const Profile = () => {
  const navigate = useNavigate();
  return (
    <Box component='div'>
      <Card elevation={2}>
        <CardHeader
          title='Profile'
          subheader={`${new Date().toLocaleString('en-US', { dateStyle: 'full' })}`}
          avatar={<Avatar sx={{ color: 'primary.contrastText' }}><ProfileIcon /></Avatar>}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <ConstructionIcon sx={{ color: 'primary.contrastText', height: 56, width: 56 }} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography fontWeight='bold' align='center' variant='body1' paragraph>
                Under Construction
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button color='secondary' variant='contained' onClick={() => navigate('/')} sx={{ my: 1, width: 125 }}>
            Home
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
