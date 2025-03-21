const status = [
  { name: "Attended", color: "#2BB673" },
  { name: "Not Attended", color: "#A79E9E" },
  { name: "Yet to Attend", color: "white" },
];

const SideBar = ({
  setIsOpen,
  isOpen,
  totalQuestions,
  currentQuestion,
  setCurrentQuestionIndex,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  totalQuestions: number;
  currentQuestion: number;
  setCurrentQuestionIndex: (index: number) => void;
}) => {
  const handleClick = (i: number) => {
    setCurrentQuestionIndex(i);
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-64 h-[85vh] border-r-2 border-gray-400 absolute left-0 bottom-0 p-4 flex flex-col justify-between bg-white z-20">
      <div>
        <div className="flex justify-end"></div>

        <div className="flex flex-wrap gap-2 mt-10">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <p
              onClick={() => handleClick(i)}
              key={i}
              className={`p-2 w-12 rounded-md cursor-pointer flex items-center justify-center border hover:bg-[#A79E9E] ${
                currentQuestion === i + 1
                  ? "bg-[#F7FFEB] text-black font-bold"
                  : ""
              }`}
            >
              {i + 1}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-4">
        {status.map((ele, ind) => (
          <div key={ind} className="flex items-center gap-2 mb-2">
            <span
              className="h-3 w-3 rounded-md border"
              style={{ backgroundColor: ele.color }}
            ></span>
            <p className="text-sm">{ele.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
