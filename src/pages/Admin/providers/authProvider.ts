/* eslint-disable no-throw-literal */
import { AuthProvider } from 'react-admin';
import toast from 'react-hot-toast';
import { checkAdminAuthority, getAuthorities, login, logout } from '../../../api/auth';
import { ToastPromiseHandler } from '../../../util/ToastPromiseHandler';

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    if (!username || !password) {
      throw new Error();
    }

    const toastHandler = new ToastPromiseHandler();

    const result = await login({
      userid: username,
      password,
    });

    if (!result.result) {
      toastHandler.error(result.message);
      throw null;
    }

    toastHandler.success('Login Success!');
    return {
      redirectTo: '/admin/main',
    };
  },
  logout: async () => {
    const toastHandler = new ToastPromiseHandler();
    await logout();
    toastHandler.success('Logout Success!');
    return '/admin/login';
  },
  checkAuth: async () => {
    const result = await checkAdminAuthority();
    if (result.result) {
      return;
    }
    toast.error(result.message);
    throw null;
  },
  checkError: async (error) => {
    if (['AUTHORIZATION_INVALID', 'JWT_TOKEN_INVALID'].includes(error.code)) {
      toast.error(error.message);
      throw {
        redirectTo: '/admin/login',
      };
    }
    return;
  },
  getPermissions: async () => {
    const result = await getAuthorities();

  }
};
