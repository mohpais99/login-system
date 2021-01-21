import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "config/Context";
import { Footer } from "auth/components";
import { useHistory } from "react-router-dom";

function SignIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signin } = useAuth()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    useEffect((error) => {
        let timeout = setTimeout(() => {
            if (!error) {
                setError(null);
            }
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, [error])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setError(null)
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch (error) {
            const message = "Invalid username or password!"
            setError(message)
        }
        setLoading(false)
    }
    return (
        <>
            {
                error && (
                    <div className="badge badge-danger w-100 py-3 mb-2">
                        <p className="mb-0">{error}</p>
                    </div>
                )
            }
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" ref={emailRef} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" ref={passwordRef} />
                </div>
                <button disabled={loading} type="submit" className="btn btn-primary btn-sm w-100 text-uppercase">Submit</button>
            </form>
            <hr className="my-4" />
            <Footer />
        </>
    )
}

export default SignIn
