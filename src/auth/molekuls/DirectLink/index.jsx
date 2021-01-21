import React from 'react'
import { Link } from 'react-router-dom'

function DirectLink(props) {
    return (
        <div className="col-12 mt-4 text-center">
            {props.message}
            <Link className="ml-1" to={props.redirect}>{props.name}</Link>
        </div>
    )
}

export default DirectLink
