import "./Space.css"
import { useState } from 'react'

const questions = [
   {
    questionText: "1. What is the planet closest to the Sun?",
    questionAnswer: [
      { text: "A) Venus", isCorrect: false },
      { text: "B) Earth", isCorrect: false },
      { text: "C) Mercury", isCorrect: true },
      { text: "D) Mars", isCorrect: false }
    ]
  },
  {
    questionText: "2. What is the name of our galaxy?",
    questionAnswer: [
      { text: "A) Andromeda", isCorrect: false },
      { text: "B) Milky Way", isCorrect: true },
      { text: "C) Orion", isCorrect: false },
      { text: "D) Pegasus", isCorrect: false }
    ]
  },
  {
    questionText: "3. Which planet is known as the Red Planet?",
    questionAnswer: [
      { text: "A) Venus", isCorrect: false },
      { text: "B) Jupiter", isCorrect: false },
      { text: "C) Mars", isCorrect: true },
      { text: "D) Saturn", isCorrect: false }
    ]
  },
  {
    questionText: "4. What is the natural satellite that orbits the Earth?",
    questionAnswer: [
      { text: "A) Sun", isCorrect: false },
      { text: "B) Mars", isCorrect: false },
      { text: "C) Moon", isCorrect: true },
      { text: "D) Asteroid", isCorrect: false }
    ]
  },
  {
    questionText: "5. What force keeps planets in orbit around the Sun?",
    questionAnswer: [
      { text: "A) Magnetism", isCorrect: false },
      { text: "B) Gravity", isCorrect: true },
      { text: "C) Friction", isCorrect: false },
      { text: "D) Radiation", isCorrect: false }
    ]
  }
]

function EasySpace() {
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

export default EasySpace;
