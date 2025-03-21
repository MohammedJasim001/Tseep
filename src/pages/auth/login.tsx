import Logo from "../../components/logo";
import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import PhoneInput from "../../components/ui/phoneInput";
import { useFormik } from "formik";
import { loginSchema } from "../../validations/authValidation.ts";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth.ts";

const Login = () => {
  const navigate = useNavigate();
  const {mutate,isSuccess} = useLogin()
  const formik = useFormik({
    initialValues: {
      mobileNo: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      mutate(values)
    },
  });

  if(isSuccess){
    navigate('/questions')
  }


  return (
    <div className="flex h-screen items-center justify-center px-4">
      <div className="absolute top-0 left-0">
        <Logo />
      </div>

      <div className="">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-center mb-6 ">
            <span className="relative inline-block z-10">
              Login
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e29b18ea] z-[-1]"></span>
            </span>
          </h2>
          <div className="fixed left-0 right-0 h-0.5 bg-[#e29b18ea] "></div>
        </div>

        <div className="p-8 rounded-xl shadow-md w-full max-w-md  bg-[var(--auth-background)]">
          <form onSubmit={formik.handleSubmit}>
            <PhoneInput
              label="Mobile Number"
              name="mobileNo"
              placeholder="Enter your phone number"
              value={formik.values.mobileNo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.mobileNo && formik.errors.mobileNo
                  ? formik.errors.mobileNo
                  : undefined
              }
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : undefined
              }
            />

            <Button type="submit" className="w-full">
              Login
            </Button>

            <p className="text-center text-sm mt-4">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-blue-600 font-medium cursor-pointer"
              >
                Register Now
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
