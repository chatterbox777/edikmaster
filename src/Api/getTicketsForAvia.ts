import { axiosInstance } from './axiosInstance/axiosInstance';
export const getAllTickets = async ({ searchId }) => {
  let response = await axiosInstance.get('tickets', {
    params: {
      searchId,
    },
  });
  return response.data;
};
export const getSearchId = async () => {
  const response = await axiosInstance.get('search');
  return response.data;
};
