import React, { useEffect, useState } from 'react';
import { Flex } from '@src/components/assets/Wrapper';
import { useParams } from 'react-router';
import { GetBlogpostById } from '@src/api/blogpost';
import { useQuery } from 'react-query';
import { Skeleton } from '@mui/material';
import { Text } from '@src/components/assets/Text';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import './markdown.scss';
import { Margin } from '@src/components/assets/Format';

const BlogDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(`blogDetailsData_${id}`, () =>
    GetBlogpostById(id || '').then((res) => {
      if (!res.result) {
        throw new Error(res.message);
      }
      return res.data;
    }),
  );

  if (isLoading)
    return (
      <Flex fit center>
        <Flex vertical left style={{ maxWidth: '768px', width: '100%' }}>
          <Skeleton variant="text" width="100%" sx={{ fontSize: '5rem' }} />
          <Skeleton variant="text" width="80%" sx={{ fontSize: '3rem' }} />
          <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
          <Flex style={{ width: '100%', height: '240px' }}>
            <Skeleton variant="rounded" width={'100%'} height={'100%'} />
          </Flex>
          <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
        </Flex>
      </Flex>
    );

  if (error || !data) return <>Error : {error}</>;

  return (
    <Flex width="100%" center>
      <Flex
        center
        up
        vertical
        style={{
          minHeight: '100vh',
          width: '100%',
          maxWidth: '768px',
          color: '#2d5473',
        }}>
        <Margin vertical="120px" />
        <Flex width="100%">
          <Flex vertical flex={5} left>
            <Text fontWeight={900} fontSize={'32px'}>
              {data.title}
            </Text>
            <Text fontWeight={500} fontSize={'18px'}>
              {data.subtitle}
            </Text>
          </Flex>
          <Flex
            flex={1}
            fitParent
            right
            selfStart
            vertical
            style={{
              marginTop: '4px',
              marginRight: '10px',
            }}>
            <Text>
              {data.modifiedDate ? (
                <>{data.modifiedDate.toLocaleDateString()}</>
              ) : (
                <>{data.createdDate.toLocaleDateString()}</>
              )}
            </Text>
          </Flex>
        </Flex>
        <Flex fitParent vertical left>
          <ReactMarkdown
            className="markdown_stylesheet"
            remarkPlugins={[remarkGfm]}>
            {data.content}
          </ReactMarkdown>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BlogDetails;
