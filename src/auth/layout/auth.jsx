import React, { Component } from 'react';
import { Header } from 'auth/components';
import { Route, Switch } from 'react-router-dom';
import { DirectLink } from 'auth/molekuls';
import routes from '../Routes';
import '../Style.css';

class auth extends Component {
    getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/auth") {
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
    render() {
        return (
            <div className="wrapper-login d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <div className="card card-signin shadow">
                                <div className="card-body">
                                    <Header />
                                    <Switch>{this.getRoutes(routes)}</Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        this.props.location.pathname === '/auth/sign-in' ?
                            <DirectLink 
                                message="Don't have account ?" 
                                redirect="/auth/sign-up"
                                name="Register Here" />
                        :
                            <DirectLink 
                                message="Have an account ?" 
                                redirect="/auth/sign-in"
                                name="Login Here" />
                    }
                </div>
            </div>
        )
    }
}

export default auth
