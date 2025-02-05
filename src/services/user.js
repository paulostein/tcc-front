import api from './api';

export const userApi = () => ({
  getUserData: async (id, token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.get(`user/${id}`, config);
    return data;
  },
  getUsers: async (token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.get(`user`, config);
    return data;
  },
  deleteUser: async (id, token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.delete(`user/${id}`, config);
    return data;
  },
  createUser: async (user, token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.post(`user`, user, config);
    return data;
  },
  updateUser: async (user, token) => {
    const { id, ...userData } = user;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.put(`user/${id}`, userData, config);
    return data;
  },
});
