import { apiSlice } from "../api";

export const articlesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (portalId: number) => `/articles/${portalId}`,
    }),
  }),
});

export const { 
  useGetArticlesQuery, 
} = articlesApi;