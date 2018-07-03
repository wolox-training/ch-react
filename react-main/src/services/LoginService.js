import api from '../config/api';

export const login = async () => {
  const response = await api.get('/users');
  if (response.ok) {
    return response.data;
  }
  throw response;
};
