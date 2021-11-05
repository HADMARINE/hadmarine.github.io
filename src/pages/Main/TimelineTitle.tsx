import { Text } from '@src/components/assets/Text';
import React from 'react';
import styled from 'styled-components';

interface Props {
  title?: JSX.Element | string;
  subtitle?: JSX.Element | string;
  style?: React.CSSProperties;
}

const Wrapper = styled.div<{ lg: boolean }>`
  background-color: white;
  color: #2d5473;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 1px 1px 2px #00000070;
  height: ${(props) => (props.lg ? '112px' : '56px')};
  width: 100%;
  padding-left: 20px;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  padding-right: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
`;

const TimelineTitle = (props: Props) => {
  return (
    <Wrapper style={props.style} lg={!!props.subtitle}>
      <Text fontSize={'36px'} fontWeight={600}>
        {props.title}
      </Text>
      <Text fontSize={'28px'} fontWeight={300} style={{ marginTop: '-10px' }}>
        {props.subtitle}
      </Text>
    </Wrapper>
  );
};

export default TimelineTitle;
