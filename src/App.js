import React from 'react';
import Counter from './Components/Counter/Counter';
import CounterHook from './Components/CounterHook/CounterHook';
import Title from './Components/Title/Title';
import './App.css';

const App = () => {
   
    return (

      <div>
        {/*<Counter />*/}
        <Title />
        <CounterHook />
      </div>
    )
  }

export default App;
