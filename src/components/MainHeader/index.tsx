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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const MainHeader = (props: Props) => {
  const [index, setIndex] = React.useState(0);

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
        <HeaderSelector
          data={['Portfolio', 'Contact', 'Blog']}
          index={index}
          setIndex={setIndex}
        />
      </Flex>
    </Wrapper>
  );
};

export default MainHeader;
