import client from './client';
import { GetApiQueryBase } from './interfaces';

export interface PortfolioInterface {
  title: string;
  subtitle?: string;
  thumbnail?: string;
  content: string;
  link?: Record<string, string>;
  date: Date;
}

// export const GetPortfolio: AdminTableGetApi<PortfolioInterface> = async (
//   props,
// ) => {
//   const res = await client.get('/portfolios', {
//     params: {
//       skip: props.skip,
//       limit: props.limit,
//     },
//   });

//   return {
//     data: res.data?.data || [],
//     result: res.result,
//     length: res.data?.length || 0,
//   };
// };

export const GetPortfolio = async (
  params?: {
    title?: string;
    subtitle?: string;
  } & GetApiQueryBase,
): Promise<PortfolioInterface[]> => {
  const res = await client.get(`/portfolios`, {
    params: {
      limit: params?.limit || 0,
      offset: params?.offset || 0,
      date: params?.date,
      title: params?.title,
      subtitle: params?.subtitle,
    },
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

export const PatchPortfolio = async (
  id: string,
  props: Partial<PortfolioInterface>,
): Promise<{
  result: boolean;
  message?: string;
}> => {
  const res = await client.patch(`/portfolios/${id}`, props);

  return {
    result: res.result,
    message: res.data?.message,
  };
};

export const DeletePortfolio = async (
  id: string,
): Promise<{
  result: boolean;
  message?: string;
}> => {
  const res = await client.delete(`/portfolios/${id}`);

  return { result: res.result, message: res.data?.code };
};

export const PostPortfolio = async (
  props: PortfolioInterface,
): Promise<{
  result: boolean;
  message?: string;
}> => {
  const res = await client.post(`/portfolios`, props);

  return { result: res.result, message: res.data?.code };
};
