import React from 'react'
import './Input.css'; 
import InputIcon from './InputIcon'; 

function Input(props) {
    return (
        <div className={"Input " + props.active + props.error}>
            <InputIcon src={props.src} alt={props.alt}/>
            <input type="number" className="inputElement" />
        </div>
    )
}

export default Input
