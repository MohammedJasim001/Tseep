import apiClient from "../lib/axios.config"
import API_ROUTES from "../lib/routes"

export const getQuestions = async () => {
    const response  = await apiClient.get(API_ROUTES.QUESTION.GET_QUESTIONS)
    return response.data
}