import axois from 'axios';

const baseUrl = 'http://127.0.0.1:1234/api/';

const instance = axois.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token') || '';
  
  if (token) {
    config.headers.authorization = token;
  }

  return config;
}, err => {
  return Promise.reject(err);
});

export default instance;
