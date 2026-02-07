import "./Chemistry.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "1. What is the chemical symbol for water?",
    questionAnswer: [
      { text: "A) H2O", isCorrect: true },
      { text: "B) O2", isCorrect: false },
      { text: "C) CO2", isCorrect: false },
      { text: "D) HO", isCorrect: false }
    ]
  },
  {
    questionText: "2. What is the chemical symbol for gold?",
    questionAnswer: [
      { text: "A) Ag", isCorrect: false },
      { text: "B) Au", isCorrect: true },
      { text: "C) Gd", isCorrect: false },
      { text: "D) Go", isCorrect: false }
    ]
  },
  {
    questionText: "3. What is the most abundant gas in Earth’s atmosphere?",
    questionAnswer: [
      { text: "A) Oxygen", isCorrect: false },
      { text: "B) Carbon dioxide", isCorrect: false },
      { text: "C) Nitrogen", isCorrect: true },
      { text: "D) Hydrogen", isCorrect: false }
    ]
  },
  {
    questionText: "4. What do you call a substance made of only one type of atom?",
    questionAnswer: [
      { text: "A) Compound", isCorrect: false },
      { text: "B) Mixture", isCorrect: false },
      { text: "C) Element", isCorrect: true },
      { text: "D) Molecule", isCorrect: false }
    ]
  },
  {
    questionText: "5. What is the pH of pure water?",
    questionAnswer: [
      { text: "A) 0", isCorrect: false },
      { text: "B) 5", isCorrect: false },
      { text: "C) 7", isCorrect: true },
      { text: "D) 14", isCorrect: false }
    ]
  }
]

function EasyChemistry() {
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

export default EasyChemistry;
