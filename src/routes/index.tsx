// DOCS :https://reactrouter.com/en/main/router-components/hash-router

import { lazy } from 'react';
import { HashRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import { Layout } from '../components';
import type { Lazy } from '../types';

const Home: Lazy = lazy(() => import('../pages/HomePage'));

const Routes = () => (
    <Router>
        <Layout>
            <Switch>
                <Route path='/' element={<Home />} />
            </Switch>
        </Layout>
    </Router>
);

export default Routes;