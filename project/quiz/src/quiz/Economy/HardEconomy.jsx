import "./Economy.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "11. What measures the total value of goods and services produced in a country?",
    questionAnswer: [
      { text: "A) GNP", isCorrect: false },
      { text: "B) CPI", isCorrect: false },
      { text: "C) GDP", isCorrect: true },
      { text: "D) PPP", isCorrect: false }
    ]
  },
  {
    questionText: "12. What is high inflation with slow growth called?",
    questionAnswer: [
      { text: "A) Recession", isCorrect: false },
      { text: "B) Deflation", isCorrect: false },
      { text: "C) Stagflation", isCorrect: true },
      { text: "D) Hyperinflation", isCorrect: false }
    ]
  },
  {
    questionText: "13. Which policy involves government spending and taxation?",
    questionAnswer: [
      { text: "A) Monetary policy", isCorrect: false },
      { text: "B) Trade policy", isCorrect: false },
      { text: "C) Fiscal policy", isCorrect: true },
      { text: "D) Industrial policy", isCorrect: false }
    ]
  },
  {
    questionText: "14. What market structure has a single seller?",
    questionAnswer: [
      { text: "A) Oligopoly", isCorrect: false },
      { text: "B) Monopoly", isCorrect: true },
      { text: "C) Perfect competition", isCorrect: false },
      { text: "D) Monopsony", isCorrect: false }
    ]
  },
  {
    questionText: "15. What is the ability to produce goods at lower opportunity cost called?",
    questionAnswer: [
      { text: "A) Absolute advantage", isCorrect: false },
      { text: "B) Economies of scale", isCorrect: false },
      { text: "C) Comparative advantage", isCorrect: true },
      { text: "D) Specialization", isCorrect: false }
    ]
  }
]

function HardEconomy() {
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

export default HardEconomy;
