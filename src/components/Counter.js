import React, { Component } from 'react';

export default class Counter extends Component {

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return(
        <div>
        <p>已点击: {value} 次
      {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
        </p>
      </div>
    );
  }
}
