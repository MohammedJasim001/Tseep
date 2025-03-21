import { useState } from "react";
import { GoHome } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import TopSection from "../components/topSection";
import { useFeedback } from "../hooks/useFeedback";
import Button from "../components/ui/button";

export default function Feedback() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [score] = useState(localStorage.getItem("mark") || 0);
  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  const emojis = [
    { rating: 1, emoji: "🥵" },
    { rating: 2, emoji: "😔" },
    { rating: 3, emoji: "😑" },
    { rating: 4, emoji: "😌" },
    { rating: 5, emoji: "🥰" },
  ];

  const handleEmojiClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const { mutate } = useFeedback();

  const handleSubmit = () => {
    if (!selectedRating || !feedback) return;
    mutate([{ comment: feedback, rating: selectedRating }]);
    setFeedback("");
    setSelectedRating(null);
    navigate('/')  
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center lg:p-0 relative">
      <TopSection />
      <div className="flex flex-col items-center gap-2 absolute top-20">
        <img src="/tick.png" alt="Success" className="w-[70px]" />
        <p className="font-semibold text-[18px] text-center">
          Congratulations! You have successfully completed the test.
        </p>
        <p className="font-bold">
          Score &nbsp;:&emsp;
          <span className="bg-[#fac166] px-4 py-1 font-semibold rounded-3xl">
            {score}/50
          </span>
        </p>
        <div className="font-bold text-[20px] text-white bg-[var(--button-background)] mt-2 rounded-md px-4 py-2">
          Your ID: {id?.slice(-6)}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md md:p-6 p-2 md:w-[60%] mt-48 md:mt-36 ">
        <h2 className="text-xl font-bold ">Feedback</h2>

        <div className="mt-3">
          <h3 className="text-xl font-bold tracking-wider">
            Give us a feedback!
          </h3>
          <p className="text-gray-600 text-justify">
            Your input is important for us. We take customer feedback very
            seriously.
          </p>
        </div>

        <div className="flex mt-5 mb-5 gap-3">
          {emojis.map((item) => (
            <Button
              key={item.rating}
              onClick={() => handleEmojiClick(item.rating)}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                selectedRating === item.rating
                  ? "bg-gray-300 scale-110"
                  : "bg-transparent"
              }`}
            >
              {item.emoji}
            </Button>
          ))}
        </div>

        <div className="mb-2">
          <textarea
            className="w-full border-[#c4c4c4] border-1 rounded-md p-4 h-24 focus:outline-none shadow-md"
            placeholder="Add a comment"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>

        <Button disabled={!feedback || !selectedRating} onClick={handleSubmit}>
          Submit Feedback
        </Button>
      </div>

      <span
        onClick={handleHome}
        className="flex items-center gap-2 my-2 cursor-pointer"
      >
        <GoHome />
        <span>Back to home</span>
      </span>
    </div>
  );
}
