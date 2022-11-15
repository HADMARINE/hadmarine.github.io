import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from '@src/reportWebVitals';

import withProvider from '@util/withProvider';

export const RootComponent = (
  <React.StrictMode>{withProvider(<App />)}</React.StrictMode>
);

function Root(): void {
  ReactDOM.render(RootComponent, document.getElementById('root'));

  reportWebVitals();
}

export default Root();
