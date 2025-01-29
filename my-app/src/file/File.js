import React, { useState } from 'react';


const questions = [
  {
    question: "1.Which country has the highest natural resources?",
    options: ["India", "Russia", "America", "China"],
    answer: "Russia"
  },
  {
    question: "2.Which company doesn't belongs to Elon mask",
    options: ["Tesla", "Hyper loop", "X(Twitter)", "Nvidia"],
    answer: "Nvidia"
  },
  {
    question: "3.Which indian state has highest gdp?",
    options: ["Tamilnadu", "Karnataka", "Maharastra", "Kerala"],
    answer: "Maharastra"
  },
  {
    question: "Which country is not a military power?",
    options: ["India", "Russia", "China", "Nepal"],
    answer: "Nepal"
  },
  {
    question: "5.what is expanded form of IMF? ",
    options:["A.International money Fund", "B. Indian money fund", "C.International monetary Fund", "D. International money function"],
    answer: "C.International monetary Fund"
  }
];

export default function File() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setSelectedOption('');
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption('');
    setQuizCompleted(false);
  };

  return (
    <div className="App mt-5 text-center">
      <h1 className='bg-blue-500 text-center h-17 pb-1 w-30'>Quiz App</h1>
      {quizCompleted ? (
        <div>
          <h2>Your Score: {score} out of {questions.length}</h2>
          <button onClick={restartQuiz} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2 className='text-4xl font-bold text-gray-900 dark:text-black'>{questions[currentQuestionIndex].question}</h2>
          <form onSubmit={handleSubmit}>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
        
                />
                {option}
              </div>
            ))}
            <button type="submit" disabled={!selectedOption} className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Next</button>
          </form>
        </div>
      )}
    </div>
  );
}