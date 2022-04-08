import api from './api';

export const postApi = () => ({
  createPost: async (post, token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.post(`post`, post, config);
    console.log(data);
    return data;
  },
});
