import client from '@api/client';
import Cookies from 'universal-cookie';

export async function login(props: {
  userid: string;
  password: string;
}): Promise<
  | {
      result: true;
    }
  | { result: false; message: string }
> {
  const res = await client.post('/auth/login', {
    userid: props.userid,
    password: props.password,
  });

  if (res.result === true) {
    return { result: true };
  }

  return {
    result: false,
    message: res.data.message || res.data.code || 'Login Failed',
  };
}

export async function logout(): Promise<
  | {
      result: true;
    }
  | { result: false; message: string }
> {
  const res = await client.post('/auth/logout');

  if (res.result) {
    return { result: true };
  }

  const cookies = new Cookies();

  cookies.remove('Authentication');
  cookies.remove('RefreshToken');

  return {
    result: true,
  };
}

export async function checkAdminAuthority(): Promise<
  | {
      result: true;
    }
  | { result: false; message: string }
> {
  const res = await client.get('/auth/verify/admin');

  if (res.result) {
    return { result: true };
  }

  return {
    result: false,
    message: res.data.message || res.data.code || 'Admin verification failed',
  };
}

export async function getAuthorities(): Promise<
  { result: true; data: string[] } | { result: false; message: string }
> {
  const res = await client.get('/auth/authority/string');

  if (res.result) {
    return { result: true, data: res.data };
  }

  return {
    result: false,
    message: res.data.message || res.data.code || 'Server request failure',
  };
}
