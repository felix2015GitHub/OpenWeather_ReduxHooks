import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HooksSample from './HooksSample.js';
import { reducer } from './Reducer.js';
// import Header from './layout/Header.jsx';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <HooksSample />
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));