import api from './api';

export const postApi = () => ({
  createPost: async (post, token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.post(`post`, post, config);
    return data;
  },
  getPosts: async (token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.get(`post`, config);
    return data;
  },

  deletePost: async (id, token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.delete(`post/${id}`, config);
    return data;
  },
});
