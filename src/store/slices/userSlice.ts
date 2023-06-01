import { getStorageItem } from "../../utils/storage";
import { apiSlice } from "./apiSlice";
const USER_API = "/api/v1";
const auth = getStorageItem('auth')

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `${USER_API}/auth`,
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: `${USER_API}/auth/signup`,
        method: "POST",
        body,
      }),
    }),
    preferences: builder.mutation({
      query: (body) => ({
        url: `${USER_API}/preferences`,
        headers: { 'Accept': 'application/json' },
        method: "POST",
        body: JSON.stringify(body),
        'Authorization': `Bearer ${auth.token}`
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USER_API}/auth/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, usePreferencesMutation, useLogoutMutation } =
  userApiSlice;
