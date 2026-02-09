import "./Geopolitics.css"
import { useState } from 'react'

const questions = [
   {
    questionText: "11. Which doctrine aimed to stop the spread of communism?",
    questionAnswer: [
      { text: "A) Monroe Doctrine", isCorrect: false },
      { text: "B) Truman Doctrine", isCorrect: true },
      { text: "C) Brezhnev Doctrine", isCorrect: false },
      { text: "D) Domino Theory", isCorrect: false }
    ]
  },
  {
    questionText: "12. Which treaty created the European Union?",
    questionAnswer: [
      { text: "A) Treaty of Rome", isCorrect: false },
      { text: "B) Lisbon Treaty", isCorrect: false },
      { text: "C) Maastricht Treaty", isCorrect: true },
      { text: "D) Paris Treaty", isCorrect: false }
    ]
  },
  {
    questionText: "13. Which region is disputed by China, Vietnam, and the Philippines?",
    questionAnswer: [
      { text: "A) East China Sea", isCorrect: false },
      { text: "B) Yellow Sea", isCorrect: false },
      { text: "C) South China Sea", isCorrect: true },
      { text: "D) Sea of Japan", isCorrect: false }
    ]
  },
  {
    questionText: "14. What term describes a country’s control over its territory?",
    questionAnswer: [
      { text: "A) Nationalism", isCorrect: false },
      { text: "B) Federalism", isCorrect: false },
      { text: "C) Sovereignty", isCorrect: true },
      { text: "D) Democracy", isCorrect: false }
    ]
  },
  {
    questionText: "15. What alliance system divided Europe during the Cold War?",
    questionAnswer: [
      { text: "A) UN vs EU", isCorrect: false },
      { text: "B) NATO vs Warsaw Pact", isCorrect: true },
      { text: "C) ASEAN vs SAARC", isCorrect: false },
      { text: "D) Axis vs Allies", isCorrect: false }
    ]
  }
]

function HardGeopolitics() {
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

export default HardGeopolitics;
