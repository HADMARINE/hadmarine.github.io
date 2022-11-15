import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import PageNotFound from '@pages/PageNotFound';
import Initial from '@pages/Initial';
import AdminPage from '@pages/Admin';
import Main from '@pages/Main';
import { Routes } from 'react-router';

const ClientRouter = (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/main/*" element={<Main />} />
        <Route path="/admin/*" element={<AdminPage />} />
        {/* <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/manager/home" element={<AdminPost />} />
        <Route path="/admin/manager/portfolio" element={<PortfolioManager />} />
        <Route path="/admin/manager/blogpost" element={<BlogPostManager />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </>
);

export default ClientRouter;
