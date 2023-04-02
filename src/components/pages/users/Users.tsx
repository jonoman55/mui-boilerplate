// TODO : Finish implement the users card and move to separate component
// TODO : Implement a User Profile Page and route
// TODO : Implement a Users DataGrid
// DOCS : https://mui.com/material-ui/react-card/

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Card as MuiCard, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import { Refresh as RefreshIcon, AccountCircle as UsersIcon, PermIdentity as UserProfileIcon } from '@mui/icons-material';

import { Card, CardContent, CardActions } from '../../styled/Card.styled';
import { User, useGetUsersQuery } from '../../../apis/usersApi';
import { Spinner } from '../../design';
import { stringAvatar } from '../../../utils';

const exampleUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
};

/**
 * Users Card
 */
export const Users = () => {
  const navigate = useNavigate();

  const {
    data: usersResults,
    isLoading: usersIsLoading,
    refetch: usersRefetch
  } = useGetUsersQuery('getUsers', {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });

  const isLoading = useMemo<boolean>(
    () => usersIsLoading,
    [usersIsLoading]
  );

  const users = useMemo<User[]>(() => {
    const results: User[] = [];
    if (!isLoading && usersResults) {
      usersResults.map(
        (user: User) => results.push(user)
      );
    }
    return results;
  }, [isLoading, usersResults]);

  const refetchUsers = useCallback<() => void>(() => {
    usersRefetch();
  }, [usersRefetch]);

  return isLoading ? <Spinner /> : (
    <Box component='div'>
      <Card elevation={2}>
        <CardHeader
          title='Users'
          subheader={`${new Date().toLocaleString('en-US', { dateStyle: 'full' })}`}
          avatar={<Avatar sx={{ color: 'primary.contrastText' }}><UsersIcon /></Avatar>}
          action={<IconButton onClick={refetchUsers} sx={{ color: 'primary.contrastText' }}><RefreshIcon /></IconButton>}
        />
        <CardContent>
          <Grid container spacing={2}>
            {users?.map((user: User, idx: number) => (
              <Grid key={idx} item xs={6} sm={6} md={6} lg={6} xl={6}>
                <MuiCard elevation={2} sx={(theme) => ({
                  borderRadius: theme.shape.borderRadius,
                })}>
                  <CardHeader
                    title={user?.name}
                    subheader={user?.username}
                    avatar={<Avatar {...stringAvatar(user?.name)} />}
                    action={<IconButton sx={{ color: 'primary.contrastText' }}><UserProfileIcon /></IconButton>}
                  />
                  <CardContent>
                    <Typography component='p' variant='body2' paragraph gutterBottom>
                      {user.company.catchPhrase}
                    </Typography>
                  </CardContent>
                </MuiCard>
              </Grid>
            ))}
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
