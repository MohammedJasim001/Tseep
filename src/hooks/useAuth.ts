import { useMutation } from "@tanstack/react-query";
import { loginApi, registerApi } from "../services/authServices";
import toast from "react-hot-toast";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      localStorage.setItem('accessToken',data.user.accessToken)
      localStorage.setItem("id",data.user._id)
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
};
