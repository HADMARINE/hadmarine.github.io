/* eslint-disable no-throw-literal */
import { AuthProvider } from 'react-admin';
import toast from 'react-hot-toast';
import {
  checkAdminAuthority,
  getAuthorities,
  login,
  logout,
} from '../../../api/auth';
import { ToastPromiseHandler } from '../../../util/ToastPromiseHandler';

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    if (!username || !password) {
      throw new Error();
    }

    // const toastHandler = new ToastPromiseHandler();

    const result = await login({
      userid: username,
      password,
    });

    if (!result.result) {
      // toastHandler.error(result?.message);
      throw new Error(result?.message);
    }

    // toastHandler.success('Login Success!');
    return;
  },
  logout: async () => {
    await logout();
  },
  checkAuth: async () => {
    const result = await checkAdminAuthority();
    if (result.result) {
      return;
    }
    // toast.error(result?.message);
    throw new Error();
  },
  checkError: async (error) => {
    if (['AUTHORIZATION_INVALID', 'JWT_TOKEN_INVALID'].includes(error.code)) {
      toast.error(error?.message);
      // throw {
      //   redirectTo: '/login',
      // };
      throw new Error();
    }
    return;
  },
  getPermissions: async () => {
    const result = await getAuthorities();

    if (result.result) {
      return result.data;
    }

    return [];
  },
};
