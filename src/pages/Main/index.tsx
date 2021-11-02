import React, { Component } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import MainHeader from '@src/components/MainHeader';
import { Text } from '@src/components/assets/Text';
import { Margin } from '@src/components/assets/Format';
import { Flex } from '@src/components/assets/Wrapper';
import Img from '@src/components/assets/Img';
import h_logo_key from '../../assets/img/hadmarine_logo_key.png';

import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// @inject('ExStore')
@observer
export default class Main extends Component<Props> {
  render() {
    return (
      // <ParallaxProvider>
      <Wrapper>
        <MainHeader />
        <Parallax
          renderLayer={(percentage) => (
            <Margin vertical={`${20 * percentage}vh`} />
          )}
        />
        <Text
          fontFamily={'Urbanist'}
          style={{
            color: '#2d5473',
          }}>
          <Flex vertical>
            <Text
              fontFamily={'Urbanist'}
              fontSize={'90px'}
              fontWeight={900}
              style={{ letterSpacing: `7px` }}>
              hadmarine
            </Text>
            <Parallax
              renderLayer={(percentage) => (
                <Margin vertical={`${40 * percentage - 25}vh`} />
              )}
            />
            <Text
              fontFamily={'Urbanist'}
              fontSize={'32px'}
              fontWeight={900}
              style={{ marginTop: '-20px' }}>
              Full stack developer
            </Text>
            <Parallax
              renderLayer={(percentage) => (
                <>
                  <Margin
                    vertical={`${
                      100 * (percentage >= 1 ? 1 : percentage) - 60
                    }vh`}
                  />
                  <Img
                    src={h_logo_key}
                    width={'400px'}
                    style={{
                      opacity: 1 - 2.5 * (percentage - 0.7),
                    }}
                  />
                </>
              )}
            />
            <Parallax
              renderLayer={(percentage) => (
                <Margin
                  vertical={`${
                    -60 * (percentage - 0.1 >= 1 ? 1 : percentage - 0.1) + 30
                  }vh`}
                />
              )}
            />
            <Parallax
              renderLayer={(percentage) =>
                percentage < 1 ? (
                  <Flex
                    width={'100vw'}
                    height={`${
                      -60 * (percentage >= 1 ? 1 : percentage) + 60
                    }vh`}
                    style={{
                      backgroundColor: '#C7D5DD',
                    }}
                  />
                ) : undefined
              }
            />
            <Parallax
              renderLayer={(percentage) =>
                percentage < 1 ? (
                  <Flex
                    width={'100vw'}
                    height={`${
                      -60 * (percentage >= 1 ? 1 : percentage) + 60
                    }vh`}
                    style={{
                      backgroundColor: '#91aabb',
                    }}
                  />
                ) : undefined
              }
            />
            <Flex
              vertical
              width={'100vw'}
              style={{
                backgroundColor: '#2D5473',
                color: 'white',
              }}>
              <Margin vertical={'10vh'} />
              {/* <Parallax
                renderLayer={(percentage) => (
                  <Margin
                    vertical={`${
                      90 * (percentage - 0.2 >= 1 ? 1 : percentage - 0.2)
                    }vh`}
                  />
                )}
              /> */}
              <Parallax
                renderLayer={(percentage) => (
                  <Text
                    fontFamily={'Urbanist'}
                    fontWeight={900}
                    fontSize={'70px'}
                    letterSpacing={'1.5px'}
                    style={{
                      opacity: percentage,
                      marginTop: `${
                        (percentage > 0.5 ? 0.5 : percentage) * 70
                      }vh`,
                    }}>
                    Projects
                  </Text>
                )}
              />

              <Margin vertical={'200vh'} />
              <Flex vertical center width={'100vw'}>
                <Text fontFamily={'Urbanist'} textAlign={'center'}>
                  Copyright 2021 hadmarine
                  <br />
                  <span>
                    All design and interactions was developed by{' '}
                    <a href={'http://git.hadmarine.com'}>hadmarine</a>
                  </span>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Text>
      </Wrapper>
      // </ParallaxProvider>
    );
  }
}
