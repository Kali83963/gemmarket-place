import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { LoginInput, SignupInput } from "@/lib/validations/auth";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  role: string;
  createdAt: string;
  isActive: boolean;
}

interface AuthResponse {
  data: {
    user: User;
  };
  message: string;
}

interface ProfileResponse {
  data: User;
  message: string;
}

interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  picture?: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse["data"], LoginInput>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: AuthResponse) => response.data,
    }),
    signup: builder.mutation<AuthResponse["data"], SignupInput>({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
      transformResponse: (response: AuthResponse) => response.data,
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    getCurrentUser: builder.query<User, void>({
      query: () => "/auth/me",
      transformResponse: (response: { data: User; message: string }) =>
        response.data,
    }),
    getProfile: builder.query<User, void>({
      query: () => "/users/profile",
      transformResponse: (response: ProfileResponse) => response.data,
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation<User, UpdateProfileRequest>({
      query: (data) => ({
        url: "/users/profile",
        method: "PUT",
        body: data,
      }),
      transformResponse: (response: ProfileResponse) => response.data,
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = authApi;
