import React from 'react';
import styled from 'styled-components';
import active_slope from '../../assets/img/main_header_slope.svg';
import Img from '../assets/Img';
import { StyledComponentType, Text } from '../assets/Text';
import { Flex } from '../assets/Wrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  pos: number;
  value: string;
}

const Wrapper = styled.div<{ percent: number }>`
  position: absolute;
  display: flex;
  flex-direction: horizontal;
  margin-left: ${(props) => `calc(${props.percent}%  - 50px)`};
  width: calc(33% + 100px);
  transition: all 0.5s ease-in-out;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));
  margin-top: -1px;
`;

const DisappearText: StyledComponentType = styled.div`
  color: #2d5473;
  position: absolute;
  z-index: 100;
  opacity: 0;
  font-size: 26px;
  font-weight: 500;
  animation: ${(props: { trigger: boolean }) =>
      props.trigger ? 'header_disappear' : ''}
    0.7s ease-in-out;

  @keyframes header_disappear {
    0% {
      opacity: 1;
    }
    10% {
      opacity: 0;
    }
  }
`;
const AppearText: StyledComponentType = styled.div`
  color: #2d5473;
  position: absolute;
  z-index: 100;
  opacity: 1;
  font-size: 26px;
  font-weight: 500;
  animation: ${(props: { trigger: boolean }) =>
      props.trigger ? 'header_appear' : ''}
    0.7s ease-in-out;

  @keyframes header_appear {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const HeaderActive = (props: Props) => {
  const [valueHistory, setValueHistory] = React.useState<string[]>([]);
  const [animationTriggered, setAnimationTriggered] = React.useState(false);

  const pushValue = (incomingValue: string) => {
    setValueHistory([valueHistory[1], incomingValue]);
  };

  React.useEffect(() => {
    if (animationTriggered) {
      setValueHistory([]);
    }
    pushValue(props.value);
    if (valueHistory.length > 1) {
      setAnimationTriggered(true);
    }
    return () => {
      return;
    };
  }, [props.value]);

  return (
    <Wrapper className={'unselectable'} percent={props.pos}>
      <Img src={active_slope} height={'60px'} style={{ zIndex: -1 }} />
      <Flex
        width={'100%'}
        center
        style={{
          backgroundColor: 'white',
          marginLeft: '-1px',
          marginRight: '-1px',
          zIndex: 100,
        }}>
        <AppearText
          trigger={animationTriggered}
          onAnimationEnd={() => setAnimationTriggered(false)}>
          {valueHistory[1]}
        </AppearText>
        <DisappearText trigger={animationTriggered}>
          {valueHistory[0]}
        </DisappearText>
      </Flex>
      <Img
        src={active_slope}
        height={'60px'}
        style={{
          transform: 'rotateY(180deg)',
          zIndex: -1,
          marginLeft: '-1px',
        }}
      />
    </Wrapper>
  );
};

export default HeaderActive;
