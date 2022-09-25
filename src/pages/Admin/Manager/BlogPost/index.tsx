import { AdminTable, DataTypes } from 'quick-react-admin';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const BlogPostManager = () => {
  return (
    <Wrapper>
      <AdminTable
        title={'BlogPost'}
        contents={{
          title: DataTypes.string({ title: 'Title' }),
          subtitle: DataTypes.string({ title: 'Subtitle' }),
        }}
      />
    </Wrapper>
  );
};

export default BlogPostManager;
