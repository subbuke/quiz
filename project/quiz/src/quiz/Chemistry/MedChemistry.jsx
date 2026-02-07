import "./Chemistry.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "6. What is the atomic number of carbon?",
    questionAnswer: [
      { text: "A) 4", isCorrect: false },
      { text: "B) 6", isCorrect: true },
      { text: "C) 8", isCorrect: false },
      { text: "D) 12", isCorrect: false }
    ]
  },
  {
    questionText: "7. Which element has the chemical symbol Na?",
    questionAnswer: [
      { text: "A) Nitrogen", isCorrect: false },
      { text: "B) Sodium", isCorrect: true },
      { text: "C) Neon", isCorrect: false },
      { text: "D) Nickel", isCorrect: false }
    ]
  },
  {
    questionText: "8. What type of bond involves sharing of electrons?",
    questionAnswer: [
      { text: "A) Ionic bond", isCorrect: false },
      { text: "B) Metallic bond", isCorrect: false },
      { text: "C) Covalent bond", isCorrect: true },
      { text: "D) Hydrogen bond", isCorrect: false }
    ]
  },
  {
    questionText: "9. What is the process of a solid turning directly into a gas called?",
    questionAnswer: [
      { text: "A) Evaporation", isCorrect: false },
      { text: "B) Condensation", isCorrect: false },
      { text: "C) Sublimation", isCorrect: true },
      { text: "D) Melting", isCorrect: false }
    ]
  },
  {
    questionText: "10. Who is known as the Father of the Periodic Table?",
    questionAnswer: [
      { text: "A) John Dalton", isCorrect: false },
      { text: "B) Antoine Lavoisier", isCorrect: false },
      { text: "C) Dmitri Mendeleev", isCorrect: true },
      { text: "D) Niels Bohr", isCorrect: false }
    ]
  }
]

function MedChemistry() {
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

export default MedChemistry;
