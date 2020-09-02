import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');
const template = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
const message = () => {
  alert('Реакт-компонент отрендерен!');
}

ReactDOM.render(template, root, message);
