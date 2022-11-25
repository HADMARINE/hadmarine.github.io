import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import reportWebVitals from '@src/reportWebVitals';

import withProvider from '@util/withProvider';

export const RootComponent = (
  <React.StrictMode>{withProvider(<App />)}</React.StrictMode>
);

function Root(): void {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(document.getElementById('root')!);

  root.render(RootComponent);

  reportWebVitals();
}

export default Root();
