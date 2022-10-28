import client from './client';

import {
  AdminTableDeleteApi,
  AdminTableGetApi,
  AdminTablePatchApi,
  AdminTablePostApi,
} from 'quick-react-admin';

export interface PortfolioInterface {
  title: string;
  subtitle: string;
  thumbnail: string;
  content: string;
  link: Record<string, string>;
  date: Date;
}

export const GetPortfolio: AdminTableGetApi<PortfolioInterface> = async (
  props,
) => {
  const res = await client.get('/portfolios', {
    params: {
      skip: props.skip,
      limit: props.limit,
    },
  });

  return {
    data: res.data?.data || [],
    result: res.result,
    length: res.data?.length || 0,
  };
};

export const GetPortfolioAll = async (): Promise<PortfolioInterface[]> => {
  const res = await client.get(`/portfolios`, {
    params:{
      limit: 10,
      offset: 0,
      date:{
        from : 0,
        to : Date.now().toString()
      }
      // teitle:"hello"
    }
  });

  return Array.isArray(res.data)
    ? res.data.map((v) => {
        return {
          ...v,
          date: new Date(v.date),
        };
      })
    : res.data;
};

export const PatchPortfolio: AdminTablePatchApi = async (props) => {
  const res = await client.patch(
    `/admin/blog/portfolio/${props.docId}`,
    props.data,
  );

  return {
    result: res.result,
    message: (res?.raw as any)?.response?.data?.message,
  };
};

export const DeletePortfolio: AdminTableDeleteApi = async (props) => {
  const res = await client.delete(`/admin/blog/portfolio/${props.docId}`);

  return { result: res.result, message: res?.code };
};

export const PostPortfolio: AdminTablePostApi = async (props) => {
  const res = await client.post(`/admin/blog/portfolio`, props.data);

  return { result: res.result, message: res?.code };
};
