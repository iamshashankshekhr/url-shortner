import axiosClient from "../../../api/axiosClient.js";



export const shortenUrlApi = async (originalUrl) => {
  const response = await axiosClient.post('/api/url', { originalUrl });
  return response.data;
};