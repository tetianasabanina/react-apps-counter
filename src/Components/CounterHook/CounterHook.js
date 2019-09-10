import React, { useState } from 'react';
import './CounterHook.css';

const CounterHook = () => {

    const [counter, setCounter] = useState(1000);

    const addHandler = () => {
        setCounter(counter + 1);
    };

    const removeHandler = () => {
        counter <= 0 ? setCounter(0) : setCounter(counter - 1);
    };

    const resetHandler = () => {
        setCounter(0);
    };

    let test = 
        counter === 0
        ? "circleHook neutral"
        : counter % 10 === 0 
        ? "circleHook dozen"
        : counter % 2 === 0
        ? "circleHook even"
        : "circleHook odd";

    return (
        <div className="counterHook">
            <div className = {test}>
                <p>{counter}</p>
            </div>
                <div className = "buttonsHook">
                    <button onClick={addHandler}>Add one</button>
                    <button onClick={removeHandler}>Remove one</button>
                    <button onClick={resetHandler}>Reset one</button>
                </div>
            
        </div>
    )
}


export default CounterHook;