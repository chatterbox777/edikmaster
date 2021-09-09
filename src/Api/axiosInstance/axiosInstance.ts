import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://front-test.beta.aviasales.ru/',
});
