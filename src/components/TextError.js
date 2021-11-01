import React from 'react'
import './TextError.css'; 


function TextError(props) {

    return (
        <p className={"TextError " + props.error}>
            Can't be zero
        </p>
    )
}

export default TextError
