import {
  DataProvider,
  RaRecord,
  GetOneParams,
  GetManyParams,
  GetManyReferenceParams,
  CreateParams,
  UpdateParams,
  UpdateManyParams,
  DeleteParams,
  DeleteManyParams,
} from 'react-admin';
import { DataProviderFactory } from './DataProviderFactory';

const dataProviderLists: Record<string, DataProviderFactory> = {};

function getDataProvider(key: string): DataProviderFactory {
  const res = dataProviderLists[key];
  if (!res) throw new Error('DataProvider not found');
  return res;
}

export const dataProvider: DataProvider<string> = {
  getList: async <RecordType extends RaRecord = any>(
    resource: string,
    params: { pagination: { page: any; perPage: any }; filter: any; sort: any },
  ) => {
    const result = await getDataProvider(resource).getList({
      pagination: {
        offset: params.pagination.page,
        limit: params.pagination.perPage,
      },
      query: params.filter,
      sort: params.sort,
    });
    const data: RecordType[] = result.data.map((d) => {
      const { _id, ...rest } = d;
      return { id: _id, ...rest } as RecordType;
    });

    return {
      data,
      total: result.total,
    };
  },

  getOne: async <RecordType extends RaRecord = any>(
    resource: string,
    params: GetOneParams,
  ) => {
    const { _id, ...rest } = await getDataProvider(resource).getOne(params.id);
    return { data: { id: _id, ...rest } as RecordType };
  },

  getMany: async <RecordType extends RaRecord = any>(
    resource: string,
    params: GetManyParams,
  ) => {
    return {
      data: (
        await Promise.all(
          params.ids.map((id) => dataProvider.getOne(resource, { id })),
        )
      ).map((d) => d.data as RecordType),
    };
  },

  getManyReference: <RecordType extends RaRecord = any>(
    resource: string,
    params: GetManyReferenceParams,
  ) => {
    return dataProvider.getList<RecordType>(resource, {
      filter: { ...params.filter, [params.target]: params.id },
      pagination: params.pagination,
      sort: params.sort,
    });
  },

  create: async <RecordType extends RaRecord = any>(
    resource: string,
    params: CreateParams,
  ) => {
    return {
      data: (await getDataProvider(resource).create(params.data)) as RecordType,
    };
  },

  update: async <RecordType extends RaRecord = any>(
    resource: string,
    params: UpdateParams,
  ) => {
    return {
      data: (await getDataProvider(resource).update(
        params.id as string,
        params.data,
      )) as RecordType,
    };
  },

  updateMany: async <RecordType extends RaRecord = any>(
    resource: string,
    params: UpdateManyParams,
  ) => {
    return {
      data: (
        await Promise.all(
          params.ids.map((id) => {
            return dataProvider.update(resource, {
              id,
              data: params.data,
              previousData: null as unknown as any,
            });
          }),
        )
      ).map((d) => d.data._id as RecordType['id']),
    };
  },

  delete: async <RecordType extends RaRecord = any>(
    resource: string,
    params: DeleteParams,
  ) => {
    return {
      data: (await getDataProvider(resource).delete(params.id)) as RecordType,
    };
  },

  deleteMany: async <RecordType extends RaRecord = any>(
    resource: string,
    params: DeleteManyParams,
  ) => {
    return {
      data: (
        await Promise.all(
          params.ids.map((id) => dataProvider.delete(resource, { id })),
        )
      ).map((v) => v.data.id),
    };
  },
};
