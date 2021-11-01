import React from 'react'
import './SectionTitle.css'; 

function SectionTitle(props) {
    return (
        <h2 className="SectionTitle">
            {props.title}
        </h2>
    )
}

export default SectionTitle
