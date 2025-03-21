import apiClient from "../lib/axios.config"
import API_ROUTES from "../lib/routes"

export const feedbackApi = async(feedback:[{comment:string,rating:number}]) => {
    const response = await apiClient.post(API_ROUTES.FEEDBACK.ADD_FEEDBACK,feedback)
    return response.data
}
