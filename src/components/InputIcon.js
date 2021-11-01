import React from 'react'
import './InputIcon.css'; 

function InputIcon(props) {
    return (
        <img src={props.src} alt={props.alt} className="InputIcon" />
    )
}

export default InputIcon
