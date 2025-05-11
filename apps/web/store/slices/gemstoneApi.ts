import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

interface GemstoneImage {
  url: string;
}

interface GemstoneUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string | null;
  role: string;
  createdAt: string;
  isActive: boolean;
}

export interface Gemstone {
  id: number;
  name: string;
  type: string;
  shape: string;
  description: string;
  treatment: string;
  weight: number;
  dimension: string;
  certification: string;
  color_grade: string;
  clarity_grade: string;
  cut_grade: string;
  polish: string;
  symmetry: string;
  fluorescence: string;
  color: string;
  transparency: string;
  color_saturation: string;
  additional_specification: string;
  price: number;
  origin: string;
  certification_document: string;
  certificationStatus: string;
  sellerId: number;
  status: string;
  quantity: number;
  sku: string;
  allowOffers: boolean;
  showOnSaleLabel: boolean;
  chargeForShipping: boolean;
  isFeatured: boolean;
  isActive: boolean;
  userId: string;
  verifiedById: string | null;
  user: GemstoneUser;
  verifiedBy: GemstoneUser | null;
  images: GemstoneImage[];
  createdAt: string;
  updatedAt: string;
  blockchainHash: string;
  blockchainGemstoneId: string | null;
}

export interface CartItem {
  id?: number;
  productId: number;
  quantity: number;
  price: number;
  size: string;
  color: string;
  product?: Gemstone;
}

export interface Cart {
  id: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  items: CartItem[];
}

interface GemstoneListResponse {
  data: Gemstone[];
  message: string;
}

interface GemstoneSingleResponse {
  data: Gemstone;
  message: string;
}

interface CartResponse {
  data: Cart;
  message: string;
}

interface GemstoneQueryParams {
  searchQuery?: string;
  featured?: boolean;
  sort?: string;
  order?: "asc" | "desc";
  limit?: number;
  type?: string;
  shape?: string;
  color?: string;
  minPrice?: number;
  maxPrice?: number;
  certification?: string;
  origin?: string;
  clarity_grade?: string;
  cut?: string;
}

interface OrderItem {
  id: string;
  orderId: string;
  productId: number;
  quantity: number;
  price: number;
  color?: string;
  size?: string;
  product?: Gemstone;
}

interface OrderRequest {
  shipping: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    notes?: string;
  };
  payment: {
    nameOnCard: string;
    token: string;
  };
  shippingCost: number;
  tax: number;
}

interface OrderResponse {
  data: {
    id: string;
    userId: string;
    totalAmount: number;
    shippingCost: number;
    tax: number;
    status: string;
    orderItems: OrderItem[];
    createdAt: string;
    updatedAt: string;
    shippingInfoId: string;
    paymentInfoId: string;
  };
  message: string;
}

interface OrdersResponse {
  data: {
    id: string;
    userId: string;
    totalAmount: number;
    shippingCost: number;
    tax: number;
    status: string;
    orderItems: OrderItem[];
    createdAt: string;
    updatedAt: string;
    shippingInfoId: string;
    paymentInfoId: string;
  }[];
  message: string;
}

export const gemstoneApi = createApi({
  reducerPath: "gemstoneApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: "include",
  }),
  tagTypes: ["Gemstone", "Cart", "Order"],
  endpoints: (builder) => ({
    getGemstones: builder.query<Gemstone[], GemstoneQueryParams>({
      query: (params) => {
        const queryParams = new URLSearchParams();

        // Add searchQuery if provided
        if (params.searchQuery) {
          queryParams.append("searchQuery", params.searchQuery);
        }

        // Add featured flag if provided
        if (params.featured !== undefined) {
          queryParams.append("featured", params.featured.toString());
        }

        // Add other optional parameters
        if (params.sort) queryParams.append("sort", params.sort);
        if (params.order) queryParams.append("order", params.order);
        if (params.limit) queryParams.append("limit", params.limit.toString());
        if (params.type) queryParams.append("type", params.type);
        if (params.shape) queryParams.append("shape", params.shape);
        if (params.color) queryParams.append("color", params.color);
        if (params.minPrice)
          queryParams.append("minPrice", params.minPrice.toString());
        if (params.maxPrice)
          queryParams.append("maxPrice", params.maxPrice.toString());
        if (params.certification)
          queryParams.append("certification", params.certification);
        if (params.origin) queryParams.append("origin", params.origin);

        return {
          url: `/gemstone?${queryParams.toString()}`,
        };
      },
      transformResponse: (response: GemstoneListResponse) => response.data,
      providesTags: ["Gemstone"],
    }),
    getGemstoneById: builder.query<Gemstone, number>({
      query: (id) => `/gemstone/${id}`,
      transformResponse: (response: GemstoneSingleResponse) => response.data,
      providesTags: (result, error, id) => [{ type: "Gemstone", id }],
    }),
    createGemstone: builder.mutation({
      query: (data) => ({
        url: "/gemstone",
        method: "POST",
        body: data,
      }),
      // transformResponse: (response: Gemstone) => response.data,
      // invalidatesTags: [{ type: "Gemstone", id: "LIST" }],
    }),
    updateGemstoneBlockChainId: builder.mutation<
      void,
      { id: number; blockChainId: number | string }
    >({
      query: ({ id, blockChainId }) => ({
        url: `/gemstone/block-chain/${id}`,
        method: "PUT",
        body: { blockChainId },
      }),
    }),
    addToCart: builder.mutation<void, { itemData: CartItem }>({
      query: (data) => ({
        url: "/cart/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeFromCart: builder.mutation<void, { gemstoneId: number }>({
      query: (data) => ({
        url: `/cart/remove/${data.gemstoneId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
    clearCart: builder.mutation<void, void>({
      query: () => ({
        url: "/cart/clear",
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
    getCart: builder.query<Cart, void>({
      query: () => "/cart",
      transformResponse: (response: CartResponse) => response.data,
      providesTags: ["Cart"],
    }),
    placeOrder: builder.mutation<OrderResponse, OrderRequest>({
      query: (orderData) => ({
        url: "/order",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["Cart"],
    }),
    getOrders: builder.query<OrdersResponse["data"], void>({
      query: () => "/order",
      transformResponse: (response: OrdersResponse) => response.data,
      providesTags: ["Order"],
    }),
  }),
});

export const {
  useGetGemstonesQuery,
  useGetGemstoneByIdQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useGetCartQuery,
  useCreateGemstoneMutation,
  useUpdateGemstoneBlockChainIdMutation,
  useClearCartMutation,
  usePlaceOrderMutation,
  useGetOrdersQuery,
} = gemstoneApi;
