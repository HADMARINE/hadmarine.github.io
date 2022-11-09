import { GetPortfolio, GetPortfolioById } from '@src/api/portfolio';
import { DataProviderFactory } from '../DataProviderFactory';
export class PortfolioDataProvider implements DataProviderFactory {
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

    return result;
  }
  public async create(data: Record<string, any>): Promise<Record<string, any>> {
    throw new Error('Method not implemented.');
  }
  public async update(
    id: string,
    data: Record<string, any>,
  ): Promise<Record<string, any>> {
    throw new Error('Method not implemented.');
  }
  public async delete(id: string): Promise<Record<string, any>> {
    throw new Error('Method not implemented.');
  }
}
