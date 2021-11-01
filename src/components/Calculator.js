import React from 'react'; 
import './Calculator.css'; 
import SectionTitle from './SectionTitle'; 
import Input from './Input'; 
import PercentContainer from './PercentContainer'; 
import ResultBox from './ResultBox'; 
import personIcon from '../images/icon-person.svg'; 
import dollarIcon from '../images/icon-dollar.svg'
import TextError from './TextError'; 


function Calculator(props) {
    return (
        <section className="Calculator">

            <div className="calculatorMainContent">

                <div className="titleAndInput titleAndInputFirst ">
                    <SectionTitle title={"Bill"}/>
                    <Input active={"active "} src={dollarIcon} alt={"icon dollars"}/>
                </div>
                
                

                <div className="titleAndInput">
                <SectionTitle title={"Select tip %"}/>
                <PercentContainer/>
                </div>
                
                <div className="titleAndInput">
                    <div className="ErrorTextCtn">
                        <SectionTitle title={"Number of People"}/>
                        <TextError error={"error"}/>
                    </div>
                    <Input src={personIcon} active={" "} error={"error "} alt={"icon d'une personne"}/>
                </div>
                
            </div>
            
            <ResultBox/>
        </section>
    )
}

export default Calculator
