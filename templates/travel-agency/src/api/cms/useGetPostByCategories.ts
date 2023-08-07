import {useQuery } from '@tanstack/react-query';
import type {
  UseQueryOptions,
} from '@tanstack/react-query';
import apiRoutes from '@/lib/apiRoutes';
import httpClient from '@/lib/httpClient';

import type {
  DefaultCmsDataResponse,
  DefaultCmsError,
  DefaultCmsResponse,
} from '../types';
import { PostsResponse } from './types';
import { AxiosRequestConfig } from 'axios';


export const getPostByCategoriesFn = async (category: string, currentPost: string,
    config?: AxiosRequestConfig) => {
  const response = await httpClient.get<
    DefaultCmsResponse<DefaultCmsDataResponse<PostsResponse>[]>
  >(apiRoutes.cms.post.postByCategories(category, currentPost), config);
  return response.data;
};

export const useGetPostByCategories = (
    category: string,
    currentPost: string,
    opts?: UseQueryOptions<
    DefaultCmsResponse<DefaultCmsDataResponse<PostsResponse>[]>,
    DefaultCmsError
  >
) =>
  useQuery<DefaultCmsResponse<DefaultCmsDataResponse<PostsResponse>[]>, DefaultCmsError>(
    [apiRoutes.cms.post.postByCategories(category, currentPost)],
    () => getPostByCategoriesFn(category, currentPost),
    opts
  );


