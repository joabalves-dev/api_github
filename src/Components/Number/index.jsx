import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

function Number(props) {
    return (
            <Link className='number' to={props.to?props.to:''}>
                <h1>{props.number}</h1>
                <h3>{props.text}</h3>
            </Link>
    )
}

export default Number
