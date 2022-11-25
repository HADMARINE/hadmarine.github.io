import React from 'react';
import { Admin, CustomRoutes, ListGuesser, Resource } from 'react-admin';
import { dataProvider } from './providers/dataProvider';
import { authProvider } from './providers/authProvider';
import {
  PortfolioList,
  PortfolioCreate,
  PortfolioEdit,
  PortfolioShow,
} from './resources/portfolios';
import {
  BlogpostCreate,
  BlogpostEdit,
  BlogpostList,
  BlogpostShow,
} from './resources/blogpost';

const AdminPage = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      basename="/admin">
      <Resource
        name="portfolios"
        list={PortfolioList}
        create={PortfolioCreate}
        edit={PortfolioEdit}
        show={PortfolioShow}
      />
      <Resource
        name="blogposts"
        list={BlogpostList}
        create={BlogpostCreate}
        edit={BlogpostEdit}
        show={BlogpostShow}
      />
    </Admin>
  );
};

export default AdminPage;
