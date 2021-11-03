import React from 'react'; 
import './Calculator.css'; 
import SectionTitle from './SectionTitle'; 
import Input from './Input'; 
import PercentContainer from './PercentContainer'; 
import ResultBox from './ResultBox'; 
import personIcon from '../images/icon-person.svg'; 
import dollarIcon from '../images/icon-dollar.svg'
import TextError from './TextError'; 


class Calculator extends  React.Component {
    constructor(props){
        super(props); 
        this.state= {
            bill: " ", 
            nOfPerson : " ", 
            percent : 5 , 
            tipAmount : " ", 
            total : " ", 
            error : " ", 
            percentActive : 
                [
                    {
                        five : " active ",
                        ten : " ",
                        fifteen : " ",
                        twentyfive : " ",
                        fifty : " ",
                        custome : " ",
                    }, 
                ]
        }
        this.getBillValue = this.getBillValue.bind(this); 
        this.handleInputChange = this.handleInputChange.bind(this)


        this.handleInputClick = this.handleInputClick.bind(this)

        this.handlePercentClick = this.handlePercentClick.bind(this)

        this.makeTheCalcul = this.makeTheCalcul.bind(this)


        



    }

    getInputName(e){
        let typeName = e.target.dataset.name
        return typeName
    }

    getBillValue(e){
        /*
        let name = e.getAttribute("name"); 
        alert(name)
        */
    }

    handleInputChange(e){
        let inputName = this.getInputName(e)
        if(inputName==="bill"){
            this.setState({
                bill : e.target.value
            })
        }
        else {
            this.setState({
                nOfPerson : e.target.value
            })
        }
    }

    handleInputClick(e){ 
        console.log(this.state.percentActive[0].five)
        this.makeTheCalcul(); 
    }



    handlePercentClick(e){
        const five = 5; 
        const ten = 10; 
        const fifteen = 15; 
        const twentyfive = 25; 
        const fifty = 50; 
        const newArray = this.state.percentActive.slice(); 
        const defaultArray = [
            {
                five : "  ",
                ten : " ",
                fifteen : " ",
                twentyfive : " ",
                fifty : " ",
                custome : " ",
            }, 
        ]
        
        newArray.forEach(item => {
            item  = " ok "; 
            console.log(item)
        })
        

        if (e.target.value == five){
            newArray[0] = defaultArray; 
            newArray[0].five = " active "
        }
        else if (e.target.value == ten){
            newArray[0] = defaultArray; 
            newArray[0].ten = " active "
        }
        else if (e.target.value == fifteen){
            newArray[0] = defaultArray; 
            newArray[0].fifteen = " active "
        }
        else if (e.target.value == twentyfive){
            newArray[0] = defaultArray; 
            newArray[0].twentyfive = " active "
        }
        else if (e.target.value == fifty){
            newArray[0] = defaultArray; 
            newArray[0].fifty = " active "
        }
        this.setState({
            percentActive : newArray,
        })

        this.setState({
            percent : e.target.value, 
        },()=> {console.log(this.state.percent)})
    }

    makeTheCalcul(){
        let bill = this.state.bill; 
        let nOfPerson = this.state.nOfPerson; 
        let percent = this.state.percent; 
        let tipAmount = ""; 
        let total = ""; 

        tipAmount = (percent * bill / 100) / nOfPerson ; 

        this.setState({
            tipAmount : tipAmount.toString(), 
        })
        
        total = bill / nOfPerson + tipAmount  === Infinity ? " " : bill / nOfPerson + tipAmount ; 

        this.setState({
            total : total.toString(), 
        })

    }

 
    render(){
        return (
            <section className="Calculator">
    
                <div className="calculatorMainContent">
    
                    <div className="titleAndInput titleAndInputFirst ">
                        <SectionTitle title={"Bill"}/>
                        <Input onClick={this.handleInputClick} onChange={this.handleInputChange} data-name={"bill"} active={"active "} src={dollarIcon} alt={"icon dollars"}/>
                    </div>
                    
                    
    
                    <div className="titleAndInput">
                    <SectionTitle title={"Select tip %"}/>
                    <PercentContainer percentActive={this.state.percentActive} onPercentClick={this.handlePercentClick}/>
                    </div>
                    
                    <div className="titleAndInput">
                        <div className="ErrorTextCtn">
                            <SectionTitle title={"Number of People"}/>
                            <TextError error={"error"}/>
                        </div>
                        <Input onClick={this.handleInputClick} onChange={this.handleInputChange} data-name={"person"} src={personIcon} active={" "} error={"error "} alt={"icon d'une personne"}/>
                    </div>
                    
                </div>
                
                <ResultBox onResetClick={this.handle} tipAmount={this.state.tipAmount} total={this.state.total}/>
            </section>
        )
    }
    
}

export default Calculator


