import axios from 'axios';
import { API_URL } from '../constants/API';

const client = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
  },
});

client.interceptors.request.use(config => {
  const jwt = JSON.parse(localStorage.getItem('jwt'));
  const token = `Bearer ${jwt}`;
  config.headers.Authorization = token;
  return config;
});

client.interceptors.response.use(response => response, error => {
  console.log('Request got response with error:');
  console.log(error);
  return Promise.reject(error);
});

export default client;
