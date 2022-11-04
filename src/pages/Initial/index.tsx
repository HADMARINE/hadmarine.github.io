import React from 'react';
import { useNavigate } from 'react-router-dom';

const Initial = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('main');
  }, []);
  return <></>;
};

export default Initial;
