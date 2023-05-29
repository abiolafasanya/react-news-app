import { apiSlice } from './apiSlice';
const ARTICLE_API = '/api/v1/articles';

export const articleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    articles: builder.mutation({
      query: () => ({
        url: `${ARTICLE_API}`,
        method: 'GET',
      }),
    }),
    headlines: builder.mutation({
      query: () => ({
        url: `${ARTICLE_API}/headlines`,
        method: 'GET',
      }),
    })
  }),
});

export const { useArticlesMutation, useHeadlinesMutation } = articleApiSlice;
