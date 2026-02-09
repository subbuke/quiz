import "./Physics.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "11. What principle explains why ships float?",
    questionAnswer: [
      { text: "A) Pascal’s Principle", isCorrect: false },
      { text: "B) Bernoulli’s Principle", isCorrect: false },
      { text: "C) Archimedes’ Principle", isCorrect: true },
      { text: "D) Newton’s Law", isCorrect: false }
    ]
  },
  {
    questionText: "12. What is the energy of motion called?",
    questionAnswer: [
      { text: "A) Potential energy", isCorrect: false },
      { text: "B) Thermal energy", isCorrect: false },
      { text: "C) Kinetic energy", isCorrect: true },
      { text: "D) Chemical energy", isCorrect: false }
    ]
  },
  {
    questionText: "13. What phenomenon occurs when light bends while passing through different mediums?",
    questionAnswer: [
      { text: "A) Reflection", isCorrect: false },
      { text: "B) Diffraction", isCorrect: false },
      { text: "C) Refraction", isCorrect: true },
      { text: "D) Dispersion", isCorrect: false }
    ]
  },
  {
    questionText: "14. What particle is exchanged in electromagnetic interactions?",
    questionAnswer: [
      { text: "A) Electron", isCorrect: false },
      { text: "B) Proton", isCorrect: false },
      { text: "C) Photon", isCorrect: true },
      { text: "D) Neutron", isCorrect: false }
    ]
  },
  {
    questionText: "15. Who proposed the uncertainty principle?",
    questionAnswer: [
      { text: "A) Albert Einstein", isCorrect: false },
      { text: "B) Niels Bohr", isCorrect: false },
      { text: "C) Werner Heisenberg", isCorrect: true },
      { text: "D) Max Planck", isCorrect: false }
    ]
  }
]

function HardPhysics() {
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

export default HardPhysics;
