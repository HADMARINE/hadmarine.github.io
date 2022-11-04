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
    return { result: true };
  } else {
    console.log(res);
    return {
      result: false,
      message: res.data.message || res.data.code || 'Login Failed',
    };
  }
}
