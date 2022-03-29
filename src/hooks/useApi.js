import api from '../services/api';

export const useApi = () => ({
  signIn: async (email, password) => {
    const { data } = await api.post('/login', { email, password });
    return data;
  },
  getUserData: async (id, token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.get(`user/${id}`, config);
    return data;
  },
});
