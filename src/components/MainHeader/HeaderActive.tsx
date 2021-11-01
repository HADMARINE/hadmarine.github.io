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

const Wrapper: StyledComponentType = styled.div`
  position: absolute;
  display: flex;
  flex-direction: horizontal;
  margin-left: ${(props: any): string => `calc(${props.percent}%  - 50px)`};
  /* opacity: 0.5; */
  width: calc(33% + 100px);
  transition: all 0.5s ease-in-out;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));
  /* z-index: -1; */
`;

const HeaderActive = (props: Props) => {
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
        <Text
          fontSize={'26px'}
          style={{ color: '#2D5473', position: 'absolute', zIndex: 100 }}>
          {props.value}
        </Text>
      </Flex>
      <Img
        src={active_slope}
        height={'60px'}
        style={{
          transform: 'rotateY(180deg)',
          zIndex: -1,
        }}
      />
    </Wrapper>
  );
};

export default HeaderActive;
