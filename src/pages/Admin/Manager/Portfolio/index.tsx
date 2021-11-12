import React from 'react';
import styled from 'styled-components';
// import AdminPage from '@components/dataProcessor/AdminTable';
// import { __DataTypes } from '@components/dataProcessor';
import {
  DeletePortfolio,
  GetPortfolio,
  PatchPortfolio,
  PostPortfolio,
} from '@api/portfolio';
import { AdminTable, DataTypes } from 'quick-react-admin';

const Wrapper = styled.div`
  /* margin: 50px; */
  margin-top: 50px;
`;

const PortfolioManager = () => {
  return (
    <Wrapper>
      <AdminTable
        title={'Portfolio'}
        contents={{
          title: DataTypes.string({ title: 'Title' }),
          subtitle: DataTypes.string({ title: 'Subtitle' }),
          thumbnail: DataTypes.string({ title: 'Thumbnail' }),
          content: DataTypes.markdown({ title: 'Content' }),
          link: DataTypes.string({ title: 'Link' }),
          date: DataTypes.date({ title: 'Date' }),
        }}
        getApi={GetPortfolio}
        patchApi={PatchPortfolio}
        deleteApi={DeletePortfolio}
        postApi={PostPortfolio}
      />
    </Wrapper>
  );
};

export default PortfolioManager;
