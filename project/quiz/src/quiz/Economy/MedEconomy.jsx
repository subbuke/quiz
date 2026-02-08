import "./Economy.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "6. What law states that demand increases when prices fall?",
    questionAnswer: [
      { text: "A) Law of supply", isCorrect: false },
      { text: "B) Law of demand", isCorrect: true },
      { text: "C) Law of diminishing returns", isCorrect: false },
      { text: "D) Law of equilibrium", isCorrect: false }
    ]
  },
  {
    questionText: "7. What is a long period of rising prices called?",
    questionAnswer: [
      { text: "A) Deflation", isCorrect: false },
      { text: "B) Recession", isCorrect: false },
      { text: "C) Inflation", isCorrect: true },
      { text: "D) Depression", isCorrect: false }
    ]
  },
  {
    questionText: "8. What organization controls a country’s money supply?",
    questionAnswer: [
      { text: "A) Commercial bank", isCorrect: false },
      { text: "B) World Bank", isCorrect: false },
      { text: "C) Central bank", isCorrect: true },
      { text: "D) Stock exchange", isCorrect: false }
    ]
  },
  {
    questionText: "9. What do we call a tax on imported goods?",
    questionAnswer: [
      { text: "A) Subsidy", isCorrect: false },
      { text: "B) Tariff", isCorrect: true },
      { text: "C) Quota", isCorrect: false },
      { text: "D) Excise duty", isCorrect: false }
    ]
  },
  {
    questionText: "10. Which economic system is based on private ownership?",
    questionAnswer: [
      { text: "A) Socialism", isCorrect: false },
      { text: "B) Communism", isCorrect: false },
      { text: "C) Capitalism", isCorrect: true },
      { text: "D) Mixed economy", isCorrect: false }
    ]
  }
]

function MedEconomy() {
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

export default MedEconomy;
