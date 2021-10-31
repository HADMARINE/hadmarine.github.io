import React from 'react';
import styled from 'styled-components';
import Img from '../assets/Img';
import { Flex, FlexSpacer } from '../assets/Wrapper';
import hadmarineLogo from '../../assets/img/hadmarine_logo_white.png';
import githubLogo from '../../assets/img/github_logo.png';
import tgLogo from '../../assets/img/telegram_logo.png';
import { Margin } from '../assets/Format';
import HeaderSelector from './HeaderSelector';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #2d5473;
  backdrop-filter: saturate(180%) blur(20px);
  position: fixed;
  top: 0;
  z-index: 99999;
`;

const MainHeader = (props: Props) => {
  return (
    <Wrapper>
      <Flex horizontal center>
        <Margin horizontal={'20px'} />
        <Img src={hadmarineLogo} width={'70px'} style={{ marginTop: '3px' }} />
        <FlexSpacer flex={1} />
        <Img src={githubLogo} width={'45px'} style={{ marginTop: '-5px' }} />
        <Margin horizontal={'5px'} />
        <Img src={tgLogo} width={'45px'} style={{ marginTop: '-5px' }} />
        <FlexSpacer flex={1} />
        <HeaderSelector data={['Portfolio', 'Contact', 'Blog']} index={0} />
      </Flex>
    </Wrapper>
  );
};

export default MainHeader;
