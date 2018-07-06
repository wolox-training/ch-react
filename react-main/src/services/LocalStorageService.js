export const saveKey = key => window.localStorage.setItem('token', key);

export const getKey = () => window.localStorage.getItem('token');

export const deleteKey = () => window.localStorage.removeItem('token');

export const saveHistory = history => window.localStorage.setItem('gameHistory', history);

export const getHistory = () => window.localStorage.getItem('gameHistory');
