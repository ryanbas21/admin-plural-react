import { Router, browserHistory } from 'react-router'
import 'babel-polyfill'
import React from 'react'
import routes from './routes'
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/boostrap.min.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
