import Button from '@src/components/assets/Button';
import { Margin } from '@src/components/assets/Format';
import { Text } from '@src/components/assets/Text';
import React from 'react';
import { Admin } from 'react-admin';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: #2d5473;
`;

const AdminPost = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    navigate('/admin/login', { replace: true });
  };

  React.useEffect(() => {
    if (!sessionStorage.getItem('access-token')) {
      navigate('/', { replace: true });
    } // TODO : VERIFY ADMIN VIA SERVER
  }, []);

  return (
    <Wrapper>
      <Text fontSize={'36px'} fontWeight={300}>
        Admin page
      </Text>
      <Text>hadmarine.github.io</Text>
      <Margin vertical="10vh" />
      <Text>Manage</Text>

      <Button
        width={'200px'}
        onClick={() => navigate('/admin/manager/portfolio')}>
        Portfolio
      </Button>
      <Button
        width={'200px'}
        onClick={() => navigate('/admin/manager/blogpost')}>
        Blog Post
      </Button>
      <Margin vertical="3vh" />
      <Button width={'200px'} onClick={logout}>
        Log out
      </Button>
    </Wrapper>
  );
};

export default AdminPost;
