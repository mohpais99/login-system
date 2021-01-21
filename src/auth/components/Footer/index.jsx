import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <>
            <button className="btn btn-lg btn-google btn-sm w-100 text-uppercase mb-2" type="submit">
                <FontAwesomeIcon icon={["fab", "google"]} /> Sign in with Google
            </button>
            <button className="btn btn-lg btn-facebook btn-sm w-100 text-uppercase" type="submit">
                <FontAwesomeIcon icon={["fab", "facebook"]} /> Sign in with Facebook
            </button>
        </>
    )
}

export default Footer
