import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../assets/Button';
import { Text } from '../assets/Text';
import { Flex } from '../assets/Wrapper';
import HeaderActive from './HeaderActive';
import useIsMount from '@util/hooks/useIsMount';

interface Props {
  data: string[];
  index: number;
  setIndex: (i: number) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex: 9;
  margin-top: -5px;
  position: relative;
  height: 60px;
`;

const HeaderSelector = (props: Props) => {
  const navigate = useNavigate();
  const isMount = useIsMount();
  const location = useLocation();

  const indexSelector = () => {
    const index = props.data.findIndex(
      (v) => v === location.pathname.split('/')[2],
    );

    props.setIndex(index !== -1 ? index : props.index);
  };

  useEffect(() => {
    if (isMount) {
      return;
    }
    navigate(`/main/${props.data[props.index]}`);
  }, [props.index]);

  useEffect(() => indexSelector(), [location.hash]);

  return (
    <Wrapper>
      <HeaderActive
        pos={Math.floor((props.index / props.data.length) * 100)}
        value={props.data[props.index]}
      />
      <Flex horizontal flex={1}>
        {props.data.map((d, i) => (
          <Flex key={`headerselector_loop_${i}`} center flex={1}>
            <Button
              style={{
                display: 'flex',
                flex: 1,
                zIndex: props.index === i ? -1 : 1,
              }}
              width={'undef'}
              variant={'transparent'}
              onClick={() => props.setIndex(i)}
            />
            <Text
              fontSize={'26px'}
              fontFamily={'Urbanist'}
              fontWeight={400}
              letterSpacing={'1px'}
              style={{
                color: '#FFFFFF',
                marginLeft: '10px',
                marginRight: '10px',
                position: 'absolute',
                zIndex: -1,
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