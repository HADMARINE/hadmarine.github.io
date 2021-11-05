import React, { Component } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import MainHeader from '@src/components/MainHeader';
import { Text } from '@src/components/assets/Text';
import { Margin } from '@src/components/assets/Format';
import { Flex } from '@src/components/assets/Wrapper';
import Img from '@src/components/assets/Img';
import hLogoKey from '../../assets/img/hadmarine_logo_key.png';
import { Parallax } from 'react-parallax';
import Timeline from './Timeline';
import TimelineYearIndicator from './TimelineYearIndicator';
import TimelineTitle from './TimelineTitle';
import TimelineImage from './TimelineImage';
import TimelineContent from './TimelineContent';

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
  padding-right: 60px;
  padding-bottom: 5px;
  border-radius: 0 0 40px 0;
  box-shadow: 0 0 80px 120px ${(props) => props?.subtitleValue?.[2]};
  z-index: 100;

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
  const [timelineAnimationState, setTimelineAnimationState] =
    React.useState(false);

  return (
    <Wrapper>
      <MainHeader />

      {subtitle && (
        <GlobalSubtitle
          subtitleValue={subtitle}
          animationState={subtitleAnimationState}>
          {subtitle[0]}
        </GlobalSubtitle>
      )}
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
            <Margin vertical={'10vh'} />

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
                    fontWeight={900}
                    fontSize={'70px'}
                    letterSpacing={'1.5px'}
                    style={{
                      opacity: percentage,
                      marginTop: `${
                        (percentage > 0.5 ? 0.5 : percentage) * 30
                      }vh`,
                      // paddingBottom: '200px',
                      backgroundColor: '#2d5473',
                      width: '100vw',
                      textAlign: 'center',
                      zIndex: 200,
                    }}>
                    Projects
                  </Text>
                );
              }}
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
                <TimelineTitle
                  title={'Sunrinthon Website Development'}
                  subtitle={'Official school compectition project'}
                />
                <TimelineImage
                  src={
                    'https://st.depositphotos.com/1000350/1663/i/950/depositphotos_16632665-stock-photo-shocked-bald-man-holding-comb.jpg'
                  }
                />
                <TimelineContent>
                  Worked as Leader of development team on 2022 Sunrinthon.
                  <br />
                  <br />
                  Developed backend server with Node.js, MongoDB and something
                  else.
                  <br />
                  <br />
                  This is my childhood dream so you must not blame it. Rather
                  not blame it, but just enjoy as a substitute.
                </TimelineContent>
              </Flex>
            </Flex>

            <Margin vertical={'800vh'} />

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
  );
};

export default Main;
