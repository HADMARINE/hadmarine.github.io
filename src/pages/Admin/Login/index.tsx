import Button from '@src/components/assets/Button';
import { Margin } from '@src/components/assets/Format';
import Input from '@src/components/assets/Input';
import { Text } from '@src/components/assets/Text';
import React from 'react';
import styled from 'styled-components';
import login from '@api/login';

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
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    if (!!sessionStorage.getItem('access-token')) {
      // push window location
    }
  }, []);

  const handleLogin = async () => {
    const result = await login({ id, password });
    if (result.result) {
      // push window location
    } else {
      alert(result.message);
    }
  };

  return (
    <Wrapper>
      <Text fontSize={'36px'} fontWeight={400}>
        admin
      </Text>
      <Margin vertical={'20px'} />

      <Input
        value={id}
        onChange={(e) => setId(e.target.value)}
        width={'400px'}
        height={'50px'}
        border={'1px solid #2d5473'}
        placeholder={'ID'}
        type={'id'}
      />
      <Margin vertical={'10px'} />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        width={'400px'}
        height={'50px'}
        border={'1px solid #2d5473'}
        placeholder={'Password'}
        type={'password'}
      />
      <Margin vertical={'30px'} />
      <Button onClick={handleLogin}>login</Button>
    </Wrapper>
  );
};

export default AdminLogin;
