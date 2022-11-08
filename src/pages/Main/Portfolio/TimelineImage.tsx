import { Text } from '@src/components/assets/Text';
import React from 'react';
import styled from 'styled-components';

const MARGIN_VALUE = '80px';

interface Props {
  src: string | undefined;
  style?: React.CSSProperties;
}

const Wrapper = styled.img`
  background-color: white;
  color: #2d5473;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 1px 1px 2px #00000070;
  width: calc(100% - ${MARGIN_VALUE} + 30px);
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
  object-fit: contain;
`;

const TimelineImage = (props: Props) => {
  return <Wrapper style={props.style} src={props.src} />;
};

export default TimelineImage;
