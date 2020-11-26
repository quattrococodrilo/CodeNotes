// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

// Reducers
import reducer from './reducers';

// Containers
import App from './routes/App';

// Styles
import './assets/styles/App.scss';

const initialState = {
  'userName': 'usuario',
  'email': null,
  'password': null,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
