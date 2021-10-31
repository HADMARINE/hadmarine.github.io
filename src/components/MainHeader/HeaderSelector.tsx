import React from 'react';
import styled from 'styled-components';
import { Text } from '../assets/Text';
import { Flex } from '../assets/Wrapper';

interface Props {
  data: string[];
  index: number;
}

const Wrapper = styled.div`
  display: flex;
  flex: 9;
  margin-top: -5px;
`;

const HeaderSelector = (props: Props) => {
  return (
    <Wrapper>
      <Flex horizontal flex={1}>
        {props.data.map((d, i) => (
          <Flex key={`headerselector_loop_${i}`} center flex={1}>
            <Text
              fontSize={'26px'}
              fontFamily={'Urbanist'}
              fontWeight={400}
              letterSpacing={'1px'}
              style={{
                color: '#FFFFFF',
                marginLeft: '10px',
                marginRight: '10px',
              }}>
              {d}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Wrapper>
  );
};

export default HeaderSelector;
