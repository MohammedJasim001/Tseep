import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, 
  timeout: 10000, 
  timeoutErrorMessage: "Request timed out. Please check your connection.",
  withCredentials: true, 
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && config.headers) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;

    }
    config.withCredentials=true
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error.response?.data || error.message);
  }
);

export default apiClient;
