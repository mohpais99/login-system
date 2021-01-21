import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from "config/Context";
import { useHistory } from 'react-router-dom';

function SignUp() {
    const emailRef = useRef()
    const fullnameRef = useRef()
    const passwordRef = useRef()
    const repasswordRef = useRef()
    const { signup } = useAuth()
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
        if (passwordRef.current.value !== repasswordRef.current.value) {
            setLoading(false)
            return setError('Password do not match!')
        } 
        try {
            setError(null)
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value, fullnameRef.current.value)
            history.push('/')
        } catch (error) {
            setLoading(false)
            const message = error.message
            setError(message)
        }
    }

    return (
        <>
            {
                error && (
                    <div className="badge badge-danger w-100 py-3 mb-2">
                        <p className="mb-0">Password do not match!</p>
                    </div>
                )
            }
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullname">Fullname</label>
                    <input type="text" className="form-control" id="fullname" placeholder="Enter fullname" ref={fullnameRef} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" ref={emailRef} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password" ref={passwordRef} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Re-Password</label>
                    <input type="password" className="form-control" id="repassword" placeholder="Enter Re-Password" ref={repasswordRef} />
                </div>
                <button disabled={loading} type="submit" className="btn btn-primary btn-sm w-100 text-uppercase">Submit</button>
            </form>
        </>
    )
}

export default SignUp
