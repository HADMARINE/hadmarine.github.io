import React from 'react';
import { useNavigate } from 'react-router-dom';

const Initial = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('blog');
    // navigate('',{
    // state
    // })
    // window.location.replace('/#/portfolio');
  }, []);
  return <></>;
};

export default Initial;
