import "./Biology.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "6. What is the basic unit of life?",
    questionAnswer: [
      { text: "A) Tissue", isCorrect: false },
      { text: "B) Organ", isCorrect: false },
      { text: "C) Cell", isCorrect: true },
      { text: "D) Molecule", isCorrect: false }
    ]
  },
  {
    questionText: "7. Which blood cells help fight infections?",
    questionAnswer: [
      { text: "A) Red blood cells", isCorrect: false },
      { text: "B) Platelets", isCorrect: false },
      { text: "C) White blood cells", isCorrect: true },
      { text: "D) Plasma", isCorrect: false }
    ]
  },
  {
    questionText: "8. What process do cells use to make energy from food?",
    questionAnswer: [
      { text: "A) Photosynthesis", isCorrect: false },
      { text: "B) Digestion", isCorrect: false },
      { text: "C) Respiration", isCorrect: false },
      { text: "D) Cellular respiration", isCorrect: true }
    ]
  },
  {
    questionText: "9. What pigment gives plants their green color?",
    questionAnswer: [
      { text: "A) Melanin", isCorrect: false },
      { text: "B) Chlorophyll", isCorrect: true },
      { text: "C) Carotene", isCorrect: false },
      { text: "D) Hemoglobin", isCorrect: false }
    ]
  },
  {
    questionText: "10. What type of blood vessel carries blood away from the heart?",
    questionAnswer: [
      { text: "A) Veins", isCorrect: false },
      { text: "B) Capillaries", isCorrect: false },
      { text: "C) Arteries", isCorrect: true },
      { text: "D) Venules", isCorrect: false }
    ]
  }
]

function MedBiology() {
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

export default MedBiology;
