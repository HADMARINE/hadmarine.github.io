import {
  DeletePortfolio,
  GetPortfolio,
  GetPortfolioById,
  PostPortfolio,
  PatchPortfolio,
  PortfolioInterface,
} from '@src/api/portfolio';
import { DataProviderFactory } from '../DataProviderFactory';
export class PortfoliosDataProvider implements DataProviderFactory {
  public async getList(params: {
    pagination: { limit: number; offset: number };
    query: Record<string, any>;
    sort: { field: string; order: string };
  }): Promise<{ data: Record<string, any>[]; total: number }> {
    const result = await GetPortfolio({
      pagination: params.pagination,
      query: params.query,
      sort: params.sort,
    });

    if (!result.result) {
      throw new Error(result.message);
    }

    const { data, total } = result;

    const modifiedData = data.map((d) => {
      const { link, _id, ...rest } = d;
      const newLink =
        link &&
        Object.entries(link).map(([k, v]) => {
          return {
            key: k,
            value: v,
          };
        });

      return {
        ...rest,
        link: newLink,
        id: _id,
      };
    });

    return {
      data: modifiedData,
      total,
    };
  }
  public async getOne(id: string): Promise<Record<string, any>> {
    const result = await GetPortfolioById(id);

    if (!result.result) {
      throw new Error(result.message);
    }
    return result.data;
  }
  public async create(data: Record<string, any>): Promise<Record<string, any>> {
    const link =
      data.link &&
      (() => {
        if (data.link.length === 0) {
          return undefined;
        }
        // eslint-disable-next-line prefer-const
        let value: Record<string, string> = {};

        for (const v of data.link as { key: string; value: string }[]) {
          value[v.key] = v.value;
        }
        return value;
      })();

    const result = await PostPortfolio({
      title: data.title,
      subtitle: data.subtitle,
      content: data.content,
      date: data.date,
      link,
      thumbnail: data.thumbnail,
    });

    if (result.result) {
      const { _id, ...rest } = result.data;

      const modifiedResult = { id: _id, ...rest };

      return modifiedResult;
    } else {
      throw new Error(result.message);
    }
  }
  public async update(
    id: string,
    data: Record<string, any>,
  ): Promise<Omit<PortfolioInterface, '_id'> & { id: string }> {
    const link =
      data.link &&
      (() => {
        if (data.link.length === 0) {
          return undefined;
        }
        // eslint-disable-next-line prefer-const
        let value: Record<string, string> = {};

        for (const v of data.link as { key: string; value: string }[]) {
          value[v.key] = v.value;
        }
        return value;
      })();

    const result = await PatchPortfolio(id, {
      title: data.title,
      subtitle: data.subtitle,
      content: data.content,
      date: data.date,
      link,
      thumbnail: data.thumbnail,
    });

    if (result.result) {
      const { _id, ...restInner } = result.data;
      return {
        id: _id,
        ...restInner,
      };
    }

    throw new Error(result.message);
  }
  public async delete(
    id: string,
  ): Promise<Omit<PortfolioInterface, '_id'> & { id: string }> {
    const result = await DeletePortfolio(id);

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