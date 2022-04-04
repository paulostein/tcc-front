import api from './api';

export const loginApi = () => ({
  signIn: async (email, password) => {
    const { data } = await api.post('/login', { email, password });
    return data;
  },
});
