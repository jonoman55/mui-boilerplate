// DOCS : https://reactrouter.com/en/main/router-components/browser-router

import { lazy } from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import { Layout } from '../components';
import type { Lazy } from '../types';

const Home: Lazy = lazy(() => import('../pages/HomePage'));
const NotFound: Lazy = lazy(() => import("../pages/NotFoundPage"));

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