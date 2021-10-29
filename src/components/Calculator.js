import React from 'react'; 
import './Calculator.css'; 
import SectionTitle from './SectionTitle'; 
import Input from './Input'; 
import PercentContainer from './PercentContainer'; 
import ResultBox from './ResultBox'; 


function Calculator() {
    return (
        <section className="Calculator">
            <div className="calculatorMainContent">
                <SectionTitle/>
                <Input/>
                <SectionTitle/>
                <PercentContainer/>
                <SectionTitle/>
                <Input/>
            </div>
            <ResultBox/>
        </section>
    )
}

export default Calculator
