import React from 'react'
import './PercentContainer.css'; 
import Percent from './Percent'; 
import CustomPercent from './CustomPercent'; 

function PercentContainer(props) {
    return (
        <div className="PercentContainer">
            <Percent number={5}/>
            <Percent number={10}/>
            <Percent number={15}/>
            <Percent number={25}/>
            <Percent number={50}/>
            <CustomPercent/>
        </div>
    )
}

export default PercentContainer
