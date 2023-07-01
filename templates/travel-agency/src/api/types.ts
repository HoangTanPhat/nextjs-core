import type { AxiosError } from 'axios';

export type DefaultCmsResponse<T> = {
    data: T;
    meta: {
      pagination: CmsPagination;
    };
  };

  export type CmsPagination = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };

  export type DefaultCmsDataResponse<T> = {
    id: number;
    attributes: T;
  };

export type DefaultCmsError = {
    data: null;
    error: {
      status: number;
      name: string;
      message: string;
      details: Record<string, string>;
    };
  };

export type ApiError = {
    code: string;
    http_code: number;
    title: string;
    description: string;
    internal: string;
};
  
export type DefaultQueryError = AxiosError<ApiError>;