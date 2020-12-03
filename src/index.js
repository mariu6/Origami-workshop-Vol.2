import React from 'react';        // вече само тук се декларира импорт
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';      // заменям го с Navigation за да приложа Routes в navigation. А новият компонент App рапва навигацията, защото се грижи за юзер/гест менютата
import Navigation from './navigation.js';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App>
        <Navigation />
      </App>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

