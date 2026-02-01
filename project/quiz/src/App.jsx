import './App.css'
import { useState } from 'react'

const questions = [
  {
    questionText: "What is the capital of Afghanistan?",
    questionAnswer: [
      { text: "Colombo", isCorrect: false },
      { text: "Kabul", isCorrect: true },
      { text: "New Delhi", isCorrect: false },
      { text: "Islamabad", isCorrect: false }
    ]
  },
  {
    questionText: "Who is the president of USA?",
    questionAnswer: [
      { text: "Trump", isCorrect: true },
      { text: "Obama", isCorrect: false },
      { text: "Putin", isCorrect: false },
      { text: "Biden", isCorrect: false }
    ]
  },
  {
    questionText: "Most powerful military in the world?",
    questionAnswer: [
      { text: "Russia", isCorrect: false },
      { text: "India", isCorrect: false },
      { text: "China", isCorrect: false },
      { text: "USA", isCorrect: true }
    ]
  },
  {
    questionText: "What is the date of Independence Day in India?",
    questionAnswer: [
      { text: "May 15", isCorrect: false },
      { text: "January 15", isCorrect: false },
      { text: "November 15", isCorrect: false },
      { text: "August 15", isCorrect: true }
    ]
  }
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionClick = (option, index) => {
    setSelectedOption(index)
    if (option.isCorrect) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    setSelectedOption(null)

    const next = currentQuestion + 1
    if (next < questions.length) {
      setCurrentQuestion(next)
    } else {
      setShowScore(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedOption(null)
  }

  return (
    <div className="quiz">
      <h1>Quiz App</h1>

      {showScore ? (
        <div className="score-section">
          <h2>
            You scored {score} out of {questions.length}
          </h2>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <p>
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <h3>{questions[currentQuestion].questionText}</h3>

          {questions[currentQuestion].questionAnswer.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option, index)}
              disabled={selectedOption !== null}
              className={
                selectedOption !== null
                  ? option.isCorrect
                    ? 'correct'
                    : selectedOption === index
                    ? 'wrong'
                    : ''
                  : ''
              }
            >
              {option.text}
            </button>
          ))}

          <button
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
          >
            Next Question
          </button>
        </>
      )}
    </div>
  )
}

export default App
