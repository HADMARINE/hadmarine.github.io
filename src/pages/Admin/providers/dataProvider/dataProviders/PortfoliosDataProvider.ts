import {
  DeletePortfolio,
  GetPortfolio,
  GetPortfolioById,
  PostPortfolio,
  PatchPortfolio,
} from '@src/api/portfolio';
import { DataProviderFactory } from '../DataProviderFactory';
export class PortfoliosDataProvider implements DataProviderFactory {
  public async getOne(id: string): Promise<Record<string, any>> {
    const result = await GetPortfolioById(id);
    return result;
  }
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

    const { data, total } = result;

    const modifiedData = data.map((d) => {
      const link =
        d.link &&
        Object.entries(d.link).map(([k, v]) => {
          return {
            key: k,
            value: v,
          };
        });

      return {
        ...d,
        link,
      };
    });

    return {
      data: modifiedData,
      total,
    };
  }
  public async create(data: Record<string, any>): Promise<Record<string, any>> {
    const link =
      data.link &&
      (() => {
        if (data.link && data.link.length === 0) {
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
  ): Promise<Record<string, any>> {
    const result = await PatchPortfolio(id, data);

    if (result.result) {
      return result.data;
    }

    throw new Error(result.message);
  }
  public async delete(id: string): Promise<Record<string, any>> {
    const result = await DeletePortfolio(id);

    if (result.result) {
      return result.data;
    }

    throw new Error(result.message);
  }
}
