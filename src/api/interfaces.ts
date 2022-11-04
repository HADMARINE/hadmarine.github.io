export interface GetApiQueryBase {
  limit?: number;
  offset?: number;
  date?: {
    from?: Date;
    to?: Date;
  };
}
