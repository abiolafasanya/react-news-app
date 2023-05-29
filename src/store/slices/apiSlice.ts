import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' });

export const apiSlice = createApi({ 
    baseQuery, 
    tagTypes: ['User', 'Article'],
    endpoints: (builder) => ({}),
});
