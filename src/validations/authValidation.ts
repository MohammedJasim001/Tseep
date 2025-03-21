import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  userName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  mobileNo: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile Number must be exactly 10 digits")
    .required("Mobile Number is required"),
  status: Yup.string().required("Please select a status"),
});

export const loginSchema = Yup.object().shape({
  mobileNo: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile Number must be exactly 10 digits")
    .required("Mobile Number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
