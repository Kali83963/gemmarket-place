import { UserProfile } from "types/user-profile";

// ==============================|| TYPES - AUTH ||============================== //

export type Auth0ContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  logout: () => void;
  login: () => void;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: VoidFunction;
};

export interface JWTData {
  userId: string;
}

export type JWTContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  logout: () => void;
  authLogin: (response: { data: any; message: any }) => Promise<void>;
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: VoidFunction;
};
