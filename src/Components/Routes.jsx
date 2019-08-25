import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route component={() => (
                <div>
                    <h1>Página no encontrada</h1>
                    <span>Stonks</span>
                </div>
            )} />
        </Switch>
    </Router>
)

export default Routes;