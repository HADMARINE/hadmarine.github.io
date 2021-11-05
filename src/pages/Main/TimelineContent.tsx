import { Text } from '@src/components/assets/Text';
import React from 'react';
import styled from 'styled-components';

const MARGIN_VALUE = '80px';

interface Props {
  children: React.ReactNode | string;
  style?: React.CSSProperties;
}

const Wrapper = styled.div`
  background-color: white;
  color: #2d5473;
  font-size: 24px;
  font-weight: 500;
  /* text-shadow: 1px 1px 2px #00000050; */
  width: calc(100% - ${MARGIN_VALUE});
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin-left: ${MARGIN_VALUE};
  line-height: 34px;
  letter-spacing: 1px;
`;

const TimelineImage = (props: Props) => {
  return <Wrapper style={props.style}>{props.children}</Wrapper>;
};

export default TimelineImage;
