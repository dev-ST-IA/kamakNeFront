// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const kamakNeApi = createApi({
  reducerPath: "kamakNeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Posts", "User", "Comments"],
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (options) => {
        const { Page } = options;
        return {
          url: "post/all/",
          params: { Page },
        };
      },
      transformResponse: (response, meta, arg) => {
        return response?.data;
      },
      providesTags: (result) => {
        return result
          ? [
              ...result.docs.map((post) => ({
                type: "Posts",
                id: post._id,
              })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }];
      },
    }),
    getAllComments: builder.query({
      query: (options) => {
        const { Page, Id } = options;
        return {
          url: "comment/all/",
          params: { Page, Id },
        };
      },
      transformResponse: (response, meta, arg) => {
        return response?.data;
      },
      providesTags: (result) => {
        return result
          ? [
              ...result.docs.map((comment) => ({
                type: "Comments",
                id: comment._id,
              })),
              { type: "Comments", id: result?.docs[0]?.post },
            ]
          : [{ type: "Comments", id: "LIST" }];
      },
    }),
    getComment: builder.query({
      query: ({ id }) => {
        return {
          url: "comment/get/",
          params: { id },
        };
      },
      transformResponse: (response, meta, arg) => {
        return response?.data;
      },
      providesTags: (result) => {
        return result
          ? [{ type: "Comments", id: result._id }]
          : [{ type: "Comments", id: "LIST" }];
      },
    }),
    createComment: builder.mutation({
      query: ({ postId, comment }) => ({
        url: "comment/create",
        body: {
          postId,
          comment,
        },
        method: "POST",
      }),
      transformResponse: (result, meta, args) => result?.data,
      invalidatesTags: (result) => {
        return [
          { type: "Comments", id: result._id },
          { type: "Comments", id: result.post },
        ];
      },
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "user/login",
        method: "POST",
        body: body,
      }),
      transformResponse: (result, meta, args) => {
        return result;
      },
      invalidatesTags: ["User"],
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "user/register",
        method: "POST",
        body: body,
      }),
      transformResponse: (result, meta, arg) => {
        return result?.data;
      },
      invalidatesTags: ["User"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginMutation,
  useRegisterMutation,
  useGetAllPostsQuery,
  useGetAllCommentsQuery,
  useCreateCommentMutation,
  useGetCommentQuery,
} = kamakNeApi;
