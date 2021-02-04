import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge firstName="Irene" lastName="Garcia" jobTitle="Web developer" twitter="Esmerio55" avatar="http://www.gravatar.com/avatar?identicon" />, container);
