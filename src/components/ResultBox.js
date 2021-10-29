import React from 'react'
import './Calculator.css'; 
import Result from './Result'; 
import ResetButton from './ResetButton'; 

function ResultBox() {
    return (
        <section className="ResultBox">
            <Result/>
            <Result/>
            <ResetButton/>
        </section>
    )
}

export default ResultBox
