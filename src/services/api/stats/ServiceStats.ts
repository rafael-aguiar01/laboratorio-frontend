import { apiSlice } from "../api";

export const statsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStats: builder.query({
      query: (portalId: number) => `/articles/stats/${portalId}`,
    }),
  }),
});

export const { 
  useGetStatsQuery, 
} = statsApi;