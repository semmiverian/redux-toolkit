import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from './interface'

interface IApiResult {
  results: IUser[]
}

export const userApi = createApi({
  reducerPath: 'api/users',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/' }),

  endpoints: (builder) => ({
    getAllUserWithLimit: builder.query<IUser[], number>({
      query: (limit) => `?results=${limit}`,
      transformResponse: (response: IApiResult) => response.results,
    }),
  }),
})

export const { useGetAllUserWithLimitQuery } = userApi
