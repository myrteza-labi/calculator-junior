import React from 'react'
import './Percent.css'; 

function Percent(props) {
    return (
        <button onClick={props.onClick} value={props.value} className={"Percent " + props.active}>
            {props.value}%
        </button>
    )
}

export default Percent
