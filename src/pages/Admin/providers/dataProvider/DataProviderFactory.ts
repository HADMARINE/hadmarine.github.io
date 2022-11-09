export abstract class DataProviderFactory {
  abstract getList(params: {
    pagination: { limit: number; offset: number };
    query: Record<string, any>;
    sort: { field: string; order: string };
  }): Promise<{
    data: Record<string, any>[];
    total: number;
  }>;
  abstract getOne(id: string): Promise<Record<string, any>>;
  //   getMany: (ids: string[]) => Promise<Record<string, any>[]>;
  //   getManyReference: (
  //     search: {
  //       target: string;
  //       id: string;
  //     },
  //     params: {
  //       pagination: { limit: number; offset: number };
  //       query: Record<string, any>;
  //       sort: { field: string; order: string };
  //     },
  //   ) => Promise<Record<string, any>[]>;
  abstract create(data: Record<string, any>): Promise<Record<string, any>>;
  abstract update(
    id: string,
    data: Record<string, any>,
  ): Promise<Record<string, any>>;
  //   updateMany: (
  //     ids: string[],
  //     data: Record<string, any>,
  //   ) => Promise<Record<string, any>[]>;
  abstract delete(id: string): Promise<Record<string, any>>;
  //   deleteMany: (ids: string[]) => Promise<string[]>;
}
