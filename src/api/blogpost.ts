import { AdminTableDeleteApi, AdminTablePatchApi } from 'quick-react-admin';
import client from './client';

export interface BlogPostInterface {
  title: string;
  subtitle?: string;
  tag?: string[];
  content: string;
  date: Date;
}

// export const GetBlogPost: AdminTableGetApi<BlogPostInterface> = async (
//   props,
// ) => {
//   const res = await client.get('/blogpost', {
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
export const GetBlogPost = async (): Promise<BlogPostInterface[]> => {
  const res = await client.get('/blogpost', {
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
