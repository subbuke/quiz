import "./Economy.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "1. What do we call the money people earn from working?",
    questionAnswer: [
      { text: "A) Profit", isCorrect: false },
      { text: "B) Wages / Income", isCorrect: true },
      { text: "C) Rent", isCorrect: false },
      { text: "D) Interest", isCorrect: false }
    ]
  },
  {
    questionText: "2. What is the basic economic problem of limited resources called?",
    questionAnswer: [
      { text: "A) Inflation", isCorrect: false },
      { text: "B) Scarcity", isCorrect: true },
      { text: "C) Demand", isCorrect: false },
      { text: "D) Surplus", isCorrect: false }
    ]
  },
  {
    questionText: "3. What do we call a place where people buy and sell goods?",
    questionAnswer: [
      { text: "A) Factory", isCorrect: false },
      { text: "B) Warehouse", isCorrect: false },
      { text: "C) Market", isCorrect: true },
      { text: "D) Bank", isCorrect: false }
    ]
  },
  {
    questionText: "4. What currency is used in the United States?",
    questionAnswer: [
      { text: "A) Euro", isCorrect: false },
      { text: "B) Pound", isCorrect: false },
      { text: "C) US Dollar", isCorrect: true },
      { text: "D) Yen", isCorrect: false }
    ]
  },
  {
    questionText: "5. What do we call goods bought for personal use?",
    questionAnswer: [
      { text: "A) Capital goods", isCorrect: false },
      { text: "B) Producer goods", isCorrect: false },
      { text: "C) Consumer goods", isCorrect: true },
      { text: "D) Public goods", isCorrect: false }
    ]
  }
]

function EasyEconomy() {
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

export default EasyEconomy;
