import { AxiosError } from "axios";
import { z } from "zod";

export type TMetaItem = {
  page: number;
  perPage: number;
  totalPage: number;
  nextPage: number | null;
  prevPage: number | null;
};

export const VSMetaRequest = z
  .object({
    search: z.string(),
    page: z.number(),
    perPage: z.number(),
  })
  .optional();

export type TMetaResponse<T, M = TMetaItem> = {
  data: T;
  meta: M;
};

export type TMetaErrorResponse = AxiosError<TMetaItem>;
