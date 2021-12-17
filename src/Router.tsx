import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import PageNotFound from '@pages/PageNotFound';
import Initial from '@pages/Initial';
import Portfolio from './pages/Portfolio';
import AdminLogin from './pages/Admin/Login';
import AdminPost from './pages/Admin/Manager';
import PortfolioManager from './pages/Admin/Manager/Portfolio';
import BlogPostManager from './pages/Admin/Manager/BlogPost';
import Blog from '@pages/Blog';
import Main from '@pages/Main';

const ClientRouter = (
  <>
    <Router basename={'/'}>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/portfolio" element={<Main />} />
        <Route path="/contact" element={<Main />} />
        <Route path="/blog" element={<Main />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/manager/home" element={<AdminPost />} />
        <Route path="/admin/manager/portfolio" element={<PortfolioManager />} />
        <Route path="/admin/manager/blogpost" element={<BlogPostManager />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </>
);

export default ClientRouter;