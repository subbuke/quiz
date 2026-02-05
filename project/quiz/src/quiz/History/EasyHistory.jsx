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
      { text: "A) Russia", isCorrect: false },
      { text: "B) India", isCorrect: false },
      { text: "C) China", isCorrect: false },
      { text: "D) USA", isCorrect: true }
    ]
  },
  {
    questionText: "4.Which ancient civilization built the pyramids?",
    questionAnswer: [
      { text: "A) Romans", isCorrect: false },
      { text: "B) Greeks", isCorrect: false },
      { text: "C) Mayans", isCorrect: false },
      { text: "D) Egyptians", isCorrect: true }
    ]
  },
  {
    questionText: "5. What do we call a period of 100 years?",
    questionAnswer: [
      { text: "A) Millennium", isCorrect: false },
      { text: "B) Millennium 15", isCorrect: false },
      { text: "C) Era", isCorrect: false },
      { text: "D) Century", isCorrect: true }
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
