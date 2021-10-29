import React from 'react'
import './Calculator.css'; 

function InputIcon(props) {
    return (
        <img src={props.src} alt={props.alt} className="InputIcon" />
    )
}

export default InputIcon
