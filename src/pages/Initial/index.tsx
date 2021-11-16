import React from 'react';
import { useNavigate } from 'react-router';

const Initial = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    // navigate('/portfolio');
    // window.location.replace('/#/portfolio');
  }, []);
  return <></>;
};

export default Initial;
