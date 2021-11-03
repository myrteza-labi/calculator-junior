import React from 'react'
import './CustomPercent.css'; 

function CustomPercent(props) {
    return (
        <input maxLength="2" pattern="[0-9]{2}" onChange={props.onChange} onClick={props.onClick} data-name={"custom"} type="text" className={"CustomPercent "+ props.active} placeholder="Custom"/>
    )
}

export default CustomPercent
