// DOCS : https://reactrouter.com/en/main/router-components/browser-router

import { lazy } from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import { Layout } from '../components';

import type { Lazy } from '../types';

/**
 * Home Page
 */
const Home: Lazy = lazy(() => import('../pages/HomePage'));
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
        <Route path='/' element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;