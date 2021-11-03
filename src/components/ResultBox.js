import React from 'react'
import './ResultBox.css'; 
import Result from './Result'; 
import ResetButton from './ResetButton'; 

function ResultBox(props) {

    let tipAmount = props.tipAmount; 
    let total = props.total; 
    return (
        <section className="ResultBox">
            <Result titleBy={"Tip Amount"} amount={tipAmount}/>
            <Result titleBy={"Total"} amount={total}/>
            <ResetButton onClick={props.onResetClick} empty={" "}/>
        </section> 
    )
}

export default ResultBox
