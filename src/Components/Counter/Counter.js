import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component {
   state = {
        number: 0
    };

    addHandler = () => {
        this.setState ( {number: this.state.number+1});
    }
    removeHandler = () => {
        if (this.state.number > 0) {
        this.setState ( {number: this.state.number-1});
        }
    }
    resetHandler = () => {
        this.setState ({number: 0});
    }
    render () {
        return (
            <div className='counter'>
                <div className='circle'>
                    {this.state.number}
                </div>
                <div className='buttons'>
                    <button onClick={this.addHandler}>add one</button>
                    <button onClick={this.removeHandler}>remove one</button>
                    <button onClick={this.resetHandler}>reset</button>
                </div>
            </div>
        );
    }
}


export default Counter;