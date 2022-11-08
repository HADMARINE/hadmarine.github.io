import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type ResponseResult<T> = AxiosResponse<T> & { result: boolean };

function getApiUri(): string {
  const apiUriPreferences = {
    production: process.env.REACT_APP_PROD_API_URI,
    development: process.env.REACT_APP_DEV_API_URI,
    test: process.env.REACT_APP_TEST_API_URI,
  };
  const addr = apiUriPreferences[process.env.NODE_ENV || 'development'];
  if (!addr) {
    throw new Error(`API URI NOT DEFINED - ${process.env.NODE_ENV}`);
  }
  return addr;
}

// const OPTIONS: Parameters<typeof client>[1] = {
//   onTokenResignFail: () => {
//     localStorage.removeItem('refresh-token');
//     sessionStorage.removeItem('access-token');
//   },
//   loggerOnError: console.error,
//   loggerOnInfo: console.info,
//   accessTokenHeaderKey: 'X-Access-Token',
//   accessTokenResolver: {
//     get: () => sessionStorage.getItem('access-token') || 'null',
//     set: (value: string) => sessionStorage.setItem('access-token', value),
//   },
//   refreshTokenResolver: {
//     get: () => localStorage.getItem('refresh-token') || 'null',
//     set: (value: string) => localStorage.setItem('refresh-token', value),
//   },
//   tokenResignEndpiont: 'auth/resign',
// };

function customClient() {
  const baseClient = axios.create({
    baseURL: getApiUri(),
  });

  // It renews access token
  async function renewAccessToken(): Promise<{ result: boolean }> {
    return baseClient
      .post('/auth/resign')
      .then(() => {
        return { result: true };
      })
      .catch(() => {
        return { result: false };
      });
  }

  async function resolver<T>(
    config: AxiosRequestConfig,
  ): Promise<ResponseResult<T>> {
    try {
      return await baseClient.request(config);
    } catch (e: any) {
      if (e.response) {
        if (e.response.data?.code === 'JWT_TOKEN_EXPIRED') {
          if (!(await renewAccessToken()).result) {
            return { ...(e?.response?.data || e), result: false };
          } else {
            return await resolver(config);
          }
        }
        return { ...(e?.response?.data || e), result: false };
      } else if (e.request) {
        console.error(e.request);
        return { ...(e?.response?.data || e), result: false };
      } else {
        console.error('Error', e.message);
        return { ...(e?.response?.data || e), result: false };
      }
    }
  }

  const eqbClient = {
    request: <T = any>(
      config: AxiosRequestConfig,
    ): Promise<ResponseResult<T>> => resolver(config),
    get: <T = any>(
      url: string,
      config?: AxiosRequestConfig,
    ): Promise<ResponseResult<T>> =>
      resolver({
        ...config,
        url,
        method: 'get',
      }),
    delete: <T = any>(
      url: string,
      config?: AxiosRequestConfig,
    ): Promise<ResponseResult<T>> =>
      resolver({ ...config, url, method: 'delete' }),
    head: <T = any>(
      url: string,
      config?: AxiosRequestConfig,
    ): Promise<ResponseResult<T>> =>
      resolver({ ...config, url, method: 'head' }),
    options: <T = any>(
      url: string,
      config?: AxiosRequestConfig,
    ): Promise<ResponseResult<T>> =>
      resolver({ ...config, url, method: 'options' }),
    post: async <T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig,
    ): Promise<ResponseResult<T>> =>
      resolver({ ...config, url, data, method: 'post' }),
    put: <T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig,
    ): Promise<ResponseResult<T>> =>
      resolver({ ...config, url, data, method: 'put' }),
    patch: <T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig,
    ): Promise<ResponseResult<T>> =>
      resolver({ ...config, url, data, method: 'patch' }),
  };
  return eqbClient;
}

export default customClient();
