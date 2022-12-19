import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
  },
});
