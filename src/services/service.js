import axios from "axios";
import { API_ENDPOINTS } from "../utils/APIEnpoints";
import toast from "react-hot-toast";
axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
  
      } else if (error?.response?.status === 403) {
      } else if (error?.response?.status === 404) {
        toast?.error("Data Not Found");
      } else if (error?.response?.status === 400) {
  
      } else {
        alert(error?.message || "Network Error");
      }
      return Promise.reject(error);
    }
  );
export const getRandonQuotes = async (params) => {
    try {
        const res = await axios.get(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.RANDOM_QIOTES}?${API_ENDPOINTS.QUOTES_TAGS}=${params}`)
        if (res.statusText === "OK") {
            return  res?.data
            
        }
    } catch (error) {
        console.log('error', error)
    }
}

export const getTags= async () => {
    try {
        const res = await axios.get(`${API_ENDPOINTS.BASE_URL}/${API_ENDPOINTS.QUOTES_TAGS}`)
        if (res.statusText === "OK") {
            return  res?.data
            
        }
    } catch (error) {
        console.log('error', error)
    }
}
