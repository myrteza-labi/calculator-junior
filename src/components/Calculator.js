import React from 'react'; 
import './Calculator.css'; 
import SectionTitle from './SectionTitle'; 
import Input from './Input'; 
import PercentContainer from './PercentContainer'; 
import ResultBox from './ResultBox'; 
import personIcon from '../images/icon-person.svg'; 
import dollarIcon from '../images/icon-dollar.svg'


function Calculator(props) {
    return (
        <section className="Calculator">
            <div className="calculatorMainContent">
                <SectionTitle title={"Bill"}/>
                <Input src={dollarIcon} alt={"icon dollars"}/>
                <SectionTitle title={"Select tip %"}/>
                <PercentContainer/>
                <SectionTitle title={"Number of People"}/>
                <Input src={personIcon} alt={"icon d'une personne"}/>
            </div>
            <ResultBox/>
        </section>
    )
}

export default Calculator
