import "./Geopolitics.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "6. What military alliance includes the US and many European countries?",
    questionAnswer: [
      { text: "A) UN", isCorrect: false },
      { text: "B) ASEAN", isCorrect: false },
      { text: "C) NATO", isCorrect: true },
      { text: "D) SAARC", isCorrect: false }
    ]
  },
  {
    questionText: "7. Which country is the most populous in the world?",
    questionAnswer: [
      { text: "A) India", isCorrect: false },
      { text: "B) United States", isCorrect: false },
      { text: "C) China", isCorrect: true },
      { text: "D) Indonesia", isCorrect: false }
    ]
  },
  {
    questionText: "8. What waterway connects the Mediterranean Sea to the Red Sea?",
    questionAnswer: [
      { text: "A) Panama Canal", isCorrect: false },
      { text: "B) Strait of Hormuz", isCorrect: false },
      { text: "C) Suez Canal", isCorrect: true },
      { text: "D) Bosphorus Strait", isCorrect: false }
    ]
  },
  {
    questionText: "9. What term describes influencing other countries without force?",
    questionAnswer: [
      { text: "A) Hard power", isCorrect: false },
      { text: "B) Soft power", isCorrect: true },
      { text: "C) Sanctions", isCorrect: false },
      { text: "D) Militarism", isCorrect: false }
    ]
  },
  {
    questionText: "10. Which international court is located in The Hague?",
    questionAnswer: [
      { text: "A) International Criminal Court", isCorrect: false },
      { text: "B) World Trade Organization", isCorrect: false },
      { text: "C) International Court of Justice", isCorrect: true },
      { text: "D) European Court of Justice", isCorrect: false }
    ]
  }
]

function MedGeopolitics() {
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

export default MedGeopolitics;
