import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component {
    color = "";
    state = {
        number: 0,
        background: 'grey'
    };

    backgroundHandler = (counter) => {
        
        console.log(this.state.number);
        if (counter === 0) {
            console.log("number 0: "+ this.state.number);
            console.log("background: "+ this.state.background);
            this.color = "grey";
        } else if (counter%10 === 0) {
            console.log("number 10x: "+ this.state.number);
            this.color = "goldenrod";
        } else if (counter%2 === 0) {
            console.log("number 2x: "+ this.state.number);
            this.color = "darkred";
        } else {
            console.log("number not 2x: "+ this.state.number);
            this.color = "blue";
        }
        return this.color;
    }

    addHandler = () => {
        console.log(this.state);
        this.setState ( {number: this.state.number+1, background: this.backgroundHandler(this.state.number+1)} );
        
    }

    removeHandler = () => {
        console.log("color: " + this.state.background);
        console.log(this.state);
        if (this.state.number > 0) {
            this.setState({number: this.state.number-1, background: this.backgroundHandler(this.state.number-1)});
        
    }
}

    resetHandler = () => {
        this.setState ({number: 0, background: 'grey'});
    }

    render () {
        
        return (
            <div className='counter'>
                <div className='circle'style={{backgroundColor: this.state.background}}>
                    {this.state.number}
                </div>
                <div className='buttons'>
                    <button onClick={this.addHandler}>Add one</button>
                    <button onClick={this.removeHandler}>Remove one</button>
                    <button onClick={this.resetHandler}>Reset</button>
                </div>
            </div>
        );
    }
}


export default Counter;