import React from 'react'
import './Calculator.css'; 
import Percent from './Percent'; 
import CustomPercent from './CustomPercent'; 

function PercentContainer() {
    return (
        <div className="PercentContainer">
            <Percent/>
            <Percent/>
            <Percent/>
            <Percent/>
            <Percent/>
            <CustomPercent/>
        </div>
    )
}

export default PercentContainer
