import React from 'react'
import './Input.css'; 
import InputIcon from './InputIcon'; 

function Input() {
    return (
        <div className="Input">
            <InputIcon/>
            <input type="text" className="input" />
        </div>
    )
}

export default Input
