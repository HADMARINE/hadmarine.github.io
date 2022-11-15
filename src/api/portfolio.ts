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

export const GetPortfolio = async (
  params?: {
    query?: {
      title?: string;
      subtitle?: string;
      date?: { from?: Date; to?: Date };
    };
  } & GetApiQueryBase,
): Promise<{ data: PortfolioInterface[]; total: number }> => {
  const res = await client.get(`/portfolios`, {
    params: {
      pagination: {
        limit: params?.pagination?.limit || 0,
        offset: params?.pagination?.offset || 0,
      },
      query: {
        date: params?.query?.date,
        ...params?.query,
      },
      sort: params?.sort,
    },
  });

  const data = Array.isArray(res.data.data)
    ? res.data.data.map((v: Record<string, any>) => {
        return {
          ...v,
          date: new Date(v.date),
        };
      })
    : { ...res.data, date: new Date(res.data.date) };

  return { data, total: res.data.total };
};

export const GetPortfolioById = async (
  id: string,
): Promise<PortfolioInterface> => {
  const res = await client.get(`/portfolios/${id}`);

  return res.data;
};

export const PatchPortfolio = async (
  id: string,
  props: Partial<PortfolioInterface>,
): Promise<
  | {
      result: true;
      data: Record<string, any>;
    }
  | { result: false; message: string }
> => {
  const res = await client.patch(`/portfolios/${id}`, props);

  if (res.result) {
    const { _id, ...rest } = res.data;

    return {
      result: true,
      data: { id: _id, ...rest },
    };
  }

  return {
    result: false,
    message: res.data?.message,
  };
};

export const DeletePortfolio = async (
  id: string,
): Promise<
  | {
      result: true;
      data: Record<string, any>;
    }
  | {
      result: false;
      message?: string;
    }
> => {
  const res = await client.delete(`/portfolios/${id}`);

  if (res.result) {
    const { _id, ...rest } = res.data;
    return {
      result: true,
      data: { id: _id, ...rest },
    };
  }

  return {
    result: false,
    message: res.data?.message,
  };
};

export const PostPortfolio = async (
  props: PortfolioInterface,
): Promise<
  | {
      result: true;
      data: Record<string, any>;
    }
  | { result: false; message: string }
> => {
  const res = await client.post(`/portfolios`, props);

  if (res.result) {
    return { result: true, data: res.data };
  } else {
    return { result: false, message: res.data?.message || 'Request failed' };
  }
};
