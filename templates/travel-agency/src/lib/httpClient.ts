import axios from "axios";
import { API_FETCH_TIMEOUT, apiUrl } from "./contants";

const httpClient = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    timeout: API_FETCH_TIMEOUT * 1000
})

httpClient.defaults.headers.common['Content-Type'] = 'application/json';

httpClient.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => Promise.reject(error)
)

httpClient.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => Promise.reject(error)
)

httpClient.interceptors.response.use(
    (response) => response, async (error) => {
        return Promise.reject(error)
    }
);
export default httpClient;