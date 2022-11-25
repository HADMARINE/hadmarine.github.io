import { BlogpostInterface, GetBlogPost } from '@src/api/blogpost';
import Button from '@src/components/assets/Button';
import { ColorGen } from '@src/components/assets/Color';
import { Margin } from '@src/components/assets/Format';
import Img from '@src/components/assets/Img';
import { Text, Title } from '@src/components/assets/Text';
import { Flex } from '@src/components/assets/Wrapper';
import {
  getMarkdownBrief,
  getThumbnailImageFromMarkdown,
} from '@src/util/Assets';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import styled from 'styled-components';
import './index.scss';
import { Chip } from '@mui/material';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Blog = () => {
  const { isLoading, error, data } = useQuery('blogListData', () =>
    GetBlogPost({
      pagination: { limit: 0, offset: 0 },
      sort: { field: 'createdDate', order: 'DESC' },
    }).then((res) => {
      if (!res.result) throw new Error(res.message);
      return res.data;
    }),
  );

  if (isLoading) {
    return (
      <Flex vertical fit center>
        <Flex horizontal width={'80%'}>
          <Margin horizontal="5vw" />
          <Text fontSize={'60px'}>
            <ColorGen color={'#2d5473'}>Blog</ColorGen>
          </Text>
        </Flex>

        <Margin vertical="5vw" />

        <Flex vertical left style={{ maxWidth: '768px', width: '95%' }}>
          <Flex style={{ width: '100%', height: '240px' }}>
            <Skeleton variant="rounded" width={'100%'} height={'100%'} />
          </Flex>
          <Skeleton variant="text" width="100%" sx={{ fontSize: '5rem' }} />
          <Skeleton variant="text" width="80%" sx={{ fontSize: '3rem' }} />
          <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width="30%" sx={{ fontSize: '1rem' }} />
        </Flex>
      </Flex>
    );
  }

  return (
    <Wrapper>
      <Flex center width="100%">
        <Flex
          vertical
          left
          style={{
            marginLeft: '10px',
            marginRight: '10px',
            width: '100%',
            maxWidth: '768px',
          }}>
          <Margin vertical="20vh" />

          <Text fontSize={'60px'}>
            <ColorGen color={'#2d5473'}>Blog</ColorGen>
          </Text>

          <Flex vertical center fitParent>
            {data &&
              data.map((v, i) => {
                const thumbnailList = getThumbnailImageFromMarkdown(v.content);
                const thumbnail =
                  thumbnailList.length !== 0 ? thumbnailList[0] : undefined;
                return (
                  <Flex
                    key={`blog_post_data_map_${i}`}
                    vertical
                    className="blog_post_wrapper">
                    <Link to={v._id} style={{ width: '100%', height: '100%' }}>
                      {/* TODO : Don't do like this, attach at every img,texts */}
                      <Flex vertical>
                        {thumbnail && (
                          <Img
                            src={thumbnail}
                            style={{
                              width: '100%',
                              borderRadius: '5px 5px 0 0',
                              maxHeight: '360px',
                              objectFit: 'cover',
                            }}
                          />
                        )}
                        <Flex
                          center
                          style={{
                            width: '100%',
                          }}>
                          <Flex
                            vertical
                            left
                            fitParent
                            style={{
                              color: 'rgb(45, 84, 115)',
                              margin: '10px',
                              wordBreak: 'break-word',
                            }}>
                            <Flex width="100%">
                              <Flex vertical flex={5} left>
                                <Text fontWeight={900} fontSize={'32px'}>
                                  {v.title}
                                </Text>
                                <Text
                                  fontWeight={500}
                                  fontSize={'18px'}
                                  style={{ marginTop: '-10px' }}>
                                  {v.subtitle}
                                </Text>
                              </Flex>
                              <Flex
                                flex={1}
                                fitParent
                                right
                                selfStart
                                vertical
                                style={{
                                  marginTop: '6px',
                                  marginRight: '10px',
                                }}>
                                <Text>
                                  {v.modifiedDate ? (
                                    <>{v.modifiedDate.toLocaleDateString()}</>
                                  ) : (
                                    <>{v.createdDate.toLocaleDateString()}</>
                                  )}
                                </Text>
                              </Flex>
                            </Flex>
                            <Flex style={{ marginTop: '1.5rem' }}>
                              {v.tags &&
                                v.tags.map((d, ii) => (
                                  <Chip
                                    key={`blog_tags_chip_${v._id}_${ii}`}
                                    label={d}
                                    style={{
                                      marginRight: '6px',
                                      color: 'white',
                                      backgroundColor: '#2d5473',
                                      fontWeight: 300,
                                      fontSize: '16px',
                                    }}
                                  />
                                ))}
                            </Flex>
                            {/* <Margin vertical="0.2rem" />
                            {getMarkdownBrief(v.content)}
                            <Margin vertical="1rem" /> */}
                          </Flex>
                        </Flex>
                      </Flex>
                    </Link>
                  </Flex>
                );
              })}
            <Margin vertical="10vh" />
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Blog;
