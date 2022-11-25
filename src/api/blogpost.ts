import client from './client';
import { GetApiQueryBase } from './interfaces';

export interface BlogpostInterface {
  _id: string;
  title: string;
  subtitle?: string;
  tags?: string[];
  content: string;
  createdDate: Date;
  modifiedDate?: Date;
  isPrivate: boolean;
  viewCount: number;
}

export interface BlogpostDto {
  title: string;
  subtitle?: string;
  tags?: string[];
  content: string;
  isPrivate?: boolean;
}

export const GetBlogPost = async (
  params?: {
    query?: {
      title?: string;
      subtitle?: string;
      tags?: string[];
      createdDate?: { from?: Date; to?: Date };
      modifiedDate?: { from?: Date; to?: Date };
      isPrivate?: boolean;
    };
  } & GetApiQueryBase,
): Promise<
  | { result: true; data: BlogpostInterface[]; total: number }
  | { result: false; message?: string }
> => {
  const res = await client.get('/blogposts', {
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
      createdDate: v.createdDate && new Date(v.createdDate),
      modifiedDate: v.modifiedDate && new Date(v.modifiedDate),
    };
  });

  return { result: true, data, total: res.data.total };
};

export const GetBlogpostById = async (
  id: string,
): Promise<
  | { result: true; data: BlogpostInterface }
  | { result: false; message?: string }
> => {
  const res = await client.get(`/blogposts/${id}`);

  if (!res.result) {
    return { result: false, message: res.data?.message };
  }

  const { createdDate, modifiedDate, ...rest } = res.data;

  return {
    result: true,
    data: {
      createdDate: new Date(createdDate),
      modifiedDate: modifiedDate && new Date(modifiedDate),
      ...rest,
    },
  };
};

export const PatchBlogPost = async (
  id: string,
  props: Partial<BlogpostDto>,
): Promise<
  | { result: true; data: BlogpostInterface }
  | { result: false; message?: string }
> => {
  const res = await client.patch(`/blogposts/${id}`, props);

  if (!res.result) {
    return { result: false, message: res.data?.message };
  }

  return {
    result: res.result,
    data: res.data,
  };
};

export const DeleteBlogPost = async (
  id: string,
): Promise<
  | { result: true; data: BlogpostInterface }
  | { result: false; message?: string }
> => {
  const res = await client.delete(`/blogposts/${id}`);

  if (!res.result) {
    return { result: false, message: res.data?.message };
  }
  return { result: true, data: res.data };
};

export const PostBlogpost = async (
  props: BlogpostDto,
): Promise<
  | { result: true; data: BlogpostInterface }
  | { result: false; message?: string }
> => {
  const res = await client.post('/blogposts', props);

  if (!res.result) {
    return {
      result: false,
      message: res.data?.message,
    };
  }

  return { result: true, data: res.data };
};

export const GetBlogpostsTags = async (): Promise<
  { result: true; data: string[] } | { result: false; message?: string }
> => {
  const res = await client.get('/blogposts/tags');

  if (!res.result) {
    return { result: false, message: res.data?.message };
  }

  return { result: true, data: res.data };
};
