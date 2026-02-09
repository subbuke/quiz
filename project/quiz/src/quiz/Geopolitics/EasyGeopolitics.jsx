import "./Geopolitics.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "1. What is the capital city of the United States?",
    questionAnswer: [
      { text: "A) New York", isCorrect: false },
      { text: "B) Washington, D.C.", isCorrect: true },
      { text: "C) Los Angeles", isCorrect: false },
      { text: "D) Chicago", isCorrect: false }
    ]
  },
  {
    questionText: "2. Which organization is commonly known as the UN?",
    questionAnswer: [
      { text: "A) European Union", isCorrect: false },
      { text: "B) World Bank", isCorrect: false },
      { text: "C) United Nations", isCorrect: true },
      { text: "D) NATO", isCorrect: false }
    ]
  },
  {
    questionText: "3. Which continent has the most countries?",
    questionAnswer: [
      { text: "A) Asia", isCorrect: false },
      { text: "B) Europe", isCorrect: false },
      { text: "C) Africa", isCorrect: true },
      { text: "D) South America", isCorrect: false }
    ]
  },
  {
    questionText: "4. Which ocean is the largest in the world?",
    questionAnswer: [
      { text: "A) Atlantic Ocean", isCorrect: false },
      { text: "B) Indian Ocean", isCorrect: false },
      { text: "C) Pacific Ocean", isCorrect: true },
      { text: "D) Arctic Ocean", isCorrect: false }
    ]
  },
  {
    questionText: "5. What do we call a country’s official boundary line?",
    questionAnswer: [
      { text: "A) Coastline", isCorrect: false },
      { text: "B) Border", isCorrect: true },
      { text: "C) Territory", isCorrect: false },
      { text: "D) Zone", isCorrect: false }
    ]
  }
]

function EasyGeopolitics() {
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

export default EasyGeopolitics;
