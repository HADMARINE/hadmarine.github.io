import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: JSX.Element | string;
  style?: React.CSSProperties;
}

const Wrapper = styled.div`
  background-color: white;
  color: #2d5473;
  margin-left: 115px;
  font-size: 36px;
  font-weight: 600;
  text-shadow: 1px 1px 2px #00000070;
  height: 56px;
  width: 100px;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  padding-right: 10px;
  margin-top: 20px;
`;

const TimelineYearIndicator = (props: Props) => {
  return <Wrapper style={props.style}>{props.children}</Wrapper>;
};

export default TimelineYearIndicator;
