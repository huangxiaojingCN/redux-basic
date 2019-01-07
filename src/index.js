import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import counter from './reducers/index.js';

const store = createStore(counter);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
    <App store={store}/>,
  rootEl
)

render();
store.subscribe(render);
store.subscribe(()=>{
  console.log("state: " + store.getState());
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
