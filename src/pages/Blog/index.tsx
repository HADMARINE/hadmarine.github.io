import { BlogPostInterface, GetBlogPostAll } from '@src/api/blogPost';
import { ColorGen } from '@src/components/assets/Color';
import { Text, Title } from '@src/components/assets/Text';
import { Flex } from '@src/components/assets/Wrapper';
import MainHeader from '@src/components/MainHeader';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const Blog = () => {
  const [blogPostData, setBlogPostData] = useState<BlogPostInterface[]>([]);

  useEffect(() => {
    const res = async () => {
      setBlogPostData(await GetBlogPostAll());
    };
    res();
  }, []);

  return (
    <Wrapper>
      <MainHeader />
      <Text fontSize={'60px'}>
        <ColorGen color={'#2d5473'}>Blog</ColorGen>
      </Text>
      {blogPostData}
    </Wrapper>
  );
};

export default Blog;
