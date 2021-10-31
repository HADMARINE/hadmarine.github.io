import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

const useParallaxProvider = (component: JSX.Element) => {
  return <ParallaxProvider>{component}</ParallaxProvider>;
};

export default useParallaxProvider;
