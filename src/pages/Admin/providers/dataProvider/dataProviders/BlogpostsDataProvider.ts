import {
  DeleteBlogPost,
  GetBlogPost,
  GetBlogpostById,
  PatchBlogPost,
  PostBlogpost,
} from '@src/api/blogpost';
import { DataProviderFactory } from '../DataProviderFactory';

export class BlogpostsDataProvider implements DataProviderFactory {
  async getList(params: {
    pagination: { limit: number; offset: number };
    query: Record<string, any>;
    sort: { field: string; order: string };
  }): Promise<{ data: Record<string, any>[]; total: number }> {
    const result = await GetBlogPost({
      pagination: params.pagination,
      query: params.query,
      sort: params.sort,
    });

    if (!result.result) {
      throw new Error(result.message);
    }

    const { data, total } = result;

    const modifiedData = data.map((d) => {
      const { _id, tags, ...rest } = d;
      const newTags = tags && tags.map((v) => ({ value: v }));

      return {
        ...rest,
        tags: newTags,
        id: _id,
      };
    });

    return {
      data: modifiedData,
      total,
    };
  }
  async getOne(id: string): Promise<Record<string, any>> {
    const result = await GetBlogpostById(id);

    if (!result.result) {
      throw new Error(result.message);
    }

    const { _id, tags, ...rest } = result.data;

    return {
      id: _id,
      tags: tags?.map((v) => ({ value: v })),
      ...rest,
    };
  }
  async create(data: Record<string, any>): Promise<Record<string, any>> {
    const tags =
      data.tags &&
      (() => {
        if (data.tags.length === 0) {
          return undefined;
        }
        // eslint-disable-next-line prefer-const
        let value: string[] = [];

        for (const v of data.tags as { value: string }[]) {
          value.push(v.value);
        }
        return value;
      })();

    const result = await PostBlogpost({
      title: data.title,
      subtitle: data.subtitle,
      content: data.content,
      isPrivate: data.isPrivate,
      tags,
    });

    if (result.result) {
      const { _id, ...rest } = result.data;

      const modifiedResult = { id: _id, ...rest };

      return modifiedResult;
    } else {
      throw new Error(result.message);
    }
  }
  async update(
    id: string,
    data: Record<string, any>,
  ): Promise<Record<string, any>> {
    const tags =
      data.tags &&
      (() => {
        if (data.tags.length === 0) {
          return undefined;
        }
        // eslint-disable-next-line prefer-const
        let value: string[] = [];

        for (const v of data.tags as { value: string }[]) {
          value.push(v.value);
        }
        return value;
      })();

    const result = await PatchBlogPost(id, {
      title: data.title,
      subtitle: data.subtitle,
      content: data.content,
      isPrivate: data.isPrivate,
      tags,
    });

    if (result.result) {
      const { _id, ...rest } = result.data;
      return {
        id: _id,
        ...rest,
      };
    }

    throw new Error(result.message);
  }
  async delete(id: string): Promise<Record<string, any>> {
    const result = await DeleteBlogPost(id);

    if (result.result) {
      const { _id, ...rest } = result.data;
      return {
        id: _id,
        ...rest,
      };
    }

    throw new Error(result.message);
  }
}
