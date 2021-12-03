import React from 'react'
import './index.css'

function Picture(props) {
    return (
        <img className='avatar' src={props.url} alt={props.alt}/>
    )
}

export default Picture
