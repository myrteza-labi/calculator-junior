import React from 'react'
import './Input.css'; 
import InputIcon from './InputIcon'; 

function Input(props) {

    return (

        <div onClick={props.onClick}
             className={"Input " + props.active + props.error} >

            <InputIcon src={props.src} alt={props.alt}/>
            <input id={props.id} onChange={props.onChange} data-name={props["data-name"]} type="number" className="inputElement" autoComplete="off"/>

        </div>
    )
}

export default Input
