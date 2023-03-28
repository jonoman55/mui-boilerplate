import React, { useState } from 'react';
import { Avatar, Button, Box, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';

import { authActions, AuthUser } from '../../../reducers/authSlice';
import { useAppDispatch } from '../../../app/hooks';

/**
 * User Login 
 */
interface UserLogin extends AuthUser {
  password: string;
};

/**
 * Login Form
 */
export const Login = () => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState<UserLogin>({
    email: '',
    password: '',
  });

  const { email, password } = login;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      dispatch(authActions.setUser({ email }));
      dispatch(authActions.setIsLoggedIn(true));
    }
  };

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLogin((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.dark' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            color="secondary"
            value={email}
            onChange={handleChange}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            color="secondary"
            value={password}
            onChange={handleChange}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="secondary"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color="secondary">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" color="secondary">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
};
