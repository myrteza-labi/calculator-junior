import React from 'react'
import './PercentContainer.css'; 
import Percent from './Percent'; 
import CustomPercent from './CustomPercent'; 

function PercentContainer(props) {
    let percentActive = props.percentActive[0]; 
    return (
        <div className="PercentContainer">
            <Percent onClick={props.onPercentClick} active={percentActive.five} value={5}/>
            <Percent onClick={props.onPercentClick} active={percentActive.ten} value={10}/>
            <Percent onClick={props.onPercentClick} active={percentActive.fifteen} value={15}/>
            <Percent onClick={props.onPercentClick} active={percentActive.twentyfive} value={25}/>
            <Percent onClick={props.onPercentClick} active={percentActive.fifty} value={50}/>
            <CustomPercent  active={percentActive.custome} value={"custom "} />
        </div>
    )
}

export default PercentContainer
