import axios from 'axios';

export const axiosConfig = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  timeout: 15000
});
