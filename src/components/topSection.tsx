import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./logo";
import profile from "../assets/profile.png";
import { LogOut } from "lucide-react";

const TopSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login"); 
  };

  return (
    <div className="flex justify-between items-center w-full relative">
      <Logo />

      <div className="relative">
        <img
          src={profile}
          alt="profile"
          className="w-8 h-8 md:w-14 md:h-14 rounded-full cursor-pointer mr-5 md:mr-10 md:mb-10"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <div className="absolute right-10 md:top-16 bg-[#FFEAEA] text-[#E40000] shadow-lg rounded-lg ">
          <button
            className="flex items-center justify-center gap-2 w-full px-6 py-2 text-left rounded-lg hover:bg-[#FFDADA] transition"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
        )}
      </div>
    </div>
  );
};

export default TopSection;
