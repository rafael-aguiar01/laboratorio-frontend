import { apiSlice } from "../api";

export const articlesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (portalId: number) => `/articles/${portalId}`,
    }),
    getCategoryArticles: builder.query({
      query: ({portalId, category}) => `/articles/${portalId}/${category}`,
    }),
    getArticle: builder.query({
      query: (slug: string) => `/articles/slug/${slug}`,
    }),
  }),
});

export const { 
  useGetArticlesQuery, 
  useGetCategoryArticlesQuery,
  useGetArticleQuery
} = articlesApi;