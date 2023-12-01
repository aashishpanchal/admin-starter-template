import axios from 'axios';
import { api } from '../instance';
import { toast } from 'react-toastify';

class AuthApi {
  async login(email: string, password: string) {
    return await toast.promise(
      axios.post<Auth.AuthState>(
        `${import.meta.env.VITE_API_URL}/auth/login-with-cookie`,
        {
          email,
          password,
        },
      ),
      {
        pending: 'Loading in...',
        success: 'Successfully logged in!',
        error: {
          render({ data }: any) {
            const {
              response: {
                data: { message },
              },
            } = data;
            return message || 'Login failed!';
          },
        },
      },
    );
  }

  async logout() {
    return await toast.promise(api.get(`/auth/logout-with-cookie`), {
      pending: 'Loading in...',
      success: 'Successfully logout!',
      error: {
        render({ data }: any) {
          const {
            response: {
              data: { message },
            },
          } = data;
          return message || 'Logout failed!';
        },
      },
    });
  }

  async resendEmailCode(email: string) {
    return await api.post(`/auth/resend-email`, { email });
  }

  async verifyEmailCode(data: { email: string; code: string }) {
    return await api.post(`/auth/verify-email`, data);
  }
}

export const authApi = new AuthApi();
