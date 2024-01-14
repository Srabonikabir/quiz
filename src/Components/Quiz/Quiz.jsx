import { Link, useLoaderData } from "react-router-dom";
import QuizDetails from "./QuizDetails";
import { useState } from "react";


const Quiz = () => {
    const quizData = useLoaderData();
    const quizzes = quizData.data.questions;
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);


    return (
        <div className="bg-gray-300">
        <h1 className="text-3xl text-cyan-400 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex items-center justify-center pt-5 mb-5 md:mb-0">
          Quiz of {quizData.data.name}
        </h1>
        <div className="px-4 pb-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-80 lg:pb-5 lg:pt-10 flex items-center justify-center">
          <div className="grid gap-8 row-gap-5 mb-8 grid-cols-1 items-center justify-center">
            {quizzes && quizzes.map((quiz, idx) => (
              <QuizDetails
              key={quiz.id}
              idx={idx}
              quizzes={quizzes}
              quiz={quiz}
              correct={correct}
              setCorrect={setCorrect}
              wrong={wrong}
              setWrong={setWrong}></QuizDetails>  
    
              ))}
        </div>
      </div>
      <div className="w-6/12 m-auto px-10 py-3 mb-14 font-semibold rounded-full bg-cyan-100 text-gray-800 hover:bg-cyan-400">
        <h1>Correct Answer: {correct}</h1>
        <h1>Wrong Answer: {wrong}</h1>
      </div>
      <div className="text-center pb-10"></div>
    <Link
     className="px-10 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400"
     to="/topics"
   >
     <button>More Quiz</button>
    </Link>
    </div>

              );
};

export default Quiz;