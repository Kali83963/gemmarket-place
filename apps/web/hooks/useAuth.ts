import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useLoginMutation, useSignupMutation, useLogoutMutation, useGetCurrentUserQuery } from '@/store/slices/authApi';
import { setCredentials, logout } from '@/store/slices/authSlice';
import { LoginInput, SignupInput } from '@/lib/validations/auth';

export const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loginMutation] = useLoginMutation();
  const [signupMutation] = useSignupMutation();
  const [logoutMutation] = useLogoutMutation();
  const { data: user, isLoading } = useGetCurrentUserQuery();

  const handleLogin = useCallback(async (credentials: LoginInput) => {
    try {
      const response = await loginMutation(credentials).unwrap();
      dispatch(setCredentials(response));
      router.push('/dashboard');
    } catch (error) {
      throw error;
    }
  }, [dispatch, loginMutation, router]);

  const handleSignup = useCallback(async (userData: SignupInput) => {
    try {
      const response = await signupMutation(userData).unwrap();
      dispatch(setCredentials(response));
      router.push('/dashboard');
    } catch (error) {
      throw error;
    }
  }, [dispatch, signupMutation, router]);

  const handleLogout = useCallback(async () => {
    try {
      await logoutMutation();
      dispatch(logout());
      router.push('/login');
    } catch (error) {
      throw error;
    }
  }, [dispatch, logoutMutation, router]);

  return {
    user,
    isLoading,
    login: handleLogin,
    signup: handleSignup,
    logout: handleLogout,
  };
}; 