import React from 'react'
import './CustomPercent.css'; 

function CustomPercent(props) {
    return (
        <input onChange={props.onChange} onClick={props.onClick} data-name={"custom"} type="number" className={"CustomPercent "+ props.active} placeholder="Custom"/>
    )
}

export default CustomPercent
