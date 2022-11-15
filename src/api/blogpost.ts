import { AdminTableDeleteApi, AdminTablePatchApi } from 'quick-react-admin';
import client from './client';

export interface BlogPostInterface {
  title: string;
  subtitle?: string;
  tags?: string[];
  content: string;
  createdDate: Date;
  modifiedDate?: Date;
  isPrivate: boolean;
  viewCount: number;
}

export const GetBlogPost = async (params?: {
  query?: {
    title?: string;
    subtitle?: string;
    tags?: string[];
    createdDate?: { from?: Date; to?: Date };
    modifiedDate?: { from?: Date; to?: Date };
    isPrivate?: boolean;
  };
}): Promise<BlogPostInterface[]> => {
  const res = await client.get('/blogposts', {
    params: {
      skip: 0,
      limit: 0,
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

export const PatchBlogPost: AdminTablePatchApi = async (props) => {
  const res = await client.patch(`/admin/blog/post/${props.docId}`, props.data);
  return {
    result: res.result,
    message: res.data?.message,
  };
};

export const DeleteBlogPost: AdminTableDeleteApi = async (props) => {
  const res = await client.delete(`/admin/blog/post/${props.docId}`);

  return { result: res.result, message: res.data?.code };
};
