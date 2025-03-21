import apiClient from "../lib/axios.config"
import API_ROUTES from "../lib/routes"

export const registerApi = async(data:{ userName: string;
    email: string;
    mobileNo: string;
    status: string;
    password: string;})=> {
    const response = await apiClient.post(API_ROUTES.AUTH.REGISTER,data)
    console.log(response,'response');
    return response.data
}

export const loginApi = async(data:{mobileNo:string,password:string})=> {
    const response = await apiClient.post(API_ROUTES.AUTH.LOGIN,data)
    return response.data
}