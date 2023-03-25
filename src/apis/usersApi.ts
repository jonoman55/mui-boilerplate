// DOCS : https://redux-toolkit.js.org/rtk-query/usage-with-typescript
// DOCS : https://jsonplaceholder.typicode.com

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl: string = `${process.env.REACT_APP_BASE_API_URL}`;

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
};

type UsersResponse = User[];

type UserResponse = User;

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/users',
        responseHandler: async (res: Response) => await res.json(),
      }),
      transformResponse: (res: UsersResponse) => res,
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/users${id}`,
        responseHandler: async (res: Response) => await res.json(),
      }),
      transformResponse: (res: UserResponse) => res,
    }),
  })
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
} = usersApi;