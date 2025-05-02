"use client";

import React, { createContext, useEffect, useReducer } from "react";
import { jwtDecode } from "jwt-decode";
import { LOGIN, LOGOUT } from "store/actions";
import axios from "utils/axios";
import { InitialLoginContextProps, KeyedObject } from "@/types";
import { JWTContextType } from "@/types/auth";
import accountReducer from "@/store/accountReducer";
import Loader from "@/components/Loader";

// constant
const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

const verifyToken: (st: string) => boolean = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  const decoded: KeyedObject = jwtDecode(serviceToken);
  /**
   * Property 'exp' does not exist on type '<T = unknown>(token: string, options?: JwtDecodeOptions | undefined) => T'.
   */
  return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken?: string | null) => {
  if (serviceToken) {
    localStorage.setItem("serviceToken", serviceToken);
    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem("serviceToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem("serviceToken");
        if (serviceToken && verifyToken(serviceToken)) {
          setSession(serviceToken);
          const response = await axios.get("/api/account/me");
          const { user } = response.data;
          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user,
            },
          });
        } else {
          dispatch({
            type: LOGOUT,
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: LOGOUT,
        });
      }
    };

    init();
  }, []);

  const authLogin = async (response: { data: any; message: any }) => {
    const { data } = response.data;
    dispatch({
      type: LOGIN,
      payload: {
        isLoggedIn: true,
        user: data,
      },
    });
  };

  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    // todo: this flow need to be recode as it not verified
    const response = await axios.post("/api/account/register", {
      email,
      password,
      firstName,
      lastName,
    });
    let users = response.data;

    if (
      window.localStorage.getItem("users") !== undefined &&
      window.localStorage.getItem("users") !== null
    ) {
      const localUsers = window.localStorage.getItem("users");
      users = [
        ...JSON.parse(localUsers!),
        {
          email,
          password,
          name: `${firstName} ${lastName}`,
        },
      ];
    }

    window.localStorage.setItem("users", JSON.stringify(users));
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
  };

  const resetPassword = async (email: string) => {};

  const updateProfile = () => {};

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return (
    <JWTContext.Provider
      value={{
        ...state,
        authLogin,
        logout,
        register,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </JWTContext.Provider>
  );
};

export default JWTContext;
