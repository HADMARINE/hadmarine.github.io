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
    </Admin>
  );
};

export default AdminPage;
