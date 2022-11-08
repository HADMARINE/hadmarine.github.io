import Button from '@src/components/assets/Button';
import { Margin } from '@src/components/assets/Format';
import Input from '@src/components/assets/Input';
import { Text } from '@src/components/assets/Text';
import React from 'react';
import styled from 'styled-components';
// import login from '@api/login';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!!sessionStorage.getItem('access-token')) {
      navigate('/admin/manager/home');
    }
  }, []);

  const handleLogin = async () => {
    if (!(id && password)) {
      alert('Please fill in the blank!');
      return;
    }
    // const result = await login({ id, password });
    // if (result?.result) {
    //   navigate('/admin/manager/home');
    // } else {
    //   alert(result.message);
    // }
  };

  const handleEnterKey = (e: any) => {
    if (e.keyCode === 13) {
      handleLogin();
    }
  };

  const backToMain = () => {
    navigate('/', { replace: true });
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
        onKeyDown={handleEnterKey}
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
        onKeyDown={handleEnterKey}
      />
      <Margin vertical={'30px'} />
      <Button onClick={handleLogin}>login</Button>
      <Button onClick={backToMain}>back to main</Button>
    </Wrapper>
  );
};

export default AdminLogin;
