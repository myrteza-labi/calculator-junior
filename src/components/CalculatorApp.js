import React from 'react'
import './Calculator.css'; 
import TitleApp from './TitleApp';
import Calculator from './Calculator'; 

function CalculatorApp() {
    return (
        <div className="CalculatorApp">
            <TitleApp/>
            <Calculator/>
        </div>
    )
}

export default CalculatorApp
