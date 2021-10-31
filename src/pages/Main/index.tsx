/* eslint-disable camelcase */
import React, { Component } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import MainHeader from '@src/components/MainHeader';
import { Text } from '@src/components/assets/Text';
import { Margin } from '@src/components/assets/Format';
import { Flex } from '@src/components/assets/Wrapper';
import Img from '@src/components/assets/Img';
import h_logo_key from '../../assets/img/hadmarine_logo_key.png';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

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
      <ParallaxProvider>
        <Wrapper>
          <MainHeader />
          <Margin vertical={'20vh'} />
          <Text
            fontFamily={'Urbanist'}
            style={{
              color: '#2d5473',
            }}>
            <Flex vertical>
              <Parallax y={[-400, 200]}>
                <Text
                  fontFamily={'Urbanist'}
                  fontSize={'90px'}
                  fontWeight={900}
                  style={{ letterSpacing: '7px' }}>
                  hadmarine
                </Text>
              </Parallax>
              <Parallax y={[250, -100]}>
                <Text
                  fontFamily={'Urbanist'}
                  fontSize={'32px'}
                  fontWeight={900}
                  style={{ marginTop: '-20px' }}>
                  Full stack developer
                </Text>
              </Parallax>

              {/* <Margin vertical={'10vh'} /> */}
              <Parallax y={[-200, 200]}>
                <Img src={h_logo_key} width={'400px'} />
              </Parallax>
              <Margin vertical={'200vh'} />
            </Flex>
          </Text>
        </Wrapper>
      </ParallaxProvider>
    );
  }
}
