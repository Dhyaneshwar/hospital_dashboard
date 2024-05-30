import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${process.env.VITE_API_BASE_URL}`,
});

axiosClient.interceptors.response.use(
    (response) => {
        console.log(response);
        return response;
    },
    (error) => {
        const { response } = error;
        console.log(response);
        throw error;
    }
);

export default axiosClient;
