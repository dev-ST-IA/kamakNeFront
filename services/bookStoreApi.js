// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookStoreApi = createApi({
  reducerPath: "bookStoreApi",
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
  tagTypes: ["Books", "User", "Orders", "Cart"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (options) => {
        const { Size, Sort, Page, category } = options;
        return {
          url: "book/getAll/",
          params: { Size, Sort, Page, category },
        };
      },
      transformResponse: (response, meta, arg) => {
        return response;
      },
      providesTags: (result) => {
        return result
          ? [
              ...result.books["$values"].map((book) => ({
                type: "Books",
                id: book.id,
              })),
              { type: "Books", id: "LIST" },
            ]
          : [{ type: "Books", id: "LIST" }];
      },
    }),
    getBook: builder.query({
      query: (id) => `book/get/${id}`,
      transformResponse: (response, meta, arg) => {
        return response;
      },
      providesTags: (result) => [{ type: "Books", id: "LIST" }],
    }),
    getAllCategories: builder.query({
      query: () => "category/getAll",
      transformResponse: (response, meta, arg) => response["$values"],
      providesTags: (result) => [{ type: "Books", id: "LIST" }],
    }),
    getAllBooksSearch: builder.query({
      query: (search) => {
        return {
          url: "book/getAll/",
          params: { search },
        };
      },
      transformResponse: (response, meta, arg) => {
        return response.books["$values"];
      },
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "user/login/customer",
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
        url: "user/create/customer",
        method: "POST",
        body: body,
      }),
      transformResponse: (result, meta, arg) => {
        return result;
      },
      invalidatesTags: ["User"],
    }),
    getUser: builder.query({
      query: () => "user/get",
      providesTags: (result) => ["User"],
      transformResponse: (result, meta, arg) => {
        return result;
      },
    }),
    // cart
    getCart: builder.query({
      query: () => "cart/get",
      transformResponse: (result) => {
        const products = result["$values"];
        const cartItems = products.map((product) => {
          const values = {
            id: product.product.id,
            title: product.product.title,
            author: product.product.author,
            price: product.product.price,
            units: product.product.units,
            publisher: product.product.publisher,
            quantity: product.quantity,
            totalPrice: product.totalPrice,
          };
          return values;
        });
        return cartItems;
      },
      providesTags: (result) => [{ type: "Cart", id: "LIST" }],
    }),
    addProductToCart: builder.mutation({
      query: ({ productId, quantity }) => {
        return {
          url: `cart/add/${productId}/${quantity}`,
          method: "PUT",
        };
      },
      invalidatesTags: (result) => [{ type: "Cart", id: "LIST" }],
    }),
    deleteProductInCart: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `cart/delete/${id}`,
          method: "PUT",
        };
      },
      invalidatesTags: (result) => [{ type: "Cart", id: "LIST" }],
    }),
    editProductInCart: builder.mutation({
      query: ({ productId, quantity }) => {
        return {
          url: `cart/edit/${productId}/${quantity}`,
          method: "PUT",
        };
      },
      invalidatesTags: (result) => [{ type: "Cart", id: "LIST" }],
    }),
    clearProductsInCart: builder.mutation({
      query: () => {
        return {
          url: `cart/clear`,
          method: "PUT",
        };
      },
      invalidatesTags: (result) => [{ type: "Cart", id: "LIST" }],
    }),

    // order
    placeOrder: builder.mutation({
      query: () => {
        return {
          url: "order/place",
          method: "POST",
        };
      },
      invalidatesTags: (result) => {
        return [
          {
            type: "Books",
            id: "LIST",
          },
          {
            type: "Orders",
            id: "LIST",
          },
          {
            type: "Cart",
            id: "LIST",
          },
        ];
      },
    }),
    getAllOrders: builder.query({
      query: (options) => {
        const { Size, Sort, Page, category, search } = options;
        const qParams = { Size, Sort, Page, category };
        if (search != null && search != "") {
          qParams.search = search;
        }
        return {
          url: "order/getAll/",
          params: qParams,
        };
      },
      transformResponse: (result) => {
        return {
          rows: result?.orders["$values"],
          totalPages: result?.totalPages,
        };
      },
      providesTags: (result) => {
        return result
          ? [
              ...result.rows.map((book) => ({
                type: "Orders",
                id: book.id,
              })),
              { type: "Orders", id: "LIST" },
            ]
          : [{ type: "Orders", id: "LIST" }];
      },
    }),
    editOrder: builder.mutation({
      query: ({ id, status }) => {
        return {
          url: `order/put/${id}`,
          method: "PUT",
          params: {
            status: status,
          },
        };
      },
      invalidatesTags: (result) => [{ type: "Orders", id: "LIST" }],
    }),
    getOrder: builder.query({
      query: (id) => `order/get/${id}`,
      transformResponse: (response, meta, arg) => {
        const cartProducts = response.cartProducts["$values"];
        const filteredCartProducts = cartProducts.map((item) => ({
          ...item,
          id: item.product.id,
        }));
        return {
          ...response,
          cartProducts: filteredCartProducts,
        };
      },
      providesTags: (result) => [{ type: "Books", id: result?.id }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllBooksQuery,
  useGetBookQuery,
  useGetAllCategoriesQuery,
  useGetAllBooksSearchQuery,
  useGetUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useGetCartQuery,
  useAddProductToCartMutation,
  useClearProductsInCartMutation,
  useDeleteProductInCartMutation,
  useEditProductInCartMutation,
  useEditOrderMutation,
  useGetAllOrdersQuery,
  usePlaceOrderMutation,
  useGetOrderQuery,
} = bookStoreApi;
