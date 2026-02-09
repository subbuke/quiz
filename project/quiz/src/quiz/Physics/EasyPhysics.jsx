import "./Physics.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "1. What is the force that pulls objects toward the Earth?",
    questionAnswer: [
      { text: "A) Magnetism", isCorrect: false },
      { text: "B) Gravity", isCorrect: true },
      { text: "C) Friction", isCorrect: false },
      { text: "D) Pressure", isCorrect: false }
    ]
  },
  {
    questionText: "2. What is the SI unit of mass?",
    questionAnswer: [
      { text: "A) Gram", isCorrect: false },
      { text: "B) Kilogram", isCorrect: true },
      { text: "C) Newton", isCorrect: false },
      { text: "D) Meter", isCorrect: false }
    ]
  },
  {
    questionText: "3. Which planet has the strongest gravitational pull in the solar system?",
    questionAnswer: [
      { text: "A) Earth", isCorrect: false },
      { text: "B) Saturn", isCorrect: false },
      { text: "C) Jupiter", isCorrect: true },
      { text: "D) Mars", isCorrect: false }
    ]
  },
  {
    questionText: "4. What type of energy is stored in a stretched spring?",
    questionAnswer: [
      { text: "A) Kinetic energy", isCorrect: false },
      { text: "B) Chemical energy", isCorrect: false },
      { text: "C) Elastic potential energy", isCorrect: true },
      { text: "D) Thermal energy", isCorrect: false }
    ]
  },
  {
    questionText: "5. What device measures temperature?",
    questionAnswer: [
      { text: "A) Barometer", isCorrect: false },
      { text: "B) Thermometer", isCorrect: true },
      { text: "C) Ammeter", isCorrect: false },
      { text: "D) Voltmeter", isCorrect: false }
    ]
  }
]

function EasyPhysics() {
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

export default EasyPhysics;
