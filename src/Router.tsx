import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import PageNotFound from '@pages/PageNotFound';
import Main from './pages/Main';
import AdminLogin from './pages/Admin/Login';

const ClientRouter = (
  <>
    <Router basename={'/'}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </Router>
  </>
);

export default ClientRouter;
