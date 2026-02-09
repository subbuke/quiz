import "./Space.css"
import { useState } from 'react'

const questions = [
   {
    questionText: "6. What is the largest planet in our solar system?",
    questionAnswer: [
      { text: "A) Earth", isCorrect: false },
      { text: "B) Saturn", isCorrect: false },
      { text: "C) Jupiter", isCorrect: true },
      { text: "D) Neptune", isCorrect: false }
    ]
  },
  {
    questionText: "7. Which planet has a prominent ring system?",
    questionAnswer: [
      { text: "A) Jupiter", isCorrect: false },
      { text: "B) Saturn", isCorrect: true },
      { text: "C) Uranus", isCorrect: false },
      { text: "D) Neptune", isCorrect: false }
    ]
  },
  {
    questionText: "8. What type of celestial body is the Sun?",
    questionAnswer: [
      { text: "A) Planet", isCorrect: false },
      { text: "B) Star", isCorrect: true },
      { text: "C) Asteroid", isCorrect: false },
      { text: "D) Galaxy", isCorrect: false }
    ]
  },
  {
    questionText: "9. What is a star’s sudden explosion at the end of its life called?",
    questionAnswer: [
      { text: "A) Nova", isCorrect: false },
      { text: "B) Supernova", isCorrect: true },
      { text: "C) Black hole", isCorrect: false },
      { text: "D) Pulsar", isCorrect: false }
    ]
  },
  {
    questionText: "10. What do astronomers call a small icy body that orbits the Sun?",
    questionAnswer: [
      { text: "A) Meteor", isCorrect: false },
      { text: "B) Asteroid", isCorrect: false },
      { text: "C) Comet", isCorrect: true },
      { text: "D) Satellite", isCorrect: false }
    ]
  }
]

function MedSpace() {
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

export default MedSpace;
