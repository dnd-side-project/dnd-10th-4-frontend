import axios from 'axios';
import { BACKEND_ENDPOINT } from '@/constants/endpoint';

const baseInstance = axios.create({
  baseURL: BACKEND_ENDPOINT,
  timeout: 30000,
  withCredentials: true,
});

export default baseInstance;
