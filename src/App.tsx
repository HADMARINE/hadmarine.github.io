import React from 'react';
import './styles/index.scss';

import Router from './Router';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <>
      <Toaster
        position={'top-right'}
        containerStyle={{ borderRadius: '10px' }}
      />
      {Router}
    </>
  );
};

export default App;
