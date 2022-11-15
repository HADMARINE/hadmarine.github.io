import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

type ResponseResult<T, U extends boolean = boolean> = {
  data: T;
  result: U;
  raw: U extends true ? AxiosResponse<T> : AxiosError<T>;
};

function getApiUri(): string {
  const apiUriPreferences = {
    production: 'https://api.page.hadmarine.com',
    development: 'http://localhost:61000',
    test: 'http://localhost:61000',
  };
  const addr = apiUriPreferences[process.env.NODE_ENV || 'development'];
  if (!addr) {
    throw new Error(`API URI NOT DEFINED - ${process.env.NODE_ENV}`);
  }
  return addr;
}

function customClient() {
  const baseClient = axios.create({
    baseURL: getApiUri(),
    withCredentials: true,
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
      const res = await baseClient.request(config);
      return {
        result: true,
        data: res.data,
        raw: res,
      };
    } catch (e: unknown) {
      if (!(e instanceof AxiosError)) {
        throw new Error('AXIOS Error not clarified');
      }

      if (e.response) {
        if (e.response.data?.code === 'JWT_TOKEN_EXPIRED') {
          if (!(await renewAccessToken()).result) {
            return {
              result: false,
              data: e.response?.data || {},
              raw: e,
            };
          } else {
            return await resolver(config);
          }
        }
        return {
          result: false,
          data: e.response?.data || ({} as any),
          raw: e,
        };
      } else if (e.request) {
        console.error(e.request);
        return {
          result: false,
          data: e.request?.data || ({} as any),
          raw: e,
        };
      } else {
        console.error('Error', e.message);
        return {
          result: false,
          data: {} as any,
          raw: e,
        };
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
