import api from '../config/api';

export const login = async () => api.get('/users');
