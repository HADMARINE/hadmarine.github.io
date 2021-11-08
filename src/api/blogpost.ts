import client from './client';

export interface BlogPostInterface {
  title: string;
  subtitle?: string;
  tag?: string[];
  content: string;
  date: Date;
}

export const GetBlogPost = (): BlogPostInterface[] => {};
