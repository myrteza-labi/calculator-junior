import React from 'react'
import './Input.css'; 
import InputIcon from './InputIcon'; 

function Input(props) {
    return (
        <div className="Input">
            <InputIcon src={props.src} alt={props.alt}/>
            <input type="number" className="input" />
        </div>
    )
}

export default Input