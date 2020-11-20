// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Reducers
import reducer from './reducers';

// Containers
import App from './routes/App';

// Styles
import './assets/styles/App.scss';

const initialState = {
  'user': 'usuario',
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
