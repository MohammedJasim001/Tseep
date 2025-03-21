import { useState } from "react";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import TopSection from "../components/topSection";
import SideBar from "../components/sideBar";
import { useGetQuestions } from "../hooks/useQuestions";
import Button from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const QuizUI = () => {
  const { data, isPending } = useGetQuestions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [mark, setMark] = useState(0);
  const navigate = useNavigate();

  if (isPending) {
    return <p className="text-center mt-10">Loading questions. Please wait</p>;
  }

  const currentQuestion = data.questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex == 9) {
      localStorage.setItem("mark", mark.toString());
      navigate("/complete");
    }
    if (currentQuestionIndex < data.questions.length - 1) {
      if (selectedOption === data.questions[currentQuestionIndex].answer) {
        setMark(mark + 5);
      }
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    }
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    setSelectedOption(null);
  };

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center min-h-screen relative ">
      <TopSection />
      <MdOutlineSpaceDashboard
        size={30}
        onClick={handleSidebar}
        className={`absolute ${
          !isOpen ? "left-2 md:left-10" : "left-56 "
        } top-28 z-50`}
      />
      {isOpen && (
        <SideBar
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          totalQuestions={data.questions.length}
          currentQuestion={currentQuestionIndex + 1}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
      )}

      <h1 className="text-xl md:text-3xl font-bold text-[#163d49] text-center absolute top-28">
        Assess Your{" "}
        <span className="relative z-10">
          Intelligence
          <span className="absolute left-0 bottom-1 w-full h-1 md:h-2 bg-[#e29b18ea] z-[-1]"></span>
        </span>
      </h1>

      <div className="w-full max-w-3xl mt-12 flex items-center justify-between gap-4 mb-3 px-4 md:px-0">
        <div className="flex-1 flex items-center gap-4">
          <div className="h-1 bg-gray-300 w-full rounded-full relative">
            <div
              className="h-1 bg-blue-600 rounded-full"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / data.questions.length) * 100
                }%`,
              }}
            ></div>
          </div>
          <p className="text-sm">
            {currentQuestionIndex + 1}/{data.questions.length}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#FAC167] p-2 rounded-md">
          <Clock className="" />
          <span className="text-sm font-medium">5 Min</span>
        </div>
      </div>

      <div className="w-full max-w-3xl px-4 md:px-0">
        <div className="bg-[#F4F4F4] shadow-lg rounded-lg p-6  w-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center bg-[#163d49] text-white rounded-full">
              {currentQuestionIndex + 1}
            </div>
            <p className="text-lg font-medium">{currentQuestion.question}</p>
          </div>

          <div className="mt-4 space-y-2 shadow-md bg-white">
            {currentQuestion.options.map((option: string, index: number) => (
              <label
                key={index}
                className={`flex items-center gap-2 p-3 rounded-md cursor-pointer ${
                  selectedOption === option
                    ? "bg-[#E7FFD9] w-56"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedOption(option)}
              >
                <input
                  type="radio"
                  name="quiz"
                  className="hidden"
                  checked={selectedOption === option}
                  readOnly
                />
                <div
                  className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                    selectedOption === option
                      ? "border-[#217C58]"
                      : "border-gray-400"
                  }`}
                >
                  {selectedOption === option && (
                    <div className="w-3 h-3 bg-[#217C58] rounded-full"></div>
                  )}
                </div>
                <span>{option}</span>
              </label>
            ))}
          </div>

          <div className="mt-4 flex justify-end space-x-5 items-center">
            <Button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft />
              Previous
            </Button>

            <Button onClick={handleNext} className="flex items-center gap-2">
              {currentQuestionIndex === data.questions.length - 1
                ? "Finish"
                : "Next"}
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizUI;
