import "./Space.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "11. What was the first artificial satellite launched into space?",
    questionAnswer: [
      { text: "A) Explorer 1", isCorrect: false },
      { text: "B) Sputnik 1", isCorrect: true },
      { text: "C) Apollo 11", isCorrect: false },
      { text: "D) Vostok 1", isCorrect: false }
    ]
  },
  {
    questionText: "12. What is the point in a planet’s orbit closest to the Sun called?",
    questionAnswer: [
      { text: "A) Aphelion", isCorrect: false },
      { text: "B) Perihelion", isCorrect: true },
      { text: "C) Ellipse", isCorrect: false },
      { text: "D) Axis", isCorrect: false }
    ]
  },
  {
    questionText: "13. What type of galaxy is the Milky Way?",
    questionAnswer: [
      { text: "A) Elliptical", isCorrect: false },
      { text: "B) Irregular", isCorrect: false },
      { text: "C) Spiral", isCorrect: true },
      { text: "D) Lenticular", isCorrect: false }
    ]
  },
  {
    questionText: "14. Which planet has the fastest orbit around the Sun?",
    questionAnswer: [
      { text: "A) Earth", isCorrect: false },
      { text: "B) Mars", isCorrect: false },
      { text: "C) Mercury", isCorrect: true },
      { text: "D) Venus", isCorrect: false }
    ]
  },
  {
    questionText: "15. What is the boundary around a black hole beyond which nothing can escape?",
    questionAnswer: [
      { text: "A) Singularity", isCorrect: false },
      { text: "B) Schwarzschild radius", isCorrect: false },
      { text: "C) Event horizon", isCorrect: true },
      { text: "D) Accretion disk", isCorrect: false }
    ]
  }
]

function HardSpace() {
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

export default HardSpace;
