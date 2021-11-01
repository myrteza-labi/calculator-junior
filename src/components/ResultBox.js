import React from 'react'
import './ResultBox.css'; 
import Result from './Result'; 
import ResetButton from './ResetButton'; 

function ResultBox(props) {

    let falseAmount1 = "$4.27"
    let falseAmount2 = "$32.79"

    return (
        <section className="ResultBox">
            <Result titleBy={"Tip Amount"} amount={falseAmount1}/>
            <Result titleBy={"Total"} amount={falseAmount2}/>
            <ResetButton/>
        </section>
    )
}

export default ResultBox
