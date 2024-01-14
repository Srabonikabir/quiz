import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const QuizDetails = ({ quiz, idx, correct, setCorrect, wrong, setWrong }) => {
    const { correctAnswer, id, options, question } = quiz;
    const [answer, setAnswer] = useState([]);
    const [isActive, setIsActive] = useState(false);

// Quiz Check function
const checkQuiz = (option) => {
    if (option === correctAnswer) {
      toast.success("Correct Answer", { autoClose: 500 });
      setCorrect(correct + 1);
    } else {
      toast.error("Wrong Answer", { autoClose: 500 });
      setWrong(wrong + 1);
    }

  // To disable radio button after select one option
  const radio = document.getElementsByName(id);
  const len = radio.length;
  for (let i = 0; i < len; i++) {
    radio[i].disabled = true;
  }
};

  // Display Correct Answer function
  const displayCorrectAnswer = (correctAnswer) => {
    const quizAnswer = correctAnswer;
    setAnswer(quizAnswer);
    setIsActive((current) => !current);
  };

    return (
        <div className="bg-white border shadow-2xl border-cyan-300">
        <div className="flex items-center justify-center">
          <h1 className="text-center text-xl font-semibold text-cyan-500 p-4">
            Quiz {idx + 1}: {question.slice(3, -4)}
          </h1>
          <div>
            <button
              onClick={() => displayCorrectAnswer(correctAnswer)}
              className="p-2"
              title="Show the Correct Answer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-cyan-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <p
          style={{
            padding: isActive ? "20px" : "",
            color: isActive ? "rgb(8 145 178)" : "",
            display: isActive ? "block" : "none",
            fontSize: isActive ? "20px" : "",
          }}
        >
          Right Answer for this question:
          <span className="font-bold text-cyan-900"> {answer}</span>
        </p>
        <div className="flex justify-center flex-col p-3  gap-2">
          {options && options.map((option, idx) => (
            <div
              key={idx}
              className="flex justify-start border border-cyan-300 hover:bg-cyan-200 gap-y- pl-2"
            >
              <input
                onClick={() => checkQuiz(option)}
                type="radio"
                name={id}
                id={id}
                value={option}
                className="ml-5 dark:bg-gray-800"
              />
              <label name="options" htmlFor="options" className="m-2">
                {option}
              </label>
              <ToastContainer></ToastContainer>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default QuizDetails;