import { apiSlice } from "../api";

export const articlesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (portalId: number) => `/articles/${portalId}`,
    }),
    getArticle: builder.query({
      query: (slug: string) => `/articles/slug/${slug}`,
    }),
  }),
});

export const { 
  useGetArticlesQuery, 
  useGetArticleQuery
} = articlesApi;