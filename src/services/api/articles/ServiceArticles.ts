import { apiSlice } from "../api";

export const articlesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (portalId: number) => `/articles/${portalId}`,
    }),
    getCategoryArticles: builder.query({
      query: ({portalId, category}) => `/articles/${portalId}/${category}`,
    }),
    getTagArticles: builder.query({
      query: ({portalId, tag}) => `/articles/tag/${portalId}/${tag}`,
    }),
    getArticle: builder.query({
      query: (slug: string) => `/articles/slug/${slug}`,
    }),
  }),
});

export const { 
  useGetArticlesQuery, 
  useGetCategoryArticlesQuery,
  useGetTagArticlesQuery,
  useGetArticleQuery
} = articlesApi;