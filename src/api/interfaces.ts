export interface GetApiQueryBase {
  pagination?: { limit?: number; offset?: number };
  query?: {
    date?: {
      from?: Date;
      to?: Date;
    };
  };
  sort?: {
    field: string;
    order: string;
  };
}
