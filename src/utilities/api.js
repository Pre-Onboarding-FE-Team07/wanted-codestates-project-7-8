import axios from 'axios';
import { API_URL } from '../constants/api';

export const getDataFromApi = async (pageNo) => {
  try {
    const res = await axios.get(API_URL, { params: { pageNo } });
    return JSON.parse(res.data).response.filter((_, i) => i & 1);
  } catch (error) {
    console.error(error);
  }
};
