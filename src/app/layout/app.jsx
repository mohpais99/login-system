import React from 'react';
import { Navigation } from 'app/components';
import { Route, Switch } from 'react-router-dom';
import routes from '../Routes';

function LayoutApp() {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/") {
                return (
                    <Route 
                        key={key}
                        path={prop.layout + prop.path}
                        render={props => <prop.component {...props} />} />
                );
            } else {
                return null
            }
        });
    }
    return (
        <div className="wrapper">
            <Navigation />
            <Switch>{getRoutes(routes)}</Switch>
        </div>
    )
}

export default LayoutApp
