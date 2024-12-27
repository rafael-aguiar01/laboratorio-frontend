import { apiSlice } from "../api";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query({
      query: (portalId: number) => `/users/${portalId}`,
    }),
  }),
});

export const { 
  useGetAuthorsQuery, 
} = usersApi;