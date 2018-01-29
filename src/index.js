// Import the module React to deal with Components
import React, {Component} from 'react';
// Import the module ReactDOM to Render Components to the DOM
import ReactDOM from 'react-dom';

// Import Provider Prop from React-Redux
import { Provider } from 'react-redux';
// Store and Middleware needed
import { createStore, applyMiddleware } from 'redux';

// Import the App Component
import App from './components/app';
// Import the Reducers
import reducers from './reducers';


// Create Store with the Middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);

// Render the Provider with the Store prop
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.bookApp'));