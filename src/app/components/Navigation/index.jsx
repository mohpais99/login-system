import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Navigation(props) {
    const active = props.routes.filter(function(route) {
        const pathnow = route.path
        return pathnow === props.location.pathname
    })
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Login-React</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    {
                        props.routes.map((data, key) => 
                            <li className={`nav-item ${data === active[0] && 'active'}`} key={key}>
                                <Link className="nav-link" to={data.path}>{data.name}</Link>
                            </li>
                        )
                    }
                </ul>
                {
                    props.user ?
                        <span className="navbar-text">
                            Sign In as {!props.user.displayName ? 'Anonymous' : props.user.displayName}
                        </span>
                    :
                        <>
                            <Link className="btn btn-sm btn-primary mr-2" to="/auth/sign-in">Sign In</Link>
                            <Link className="btn btn-sm btn-primary" to="/auth/sign-up">Sign Up</Link>
                        </>
                }
            </div>
        </nav>
    )
}

export default Navigation
