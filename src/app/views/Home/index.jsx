import React from 'react';
import { useAuth } from "config/Context";

function Home(props) {
    const { signout } = useAuth()
    const onLogout = async () => {
        try {
            await signout()
        } catch (error) {
            console.log(error);
        }
    }
    console.log(props.user);
    return (
        <div className="jumbotron ">
            <div className="row justify-content-center">
                <div className="col-7 text-center">
                    <h1 className="display-4">Welcome to Login System</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    {
                        props.user && (
                            <p className="lead">
                                <button onClick={onLogout} className="btn btn-primary btn-lg">Logout</button>
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
