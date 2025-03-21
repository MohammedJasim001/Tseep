import { useMutation } from "@tanstack/react-query"
import { feedbackApi } from "../services/feedbackServices"
import toast from "react-hot-toast"

export const useFeedback = () => {
    return useMutation({
        mutationFn:feedbackApi,
        onSuccess:(data)=>{
            toast.success(data.message)
        },
        onError:(err)=>{
            toast.error(err.message)
        }
    })
}