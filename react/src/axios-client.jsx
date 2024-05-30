import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${process.env.VITE_API_BASE_URL}`,
});

axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const { response } = error;
        throw error;
    }
);

export default axiosClient;
