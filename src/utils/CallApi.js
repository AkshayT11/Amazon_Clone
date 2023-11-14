import axios from 'axios'
import { BASE_URL } from './constants'

const config = {
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
}

export const CallApi = async (resource) => {
    const {data} = await axios.get(`${BASE_URL}/${resource}`, config)
    return data;
} 