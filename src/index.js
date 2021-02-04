import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement('a',{ href:'https://www.platzi.com', target:"_blank"},"Ir a platzi");

const name = 'Irene';
// const element = React.createElement('h1',{},`Hola soy ${name}`);
// const element = <h1> Hola soy { name } !!</h1>

const jsx = (
    <div>
        <h1>Hola, soy { name }</h1>
        <p>Soy ingeniero frontend</p>
    </div>
)
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);
