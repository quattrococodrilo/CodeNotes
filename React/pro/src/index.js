// React
import React from 'react'
import ReactDOM from 'react-dom'

// Libraries
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Containers
import App from './containers/App'

/* Render receive two parameters,
one is the component an another is the location
where to push the component. */
ReactDOM.render(
  <App />,
  document.getElementById('app')
)
