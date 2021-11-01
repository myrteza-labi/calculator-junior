import React from 'react'
import './CustomPercent.css'; 

function CustomPercent(props) {
    return (
        <button className={"CustomPercent "+ props.active}>
            Custom
        </button>
    )
}

export default CustomPercent
