import "./Chemistry.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "11. What is the molecular formula of ozone?",
    questionAnswer: [
      { text: "A) O2", isCorrect: false },
      { text: "B) O3", isCorrect: true },
      { text: "C) CO3", isCorrect: false },
      { text: "D) O4", isCorrect: false }
    ]
  },
  {
    questionText: "12. What reaction produces salt and water from an acid and a base?",
    questionAnswer: [
      { text: "A) Oxidation", isCorrect: false },
      { text: "B) Reduction", isCorrect: false },
      { text: "C) Neutralization", isCorrect: true },
      { text: "D) Combustion", isCorrect: false }
    ]
  },
  {
    questionText: "13. What is the electron configuration of oxygen?",
    questionAnswer: [
      { text: "A) 1s2 2s2 2p2", isCorrect: false },
      { text: "B) 1s2 2s2 2p4", isCorrect: true },
      { text: "C) 1s2 2s2 2p6", isCorrect: false },
      { text: "D) 1s2 2s1 2p3", isCorrect: false }
    ]
  },
  {
    questionText: "14. Which element has the highest electronegativity?",
    questionAnswer: [
      { text: "A) Oxygen", isCorrect: false },
      { text: "B) Chlorine", isCorrect: false },
      { text: "C) Fluorine", isCorrect: true },
      { text: "D) Nitrogen", isCorrect: false }
    ]
  },
  {
    questionText: "15. Which principle states that no two electrons have the same quantum numbers?",
    questionAnswer: [
      { text: "A) Aufbau Principle", isCorrect: false },
      { text: "B) Hund’s Rule", isCorrect: false },
      { text: "C) Pauli Exclusion Principle", isCorrect: true },
      { text: "D) Heisenberg Principle", isCorrect: false }
    ]
  }
]

function HardChemistry() {
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

export default HardChemistry;
