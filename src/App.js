import React, { Component } from 'react';
import Counter from './components/Counter.js';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <div className="App">
        <Counter
      value = {store.getState()}
      onIncrement = {()=> store.dispatch({type: 'INCREMENT'})}

      onDecrement = {() =>  store.dispatch({type: 'DECREMENT'})}
        />
      </div>
    );
  }
}



export default App;
