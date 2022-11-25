import React from 'react';
import './styles/index.scss';

import Router from './Router';

import ReactModal from 'react-modal';

const App: React.FC = () => {
  return <>{Router}</>;
};

ReactModal.setAppElement('#root');

export default App;
