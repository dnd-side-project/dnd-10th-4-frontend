import axios from 'axios';

const baseInstance = axios.create({
  baseURL: 'http://localhost:3000', // TODO: 백엔드 URI로 변경 및 환경 변수로 관리
  timeout: 30000,
  withCredentials: true,
});

export default baseInstance;
