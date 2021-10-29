import React from 'react'; 
import './Result.css'; 

function Result(props) {
    return (
        <div className="Result">
            <div className="amountBy">
                <p className="titleBy">
                    {props.titleBy}
                </p>
                <p className="byPerson">/ person</p>
            </div>
            <p className="amount">
                {props.amount}
            </p>
        </div>
    )
}

export default Result
