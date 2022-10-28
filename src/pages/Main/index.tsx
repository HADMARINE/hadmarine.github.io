/* eslint-disable react/display-name */
import React from 'react';
import MainHeader from '@src/components/MainHeader';
import Portfolio from '@pages/Portfolio';
import { Flex } from '@src/components/assets/Wrapper';
import Blog from '@pages/Blog';

const Main = () => {
  const GetCurrentPage = () => {
    const pages = {
      portfolio: Portfolio,
      blog: '', // Blog,
      contact: '',
    };
    const res = (pages as any)[(location.hash as any).split('#')[1].slice(1)];
    // if (!res) throw new Error('No component registered on current route!');
    // eslint-disable-next-line react/display-name
    if (!res)
      return () => (
        <Flex width={'100vw'} height={'100vh'} center>
          {typeof res === 'string' ? 'UNDER CONSTRUCTION' : 'PAGE NOT FOUND'}
        </Flex>
      );
    return res;
  };
  return (
    <>
      <MainHeader />
      {GetCurrentPage()()}
    </>
  );
};

export default Main;
