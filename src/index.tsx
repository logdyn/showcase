import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Index from './components/Index'

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(<Index />, container);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}