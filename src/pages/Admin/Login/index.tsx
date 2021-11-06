import Button from '@src/components/assets/Button';
import { Margin } from '@src/components/assets/Format';
import Input from '@src/components/assets/Input';
import { Text } from '@src/components/assets/Text';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #2d5473;
`;

const AdminLogin = () => {
  return (
    <Wrapper>
      <Text fontSize={'36px'} fontWeight={400}>
        admin
      </Text>
      <Margin vertical={'20px'} />

      <Input
        width={'400px'}
        height={'50px'}
        border={'1px solid #2d5473'}
        placeholder={'ID'}
        type={'id'}
      />
      <Margin vertical={'10px'} />
      <Input
        width={'400px'}
        height={'50px'}
        border={'1px solid #2d5473'}
        placeholder={'Password'}
        type={'password'}
      />
      <Margin vertical={'30px'} />
      <Button>login</Button>
    </Wrapper>
  );
};

export default AdminLogin;
