import { ChangeEvent } from "react";
import Logo from "../../components/logo";
import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import PhoneInput from "../../components/ui/phoneInput";
import RadioGroup from "../../components/ui/radioGroup";
import { useFormik } from "formik";
import { signupSchema } from "../../validations/authValidation.ts";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth.ts";

const Register = () => {
  const {mutate,isSuccess} = useRegister()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      mobileNo: "",
      status: "employee",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      mutate(values)
    },
  });


  if(isSuccess){
    navigate('/login')
  }



  return (
    <div className="flex h-screen items-center justify-center px-4">
      <div className="absolute top-0 left-0">
        <Logo />
      </div>

      <div className="p-8 rounded-xl shadow-md w-full md:max-w-md bg-[var(--auth-background)] mt-14 md:mt-0">
        <h2 className="text-2xl font-semibold text-center mb-6 ">
          <span className="relative inline-block z-10">
            Register
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e29b18ea] z-[-1]"></span>
          </span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Full Name"
            name="userName"
            placeholder="Enter your name"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.userName && formik.errors.userName
                ? formik.errors.userName
                : undefined
            }
          />

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : undefined
            }
          />

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

          <RadioGroup
            label="Current Status"
            name="status"
            selectedValue={formik.values.status}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("status", e.target.value)
            }
            error={
              formik.touched.status && formik.errors.status
                ? formik.errors.status
                : undefined
            }
            options={[
              { value: "student", label: "Student" },
              { value: "employee", label: "Employee" },
            ]}
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
            Save
          </Button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-600 font-medium cursor-pointer"
            >
              Login Now
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
