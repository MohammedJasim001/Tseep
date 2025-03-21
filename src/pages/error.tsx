import React from "react";
import { useNavigate } from "react-router-dom";
import err from "../assets/error.jpeg";
import Logo from "../components/logo";
import Button from "../components/ui/button";

interface ErrorPageProps {
  statusCode?: number;
  title?: string;
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <Logo />

      <img src={err} alt="error" className="md:w-[40%] w-full mb-10 md:mt-0 mt-20" />

      <p className="text-[#313131] mt-7 text-xl md:text-4xl tracking-wider">
        Sorry,it looks like the page get
      </p>
      <Button
      className="mt-16 md:mt-5"
       onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default ErrorPage;
