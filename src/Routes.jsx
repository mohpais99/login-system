import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutAuth from 'auth/layout/auth';
import LayoutApp from 'app/layout/app';
import { AuthProvider } from 'config/Context';

const Routes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    <Route path="/auth" render={props => <LayoutAuth {...props} />} />
                    <Route path="/" render={props => <LayoutApp {...props} exact />} />
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default Routes;