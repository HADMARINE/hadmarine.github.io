import client from '@api/client';

export default async function login(props: {
  id: string;
  password: string;
}): Promise<{
  result: boolean;
  message?: string;
}> {
  const res = await client.post('/auth', {
    userid: props.id,
    password: props.password,
  });
  console.log(res);
  if (res.result === true) {
    sessionStorage.setItem('access-token', res.data.access);
    localStorage.setItem('refresh-token', res.data.refresh);
    return { result: true };
  } else {
    console.log(res);
    return {
      result: false,
      message:
        (res.raw as any).response.data.message || res.code || 'Login Failed',
    };
  }
}
