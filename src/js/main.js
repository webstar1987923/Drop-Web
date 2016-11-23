import '../styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';


import { Router, browserHistory } from 'react-router';

import routes from './routes';

const rootElement = document.getElementById('app');

let ComponentEl= (
    <div>
      <Router history={browserHistory} routes={routes} />
    </div>
  );

// Render the React application to the DOM
ReactDOM.render(
  <div>
    {ComponentEl}
  </div>,
  rootElement
);

