// start up point for client side app
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

ReactDOM.hydrate(<Home/>, document.querySelector('#root'));