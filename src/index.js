import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import App from './containers/exampleContainer.jsx';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));