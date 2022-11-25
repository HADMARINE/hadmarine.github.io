import client from './client';
import { GetApiQueryBase } from './interfaces';

export interface PortfolioInterface {
  _id: string;
  title: string;
  subtitle?: string;
  thumbnail?: string;
  content: string;
  link?: Record<string, string>;
  date: Date;
}

export type PortfolioDto = Omit<PortfolioInterface, '_id'>;

export const GetPortfolio = async (
  params?: {
    query?: {
      title?: string;
      subtitle?: string;
      date?: { from?: Date; to?: Date };
    };
  } & GetApiQueryBase,
): Promise<
  | { result: true; data: PortfolioInterface[]; total: number }
  | { result: false; message?: string }
> => {
  const res = await client.get(`/portfolios`, {
    params: {
      pagination: {
        limit: params?.pagination?.limit || 10,
        offset: params?.pagination?.offset || 0,
      },
      query: params?.query,
      sort: params?.sort,
    },
  });

  if (!res.result) {
    return { result: false, message: res.data?.message };
  }

  if (!Array.isArray(res.data.data)) {
    return { result: false, message: 'Data invalid' };
  }

  const data = res.data.data.map((v: Record<string, any>) => {
    return {
      ...v,
      date: new Date(v.date),
    };
  });

  return { result: true, data, total: res.data.total };
};

export const GetPortfolioById = async (
  id: string,
): Promise<
  | { result: true; data: PortfolioInterface }
  | { result: false; message?: string }
> => {
  const res = await client.get(`/portfolios/${id}`);

  if (res.result) {
    return { result: true, data: res.data };
  }

  return { result: false, message: res.data?.message };
};

export const PatchPortfolio = async (
  id: string,
  props: Partial<PortfolioDto>,
): Promise<
  | {
      result: true;
      data: PortfolioInterface;
    }
  | { result: false; message: string }
> => {
  const res = await client.patch(`/portfolios/${id}`, props);

  if (res.result) {
    return {
      result: true,
      data: res.data,
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
      data: PortfolioInterface;
    }
  | {
      result: false;
      message?: string;
    }
> => {
  const res = await client.delete(`/portfolios/${id}`);

  if (res.result) {
    return {
      result: true,
      data: res.data,
    };
  }

  return {
    result: false,
    message: res.data?.message,
  };
};

export const PostPortfolio = async (
  props: PortfolioDto,
): Promise<
  | {
      result: true;
      data: PortfolioInterface;
    }
  | { result: false; message: string }
> => {
  const res = await client.post(`/portfolios`, props);

  if (res.result) {
    return { result: true, data: res.data };
  }
  return { result: false, message: res.data?.message || 'Request failed' };
};
