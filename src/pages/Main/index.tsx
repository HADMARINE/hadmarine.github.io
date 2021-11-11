import React from 'react';
import styled from 'styled-components';
import MainHeader from '@src/components/MainHeader';
import { Text } from '@src/components/assets/Text';
import { Margin } from '@src/components/assets/Format';
import { Flex, FlexSpacer } from '@src/components/assets/Wrapper';
import Img from '@src/components/assets/Img';
import hLogoKey from '../../assets/img/hadmarine_logo_key.png';
import { Parallax } from 'react-parallax';
import Timeline from './Timeline';
import TimelineYearIndicator from './TimelineYearIndicator';
import TimelineTitle from './TimelineTitle';
import TimelineImage from './TimelineImage';
import TimelineContent from './TimelineContent';
import { Link } from 'react-router-dom';
import { GetPortfolioAll, PortfolioInterface } from '@src/api/portfolio';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Wrapper = styled.div`
  display: flex;
  /* width: 90vw; */
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  flex-direction: column;
`;

const GlobalSubtitle = styled.div<{
  subtitleValue: [string, string, string] | null;
  animationState: boolean;
}>`
  font-size: 32px;
  font-weight: 700;
  position: fixed;
  top: 50px;
  left: 0;
  color: ${(props) => props?.subtitleValue?.[1] || 'd'};
  background-color: ${(props) => props?.subtitleValue?.[2]};
  padding-top: 30px;
  padding-left: 30px;
  /* padding-right: 60px; */
  /* padding-bottom: 0px; */
  border-radius: 0 0 40px 0;
  box-shadow: 0 0 30px 40px ${(props) => props?.subtitleValue?.[2]};
  z-index: 100;
  width: 100%;

  animation: ${(props) => (props.animationState ? 'appear' : 'disappear')}
    ${(props) => (props.animationState ? '0.5s' : '0.1s')} ease-in-out;
  opacity: ${(props) => (props.animationState ? 1 : 0)};

  @keyframes disappear {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const Main = (props: Props) => {
  const [subtitle, setSubtitle] = React.useState<
    [string, string, string] | null
  >(null);
  const [subtitleAnimationState, setSubtitleAnimationState] =
    React.useState(false);
  // const [timelineAnimationState, setTimelineAnimationState] =
  //   React.useState(false);
  const [portfolioData, setPortfolioData] = React.useState<
    PortfolioInterface[]
  >([]);

  React.useEffect(() => {
    const res = async () => {
      setPortfolioData(await GetPortfolioAll());
    };
    res();
  }, []);

  return (
    <Wrapper>
      <MainHeader />

      {/* {subtitle && (
        <GlobalSubtitle
          subtitleValue={subtitle}
          animationState={subtitleAnimationState}>
          {subtitle[0]}
        </GlobalSubtitle>
      )} */}
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
            fontWeight={500}
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
            fontWeight={500}
            style={{ marginTop: '-20px' }}>
            Beyond present.
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
                  src={hLogoKey}
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
                  -60 * (percentage - 0.1 >= 1 ? 1 : percentage - 0.1) + 50
                }vh`}
              />
            )}
          />
          <Parallax
            renderLayer={(percentage) =>
              percentage < 1 ? (
                <Flex
                  width={'100vw'}
                  height={`${-60 * (percentage >= 1 ? 1 : percentage) + 60}vh`}
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
                  height={`${-60 * (percentage >= 1 ? 1 : percentage) + 60}vh`}
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
            <Parallax
              renderLayer={(percentage) => (
                <Margin vertical={`${70 * percentage}vh`} />
              )}
            />
            <Parallax
              renderLayer={(percentage) => {
                // console.log(percentage);
                if (!subtitleAnimationState && percentage > 1.2) {
                  setSubtitle(['Projects', 'white', '#2d5473']);
                  setSubtitleAnimationState(true);
                } else if (subtitleAnimationState && percentage < 1.2) {
                  setSubtitleAnimationState(false);
                }

                // if (!timelineAnimationState && percentage > 1.3) {
                //   setTimelineAnimationState(true);
                // } else if (timelineAnimationState && percentage < 1.3) {
                //   setTimelineAnimationState(false);
                // }
                return (
                  <Text
                    fontFamily={'Urbanist'}
                    fontWeight={100}
                    fontSize={'70px'}
                    letterSpacing={'1.5px'}
                    style={{
                      opacity: percentage,
                      marginTop: `${
                        (percentage > 0.5 ? 0.5 : percentage) * 40
                      }vh`,
                      // paddingBottom: '200px',
                      backgroundColor: '#2d5473',
                      width: '100vw',
                      textAlign: 'center',
                      zIndex: 200,
                    }}>
                    projects
                  </Text>
                );
              }}
            />
            <Parallax
              renderLayer={(percentage) => (
                <Margin vertical={`${100 + -100 * percentage}vh`} />
              )}
            />
            <Flex
              horizontal
              style={{
                width: '100vw',
                marginTop: '600px',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Timeline animationState={subtitleAnimationState} />

              <Flex
                vertical
                style={{
                  width: '80vw',
                  maxWidth: '1270px',
                  alignItems: 'flex-start',
                }}>
                <TimelineYearIndicator>2021</TimelineYearIndicator>
                {portfolioData.map((value, index, arr) => {
                  return (
                    <>
                      <Parallax
                        style={{ width: '100%' }}
                        renderLayer={(percentage) => {
                          return (
                            <TimelineTitle
                              title={value.title}
                              subtitle={value.subtitle}
                              style={{
                                marginTop: `${
                                  (0.6 - percentage) * 30 > 0
                                    ? `${(0.6 - percentage) * 30}vh`
                                    : '0px'
                                }`,
                              }}
                            />
                          );
                        }}
                      />
                      {value.thumbnail && (
                        <>
                          <Margin vertical={'10px'} />
                          <Parallax
                            style={{ width: '100%' }}
                            renderLayer={(percentage) => {
                              return (
                                <TimelineImage
                                  src={value.thumbnail}
                                  style={{
                                    marginTop: `${
                                      (0.6 - percentage) * 30 > 0
                                        ? `${(0.6 - percentage) * 30}vh`
                                        : '0px'
                                    }`,
                                  }}
                                />
                              );
                            }}
                          />
                        </>
                      )}
                      <Margin vertical={'10px'} />
                      <Parallax
                        style={{ width: '100%' }}
                        renderLayer={(percentage) => {
                          return (
                            <TimelineContent
                              style={{
                                marginTop: `${
                                  (0.6 - percentage) * 30 > 0
                                    ? `${(0.6 - percentage) * 30}vh`
                                    : '0px'
                                }`,
                              }}>
                              <Margin vertical={'10px'} />
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {value.content}
                              </ReactMarkdown>
                            </TimelineContent>
                          );
                        }}
                      />
                      <Margin vertical={'200px'} />
                    </>
                  );
                })}
                <Margin vertical={'50vh'} />
              </Flex>
            </Flex>

            <Parallax
              style={{
                boxShadow: '0px -5px 3px 1px #0e1e2c',
              }}
              renderLayer={(percentage) => {
                return (
                  <Flex
                    vertical
                    width={'100vw'}
                    style={{
                      backgroundColor: '#0e1e2c',
                      height: `${percentage * 100 + 30}vh`,
                      zIndex: 100,
                    }}>
                    <Margin vertical={`${percentage * 50 + 10}vh`} />
                    <Flex
                      vertical
                      width={'95vw'}
                      height={'90vh'}
                      style={{
                        alignItems: 'flex-start',
                      }}>
                      <Text fontSize={'72px'}>hadmarine</Text>
                      <Text
                        fontSize={'24px'}
                        style={{ marginTop: '-36px', marginLeft: '5px' }}>
                        Beyond present.
                      </Text>
                      <Margin vertical={'100px'} />
                      <Flex
                        width={'100%'}
                        style={{
                          alignItems: 'flex-start',
                        }}>
                        <Flex vertical flex={1}>
                          <Text
                            fontSize={'36px'}
                            fontWeight={300}
                            style={{
                              width: '100%',
                              textAlign: 'center',
                              marginBottom: '10px',
                            }}>
                            contacts
                          </Text>
                          <Flex
                            fitParent
                            vertical
                            style={{
                              alignItems: 'flex-start',
                            }}>
                            There are no contact method at the moment.
                          </Flex>
                        </Flex>
                        <Flex vertical flex={1}>
                          <Text
                            fontSize={'36px'}
                            fontWeight={300}
                            style={{
                              width: '100%',
                              textAlign: 'center',
                              marginBottom: '10px',
                            }}>
                            summary
                          </Text>
                          <Flex
                            fitParent
                            vertical
                            style={{
                              alignItems: 'flex-start',
                            }}>
                            <span>
                              &middot; HTTP/Socket Server with Javascript
                              (Typescript), Rust, C++, C#
                            </span>
                            <span>
                              &middot; Webpage with React, Vue (Redux, MobX)
                            </span>
                            <span>
                              &middot; Parallax scrolling / Scroll animation
                              interaction development
                            </span>
                            <span>&middot; App with React-Native</span>
                            <span>
                              &middot; Dev-Ops with AWS, GCP, OCI, CircleCI -
                              CI/CD, AutoScaling, LoadBalancing, G/B Deployment
                            </span>
                            <span>
                              &middot; Use linux commands and handle shell
                              scripts
                            </span>
                            <span>
                              &middot; MongoDB, Maria/MySQL, MSSQL ...
                            </span>
                            <span>
                              &middot; Track user behavoiur via Google Analytics
                            </span>
                            <span>
                              &middot; More details are on my{' '}
                              <a href={'https://github.com/hadmarine'}>
                                Github
                              </a>
                              .
                            </span>
                          </Flex>
                        </Flex>
                      </Flex>
                      <FlexSpacer flex={1} />
                      <Flex
                        horizontal
                        style={{
                          alignSelf: 'flex-end',
                          justifySelf: 'flex-end',
                          width: '100%',
                          alignItems: 'flex-end',
                        }}>
                        <Text textAlign={'left'}>
                          Copyright 2021 hadmarine
                          <br />
                          <span>
                            All design and interactions was developed by{' '}
                            <a href={'http://git.hadmarine.com'}>hadmarine</a>
                          </span>
                        </Text>
                        <FlexSpacer flex={1} />
                        <span>
                          For Admin, Click
                          <Link to={'/admin/login'}> Here</Link>
                        </span>
                      </Flex>
                    </Flex>
                  </Flex>
                );
              }}
            />
          </Flex>
        </Flex>
      </Text>
    </Wrapper>
  );
};

export default Main;
