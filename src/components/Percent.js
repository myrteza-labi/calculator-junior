import React from 'react'
import './Calculator.css'; 

function Percent(props) {
    return (
        <button className="Percent">
            {props.number}
        </button>
    )
}

export default Percent
