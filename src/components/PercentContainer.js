import React from 'react'
import './PercentContainer.css'; 
import Percent from './Percent'; 
import CustomPercent from './CustomPercent'; 

function PercentContainer(props) {
    return (
        <div className="PercentContainer">
            <Percent active={"active"} number={5}/>
            <Percent active={""} number={10}/>
            <Percent active={""} number={15}/>
            <Percent active={""} number={25}/>
            <Percent active={""} number={50}/>
            <CustomPercent  active={"active "}/>
        </div>
    )
}

export default PercentContainer
