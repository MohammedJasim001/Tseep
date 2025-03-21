import { useState } from "react";
import Button from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Logo from "../components/logo";

const HomePage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    if (!isChecked) {
      toast.error("You must accept the terms and conditions.");
      return;
    }
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center text-[#313131] relative">
      <Logo />
      <div className="text-center relative mb-20">
        <h1 className="text-2xl md:text-7xl font-bold relative">
          Welcome to{" "}
          <span className="relative z-10">
            TSEEP Mastery Box
            <span className="absolute left-0 bottom-1 md:bottom-2 w-full h-1 md:h-4 bg-[#e29b18ea] z-[-1]"></span>
          </span>
        </h1>
        <p className=" md:text-xl mt-4 font-sans">
          Unlock your potential with{" "}
          <span className="font-semibold">AI-inspired tool</span>
        </p>
      </div>

      <div className="w-full max-w-5xl pb-8 px-4">
        <hr className="mb-4 border-gray-300" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <label className="flex items-start text-sm md:text-base w-full md:w-[420px]">
            <input
              type="checkbox"
              className="w-5 h-5 mr-2 mt-1"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I confirm that I have read and accept the terms and conditions and
            privacy policy.
          </label>

          <Button
            className="px-6 py-2 rounded-md w-full md:w-auto text-center"
            onClick={handleSubmit}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
