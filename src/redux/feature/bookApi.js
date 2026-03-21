import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
  reducerPath: 'bookApi',

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL || 'http://localhost:4000',
    credentials: 'include',

    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ['Books'],

  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => '/api/books/get-book',
      providesTags: ['Books'],
    }),

    fetchBookById: builder.query({
      query: (id) => `/api/books/get-book/${id}`,
    }),

    addBook: builder.mutation({
      query: (book) => ({
        url: '/api/books/create-book',
        method: 'POST',
        body: book,
      }),
      invalidatesTags: ['Books'],
    }),

    updateBook: builder.mutation({
      query: ({ id, ...book }) => ({
        url: `/api/books/update-book/${id}`,
        method: 'PUT',
        body: book,
      }),
      invalidatesTags: ['Books'],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/api/books/delete-book/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),
  }),
});

// ✅ Export hooks
export const {
  useFetchAllBooksQuery,
  useFetchBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;


export default bookApi;