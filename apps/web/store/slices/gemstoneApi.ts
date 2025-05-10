import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

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
}

export interface CartItem  {
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
  featured?: boolean;
  sort?: string;
  order?: 'asc' | 'desc';
  limit?: number;
  type?: string;
  shape?: string;
  color?: string;
  minPrice?: number;
  maxPrice?: number;
  certification?: string;
  origin?: string;
}

export const gemstoneApi = createApi({
  reducerPath: 'gemstoneApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
  }),
  tagTypes: ["Gemstone", "Cart"],
  endpoints: (builder) => ({
    getGemstones: builder.query<Gemstone[], GemstoneQueryParams>({
      query: (params) => {
        const queryParams = new URLSearchParams();
        
        // Add all non-undefined parameters to the query
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined) {
            queryParams.append(key, value.toString());
          }
        });

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
   
  }),
});

export const {
  useGetGemstonesQuery,
  useGetGemstoneByIdQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useGetCartQuery,
  useClearCartMutation,
} = gemstoneApi; 