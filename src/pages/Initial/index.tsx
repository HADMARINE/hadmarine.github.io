import React from 'react';
import { useNavigate } from 'react-router-dom';

const Initial = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    // navigate('', {
    //   state,
    // });
    // window.location.replace('/#/portfolio');
    navigate('portfolio');
  }, []);
  return <></>;
};

export default Initial;
