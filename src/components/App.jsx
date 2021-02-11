import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import BadgeUpdate from '../pages/BadgeUpdate';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from './Layout';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/badges" component={ Badges } />
                    <Route exact path="/badges/new" component={ BadgeNew } />
                    <Route exact path="/badges/:badgeId/update" component={ BadgeUpdate } />
                    <Route exact path="/badges/:badgeId" component={ BadgeDetailsContainer } />

                    <Route path="/404" component={ NotFound } />
                    <Redirect from="*" to="/404" />
                </Switch>
            </Layout>    
        </BrowserRouter>
    )
}

export default App;