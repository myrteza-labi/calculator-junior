import React from 'react'
import './ResetButton.css'; 

function ResetButton(props) {
    return (
        <button className={"ResetButton " + props.empty}>RESET</button>
    )
}

export default ResetButton
