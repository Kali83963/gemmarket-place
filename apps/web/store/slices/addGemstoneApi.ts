// src/store/slices/gemstoneApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { GemstoneFormData } from '@/lib/validations/gemstone';

// Define response types
interface GemstoneResponse {
  data: Gemstone;
  message: string;
}

interface GemstoneListResponse {
  data: Gemstone[];
  message: string;
  pagination: {
    total: number;
    page: number;
    limit: number;
  };
}

// Define a Gemstone type
export interface Gemstone {
  id: string;
  title: string;
  gemstoneType: string;
  shape: string;
  description: string;
  origin?: string;
  treatment?: string;
  carat: number;
  dimensions?: string;
  certification?: string;
  color?: string;
  clarity?: string;
  cut?: string;
  polish?: string;
  symmetry?: string;
  fluorescence?: string;
  colorHue?: string;
  transparency?: string;
  colorSaturation?: string;
  additionalSpecs?: string;
  price: number;
  comparePrice?: number;
  quantity: number;
  sku?: string;
  allowOffers: boolean;
  showComparePriceLabel: boolean;
  chargeShipping: boolean;
  listingStatus: string;
  featured: boolean;
  images: string[];
  certificates: string[];
  createdAt: string;
  updatedAt: string;
  sellerId: string;
}

export const gemstoneApi = createApi({
  reducerPath: 'gemstoneApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
    credentials: 'include',
  }),
  tagTypes: ['Gemstone'],
  endpoints: (builder) => ({
    // Get all gemstones with filtering and pagination
    getGemstones: builder.query<GemstoneListResponse, { 
      page?: number; 
      limit?: number; 
      sort?: string;
      type?: string;
      minPrice?: number;
      maxPrice?: number;
    }>({
      query: (params = {}) => ({
        url: '/gemstones',
        params,
      }),
      providesTags: (result) => 
        result
          ? [
              ...result.data.map(({ id }) => ({ type: 'Gemstone' as const, id })),
              { type: 'Gemstone', id: 'LIST' },
            ]
          : [{ type: 'Gemstone', id: 'LIST' }],
    }),
    
    // Get a single gemstone by ID
    getGemstone: builder.query<Gemstone, string>({
      query: (id) => `/gemstones/${id}`,
      transformResponse: (response: GemstoneResponse) => response.data,
      providesTags: (result, error, id) => [{ type: 'Gemstone', id }],
    }),
    
    // Create a new gemstone
    createGemstone: builder.mutation<Gemstone, GemstoneFormData>({
      query: (gemstone) => ({
        url: '/gemstone',
        method: 'POST',
        body: gemstone,
      }),
      transformResponse: (response: GemstoneResponse) => response.data,
      invalidatesTags: [{ type: 'Gemstone', id: 'LIST' }],
    }),
    
    // Update an existing gemstone
    updateGemstone: builder.mutation<Gemstone, { id: string; data: Partial<GemstoneFormData> }>({
      query: ({ id, data }) => ({
        url: `/gemstones/${id}`,
        method: 'PUT',
        body: data,
      }),
      transformResponse: (response: GemstoneResponse) => response.data,
      invalidatesTags: (result, error, { id }) => [
        { type: 'Gemstone', id },
        { type: 'Gemstone', id: 'LIST' },
      ],
    }),
    
    // Delete a gemstone
    deleteGemstone: builder.mutation<void, string>({
      query: (id) => ({
        url: `/gemstones/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Gemstone', id },
        { type: 'Gemstone', id: 'LIST' },
      ],
    }),
    
    // Get seller's gemstones
    getSellerGemstones: builder.query<GemstoneListResponse, { 
      page?: number; 
      limit?: number; 
    }>({
      query: (params = {}) => ({
        url: '/seller/gemstones',
        params,
      }),
      providesTags: (result) => 
        result
          ? [
              ...result.data.map(({ id }) => ({ type: 'Gemstone' as const, id })),
              { type: 'Gemstone', id: 'SELLER_LIST' },
            ]
          : [{ type: 'Gemstone', id: 'SELLER_LIST' }],
    }),
  }),
});

export const {
  useGetGemstonesQuery,
  useGetGemstoneQuery,
  useCreateGemstoneMutation,
  useUpdateGemstoneMutation,
  useDeleteGemstoneMutation,
  useGetSellerGemstonesQuery,
} = gemstoneApi;