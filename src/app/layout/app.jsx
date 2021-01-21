import React from 'react';
import { Navigation } from 'app/components';
import { Route, Switch } from 'react-router-dom';
import { useAuth } from "config/Context";
import routes from '../Routes';

function LayoutApp(props) {
    const { currentUser } = useAuth()
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            return (
                <Route 
                    exact
                    key={key}
                    path={prop.path}
                    render={
                        props => <prop.component user={currentUser} {...props} />
                    } />
            )
        });
    }
    return (
        <div className="wrapper">
            <Navigation 
                {...props}
                user={currentUser}
                routes={routes} />
            <Switch>{getRoutes(routes)}</Switch>
        </div>
    )
}

export default LayoutApp
