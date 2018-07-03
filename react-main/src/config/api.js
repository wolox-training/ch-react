import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': true
  },
  timeout: 5000
});

export default api;
