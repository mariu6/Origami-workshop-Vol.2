import React from 'react';        // вече само тук се декларира импорт
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';      // заменям го с Navigation за да приложа раутс
import Navigation from './navigation.js';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
  document.getElementById('root')
);

