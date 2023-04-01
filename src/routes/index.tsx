// DOCS : https://reactrouter.com/en/main/router-components/browser-router

import { lazy } from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import { Layout } from '../components';

import type { Lazy } from '../types';

/**
 * Home Page
 */
const Home: Lazy = lazy(() => import("../pages/HomePage"));
/**
 * Require Auth Component
 */
const Auth: Lazy = lazy(() => import("../pages/RequireAuth"));
/**
 * Login Page
 */
const Login: Lazy = lazy(() => import("../pages/LoginPage"));
/**
 * User Profile Page
 */
const Profile: Lazy = lazy(() => import("../pages/ProfilePage"));
/**
 * Users Page
 */
const Users: Lazy = lazy(() => import("../pages/UsersPage"));
/**
 * Not Found Page
 */
const NotFound: Lazy = lazy(() => import("../pages/NotFoundPage"));

/**
 * Routes with Layout Wrapper
 */
const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path='/' element={<Auth />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='users' element={<Users />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;