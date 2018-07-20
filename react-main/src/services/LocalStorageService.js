export const saveKey = key => window.localStorage.setItem('token', key);

export const getKey = () => window.localStorage.getItem('token');

export const deleteKey = () => window.localStorage.removeItem('token');