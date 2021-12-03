import React from 'react'
import './index.css'

function Card(props) {
    return (
        <div className={`Card ${props.className?props.className:''}`}>
            {props.children}
        </div>
    )
}

export default Card
