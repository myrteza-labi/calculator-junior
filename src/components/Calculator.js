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
            bill: 0, 
            nOfPerson : 0, 
            percent : 5 , 
            tipAmount : 0, 
            total : 0, 
            error : " ", 
            active : 
            [
                " ",
                " ",
            ],
            percentActive : 
                [
                    {
                        five : " active ",
                        ten : " ",
                        fifteen : " ",
                        twentyfive : " ",
                        fifty : " ",
                        custom : " ",
                    }, 
                ]
        }
        this.initialState = this.state; 
        this.initialArrayActive = this.state.active; 
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputClick = this.handleInputClick.bind(this)
        this.handlePercentClick = this.handlePercentClick.bind(this)
        this.makeTheCalcul = this.makeTheCalcul.bind(this)
        this.handleResetClick = this.handleResetClick.bind(this)
        this.handleCustomChange = this.handleCustomChange.bind(this)
    }

    getInputName(e){
        let typeName = e.target.dataset.name
        return typeName
    }

    handleInputChange(e){
        let inputName = this.getInputName(e); 

        if(e.key == 48){
            console.log('zero cliqué')
        }

        if(inputName==="bill"){
            this.setState({
                bill : parseFloat(e.target.value),
            }, ()=> {
                this.makeTheCalcul();
            })
        }
        else {
            if(e.target.value == 0 || e.target.value.length == 0){
                this.setState({
                    error : " error ", 
                    tipAmount : 0, 
                    total: 0, 

                })
                console.log("Can't be 0")
            } 
            else {
                this.setState({
                    error : " ", 
                    nOfPerson : parseFloat(e.target.value),
                },()=> {
                    this.makeTheCalcul();
                })
            }
        }
    }


    

    makeTheCalcul(){
        let bill = this.state.bill; 
        let nOfPerson = this.state.nOfPerson; 
        let percent = this.state.percent; 
        let tipAmount = this.state.tipAmount; 
        let total = this.state.total; 

        tipAmount = (percent * bill / 100) / nOfPerson ; 

        if(tipAmount===Infinity){
            return 
        }
        else if(isNaN(tipAmount)){
            tipAmount = 0; 
            this.setState({
                tipAmount : tipAmount, 
            })
        }
        else if(tipAmount==0){
            return
        }
        else {
            this.setState({
                tipAmount : tipAmount.toFixed(2), 
            })
        }
        
        total = bill / nOfPerson + tipAmount  === Infinity ? " " : bill / nOfPerson + tipAmount; 

        if(total===Infinity){
            return 
        }
        else if(isNaN(total)){
            total = 0; 
            this.setState({
                total : total, 
            })
        }
        else if(tipAmount==0){
            return
        }
        else {
            this.setState({
                total : total.toFixed(2), 
            })
        }
    }



    handlePercentClick(e){
        const newArray = this.state.percentActive.slice(); 
        const defaultArray = [
            {
                five : " ",
                ten : " ",
                fifteen : " ",
                twentyfive : " ",
                fifty : " ",
                custom : " ",
            }, 
        ]
        
        newArray.forEach(item => {
            item  = " ok "; 
            console.log(item)
        })

        if (e.target.dataset.name == "five"){
            newArray[0] = defaultArray; 
            newArray[0].five = " active "
        }
        else if (e.target.dataset.name == "ten"){
            newArray[0] = defaultArray; 
            newArray[0].ten = " active "
        }
        else if (e.target.dataset.name == "fifteen"){
            newArray[0] = defaultArray; 
            newArray[0].fifteen = " active "
        }
        else if (e.target.dataset.name == "twentyfive"){
            newArray[0] = defaultArray; 
            newArray[0].twentyfive = " active "
        }
        
        else if (e.target.dataset.name == "fifty"){
            newArray[0] = defaultArray; 
            newArray[0].fifty = " active "
        }
        else if (e.target.dataset.name === "custom"){
            newArray[0] = defaultArray; 
            newArray[0].custom = " active "
        }
        else {
            return
        }
        
        this.setState({
            percentActive : newArray,
        })

        this.setState({
            percent : parseFloat(e.target.value), 
        }, ()=> {
            this.makeTheCalcul()
        })
    }

    handleResetClick(){
        this.setState(this.initialState)
        let inputBill = document.getElementById('inputBill')
        let inputPerson = document.getElementById('inputPerson')


        inputBill.value = ""; 
        inputPerson.value = ""; 
    }



    handleInputClick(e){ 
        let typeName = e.target.dataset.name
        let number = typeName=== "bill"? 0 : 1; 
        let initialArray = this.initialArrayActive; 
        let newArray = initialArray.slice(); 

        newArray[number] = "active "; 

        if(typeName==="person" && e.target.value == 0){
            console.log('person')
            this.setState({
                error : " error ", 
            })
        }

        this.setState({
            active : initialArray, 
        })
        this.setState({
            active : newArray, 
        })
    }


    handleCustomChange(e){
        let value = e.target.value; 
        console.log(value); 
        this.setState({
            percent : value, 
        }, ()=> {
            this.makeTheCalcul()
        })

        
    }

 
    render(){
        return (
            <section className="Calculator">
    
                <div className="calculatorMainContent">
    
                    <div className="titleAndInput titleAndInputFirst ">
                        <SectionTitle title={"Bill"}/>
                        <Input id={"inputBill"} onClick={this.handleInputClick} onChange={this.handleInputChange} data-name={"bill"} active={this.state.active[0]} src={dollarIcon} alt={"icon dollars"}/>
                    </div>
                    
                    
    
                    <div className="titleAndInput">
                    <SectionTitle title={"Select tip %"}/>
                    <PercentContainer onCustomChange={this.handleCustomChange} percentActive={this.state.percentActive} onPercentClick={this.handlePercentClick}/>
                    </div>
                    
                    <div className="titleAndInput">
                        <div className="ErrorTextCtn">
                            <SectionTitle title={"Number of People"}/>
                            <TextError error={this.state.error}/>
                        </div>
                        <Input id={"inputPerson"} onClick={this.handleInputClick} onChange={this.handleInputChange} data-name={"person"} src={personIcon} active={this.state.active[1]} error={this.state.error} alt={"icon d'une personne"}/>
                    </div>
                    
                </div>
                
                <ResultBox onResetClick={this.handleResetClick} tipAmount={this.state.tipAmount} total={this.state.total}/>
            </section>
        )
    }
    
}

export default Calculator


