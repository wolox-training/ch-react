export const saveKey = key => window.localStorage.setItem('token', key);

export const getKey = () => window.localStorage.getItem('token');
