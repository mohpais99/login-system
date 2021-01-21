import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "config/Context";

function Navigation() {
    const { currentUser } = useAuth()
    console.log(currentUser);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"><b>Login-React</b></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Features</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">About Us</Link>
                    </li>
                </ul>
                {
                    currentUser ?
                        <span className="navbar-text">
                            Sign In as {!currentUser.displayName ? 'Anonymous' : currentUser.displayName}
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
