import { result } from 'lodash';
import {
  AdminTableDeleteApi,
  AdminTableGetApi,
  AdminTablePatchApi,
} from 'quick-react-admin';
import client from './client';

export interface BlogPostInterface {
  title: string;
  subtitle?: string;
  tag?: string[];
  content: string;
  date: Date;
}

export const GetBlogPost: AdminTableGetApi<BlogPostInterface> = async (
  props,
) => {
  const res = await client.get('/blog/post', {
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
export const GetBlogPostAll = async (): Promise<BlogPostInterface[]> => {
  const res = await client.get('/blog/post', {
    params: {
      skip:0,
      limit: 0
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

export const PatchBlogPost: AdminTablePatchApi = async (props) => {
  const res = await client.patch(`/admin/blog/post/${props.docId}`, props.data);
  return {
    result: res.result,
    message: (res?.raw as any)?.response.data.message,
  };
};

export const DeleteBlogPost: AdminTableDeleteApi = async (props) => {
  const res = await client.delete(`/admin/blog/post/${props.docId}`);

  return { result: res.result, message: res?.code };
};
