import React from 'react'
import './Percent.css'; 

function Percent(props) {
    return (
        <button className={"Percent " + props.active}>
            {props.number}%
        </button>
    )
}

export default Percent
