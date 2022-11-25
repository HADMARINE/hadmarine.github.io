/* eslint-disable react/display-name */
import React from 'react';
import MainHeader from '@src/components/MainHeader';
import { Flex } from '@src/components/assets/Wrapper';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router';
import BlogDetails from './Blog/details';

const Main = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route index element={<Navigate to="/main/portfolio" />} />
        <Route
          path="*"
          element={
            <Flex center fit>
              PAGE NOT FOUND
            </Flex>
          }
        />
      </Routes>
    </>
  );
};

export default Main;
