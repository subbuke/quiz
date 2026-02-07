import "./Defence.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "1. What is the main role of the army?",
    questionAnswer: [
      { text: "A) Entertainment", isCorrect: false },
      { text: "B) Trade and commerce", isCorrect: false },
      { text: "C) To protect the country and its citizens", isCorrect: true },
      { text: "D) Education", isCorrect: false }
    ]
  },
  {
    questionText: "2. Which country has the largest military by active personnel?",
    questionAnswer: [
      { text: "A) United States", isCorrect: false },
      { text: "B) Russia", isCorrect: false },
      { text: "C) India", isCorrect: false },
      { text: "D) China", isCorrect: true }
    ]
  },
  {
    questionText: "3. What vehicle is heavily armored and used in land combat?",
    questionAnswer: [
      { text: "A) Jeep", isCorrect: false },
      { text: "B) Tank", isCorrect: true },
      { text: "C) Helicopter", isCorrect: false },
      { text: "D) Submarine", isCorrect: false }
    ]
  },
  {
    questionText: "4. Which part of the military operates aircraft?",
    questionAnswer: [
      { text: "A) Army", isCorrect: false },
      { text: "B) Navy", isCorrect: false },
      { text: "C) Air Force", isCorrect: true },
      { text: "D) Marines", isCorrect: false }
    ]
  },
  {
    questionText: "5. What do we call a place where soldiers live and train?",
    questionAnswer: [
      { text: "A) Academy", isCorrect: false },
      { text: "B) Base / Barracks", isCorrect: true },
      { text: "C) Airport", isCorrect: false },
      { text: "D) Campground", isCorrect: false }
    ]
  }
]

function EasyDefence() {
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

export default EasyDefence;
