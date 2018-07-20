import api from '../config/api';

export const getHistory = async () => api.get('/history');

export const saveHistory = async board => api.put('/history/1', { game: board });
