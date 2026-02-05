import "./history.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "1. Who was the first President of the United States?",
    questionAnswer: [
      { text: "A) Abraham Lincoln", isCorrect: false },
      { text: "B) Thomas Jefferson", isCorrect: false },
      { text: "C) George Washington", isCorrect: true },
      { text: "D) John Adams", isCorrect: false }
    ]
  },
  {
    questionText: "2. What continent is Egypt located on?",
    questionAnswer: [
      { text: "A) Asia", isCorrect: false },
      { text: "B) Europe", isCorrect: false },
      { text: "C) Africa", isCorrect: true},
      { text: "D) Australia", isCorrect: false }
    ]
  },
  {
    questionText: "3. Who discovered America in 1492?",
    questionAnswer: [
      { text: "Russia", isCorrect: false },
      { text: "India", isCorrect: false },
      { text: "China", isCorrect: false },
      { text: "USA", isCorrect: true }
    ]
  },
  {
    questionText: "what is the smallest city in the world..?",
    questionAnswer: [
      { text: "sweden", isCorrect: false },
      { text: "Norway", isCorrect: false },
      { text: "vatican city", isCorrect: true },
      { text: "belarus", isCorrect: false }
    ]
  },
  {
    questionText: "Independence day of india..?",
    questionAnswer: [
      { text: "August 15", isCorrect: true },
      { text: "may 15", isCorrect: false },
      { text: "june 15", isCorrect: false },
      { text: "july 15", isCorrect: false }
    ]
  }
]

function EasyHistory() {
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

export default EasyHistory;
