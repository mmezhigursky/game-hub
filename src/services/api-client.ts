import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
    }

const axiosInstant = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: import.meta.env.VITE_RAWG_API_KEY
    }
});

class ApiClient<T> {
    endpoint: string;
    constructor(endpoint: string) { 
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig = {}) => {
        return axiosInstant
        .get<FetchResponse<T>>(this.endpoint, config)
        .then((res) => res.data);
    }
}

export default ApiClient;