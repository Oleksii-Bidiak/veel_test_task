export const SERVER_URL = process.env.SERVER_URL || 'http://localhost:5000';

export const API_URL = {
  root: (url = '') => `${url ? url : ''}`,
  todos: (url = '') => API_URL.root(`/todos${url}`),
};
