import axios from "axios";
import { API_ENDPOINTS } from "../utils/APIEnpoints";
export const getRandonQuotes = async (params) => {
    try {
        const res = await axios.get(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.RANDOM_QIOTES}?${API_ENDPOINTS.QUOTES_TAGS}=${params}`)
        if (res.statusText === "OK") {
            console.log('res', res)
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
