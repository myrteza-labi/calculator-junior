import React from 'react'
import './PercentContainer.css'; 
import Percent from './Percent'; 
import CustomPercent from './CustomPercent'; 

function PercentContainer(props) {
    let percentActive = props.percentActive[0]; 
    return (
        <div className="PercentContainer">
            <Percent data-name={"five"} onClick={props.onPercentClick} active={percentActive.five} value={5}/>
            <Percent data-name={"ten"} onClick={props.onPercentClick} active={percentActive.ten} value={10}/>
            <Percent data-name={"fifteen"} onClick={props.onPercentClick} active={percentActive.fifteen} value={15}/>
            <Percent data-name={"twentyfive"} onClick={props.onPercentClick} active={percentActive.twentyfive} value={25}/>
            <Percent data-name={"fifty"} onClick={props.onPercentClick} active={percentActive.fifty} value={50}/>
            <CustomPercent onChange={props.onCustomChange} onClick={props.onPercentClick} active={percentActive.custom}  />
        </div>
    )
}

export default PercentContainer
