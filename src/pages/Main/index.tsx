/* eslint-disable react/display-name */
import MainHeader from '@src/components/MainHeader';
import React from 'react';
import Portfolio from '@pages/Portfolio';
import { Flex } from '@src/components/assets/Wrapper';

const Main = () => {
  const GetCurrentPage = () => {
    const pages = {
      portfolio: Portfolio,
      blog: '',
      contact: '',
    };
    const res = (pages as any)[(location.hash as any).split('#')[1].slice(1)];
    // if (!res) throw new Error('No component registered on current route!');
    // eslint-disable-next-line react/display-name
    if (!res)
      return () => (
        <Flex width={'100vw'} height={'100vh'} center>
          Work In Progress
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