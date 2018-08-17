import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { createStore } from 'redux';

const initialState = {
  name: 'Eric'
}

const reducer = (state = initialState, action) => {
  console.log('reducer running', action);
  return state;
}

ReactDom.render(<App/>,document.getElementById('root'))