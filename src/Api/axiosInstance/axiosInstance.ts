import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://front-test.beta.aviasales.ru/',
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    const status = error.response ? error.response.status : null;
    console.error(new Error(error.message));
    if (status === 500) {
      return axiosInstance.request(error.config);
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
