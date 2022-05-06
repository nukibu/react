import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import { Title } from './Title'
import { Booklist } from './Booklist'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Title />,
    <Booklist />
  </div>
);


// const Person = () => <h2>john doe</h2>
// const Message = () => {
//   return <p>Welcome to Nial. This is your entry point to a gamification of the important things of life.</p>
// }

// {} is for props
// this functional way works best if you only want to create one element
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world')
// }

// Functional way for multiple elements. messy
// const Greeting = () => {
//   return React.createElement('h1', {}, React.createElement('h1', {}, 'Hello World'))
// }

