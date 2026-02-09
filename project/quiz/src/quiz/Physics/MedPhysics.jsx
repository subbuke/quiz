import "./Physics.css"
import { useState } from 'react'

const questions = [
  
  // 🟡 MEDIUM
  {
    questionText: "6. What is the formula for speed?",
    questionAnswer: [
      { text: "A) Speed = Time ÷ Distance", isCorrect: false },
      { text: "B) Speed = Distance ÷ Time", isCorrect: true },
      { text: "C) Speed = Force × Distance", isCorrect: false },
      { text: "D) Speed = Mass × Velocity", isCorrect: false }
    ]
  },
  {
    questionText: "7. What is the unit of electric current?",
    questionAnswer: [
      { text: "A) Volt", isCorrect: false },
      { text: "B) Ohm", isCorrect: false },
      { text: "C) Ampere", isCorrect: true },
      { text: "D) Watt", isCorrect: false }
    ]
  },
  {
    questionText: "8. Which law states: “For every action, there is an equal and opposite reaction”?",
    questionAnswer: [
      { text: "A) Newton’s First Law", isCorrect: false },
      { text: "B) Newton’s Second Law", isCorrect: false },
      { text: "C) Newton’s Third Law", isCorrect: true },
      { text: "D) Law of Gravitation", isCorrect: false }
    ]
  },
  {
    questionText: "9. Which lens is thicker at the center than at the edges?",
    questionAnswer: [
      { text: "A) Concave lens", isCorrect: false },
      { text: "B) Convex lens", isCorrect: true },
      { text: "C) Cylindrical lens", isCorrect: false },
      { text: "D) Plano lens", isCorrect: false }
    ]
  },
  {
    questionText: "10. What do we call materials that do not allow electric current to flow easily?",
    questionAnswer: [
      { text: "A) Conductors", isCorrect: false },
      { text: "B) Semiconductors", isCorrect: false },
      { text: "C) Insulators", isCorrect: true },
      { text: "D) Resistors", isCorrect: false }
    ]
  }
]

function MedPhysics() {
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

export default MedPhysics;
