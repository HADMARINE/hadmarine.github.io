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
//   const res = await client.get('/blog/post', {
//     params: {
//       skip: props.skip,
//       limit: props.limit,
//     },
//   });
// };

// export const PatchBlogPost = async (props: {
//   data: Record<string, any>;
//   docId: string;
// }): Promise<{ result: boolean }> => {
//   const res = await client.patch(
//     '/admin'
//   );
//   return { result: res.result };
// };

// export const DeleteBlogPost = async (props: {
//   docId: string;
// }): Promise<{ result: boolean }> => {};
