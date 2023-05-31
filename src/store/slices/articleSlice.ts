import { apiSlice } from "./apiSlice";
const ARTICLE_API = "/api/v1/articles";

export const articleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    articles: builder.mutation({
      query: (data) => ({
        url: `${ARTICLE_API}`,
        method: "GET",
        params: data.query,
      }),
    }),
    headlines: builder.mutation({
      query: () => ({
        url: `${ARTICLE_API}/headlines`,
        method: "GET",
      }),
    }),
    search: builder.mutation({
      query: (data) => ({
        url: `${ARTICLE_API}/search?keywords=${data.keywords}`,
        method: "GET",
      }),
    }),
    fetch: builder.mutation({
      query: (data) => ({
        url: `${ARTICLE_API}/${data.url}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useArticlesMutation,
  useSearchMutation,
  useFetchMutation,
  useHeadlinesMutation,
} = articleApiSlice;
