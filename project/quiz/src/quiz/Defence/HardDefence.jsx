import "./Defence.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "11. Which treaty limits the spread of nuclear weapons?",
    questionAnswer: [
      { text: "A) Geneva Convention", isCorrect: false },
      { text: "B) SALT Treaty", isCorrect: false },
      { text: "C) Nuclear Test Ban Treaty", isCorrect: false },
      { text: "D) Nuclear Non-Proliferation Treaty (NPT)", isCorrect: true }
    ]
  },
  {
    questionText: "12. Which country first developed nuclear weapons?",
    questionAnswer: [
      { text: "A) Germany", isCorrect: false },
      { text: "B) Soviet Union", isCorrect: false },
      { text: "C) United States", isCorrect: true },
      { text: "D) United Kingdom", isCorrect: false }
    ]
  },
  {
    questionText: "13. What are unmanned aerial vehicles commonly called?",
    questionAnswer: [
      { text: "A) Jets", isCorrect: false },
      { text: "B) Satellites", isCorrect: false },
      { text: "C) Drones (UAVs)", isCorrect: true },
      { text: "D) Missiles", isCorrect: false }
    ]
  },
  {
    questionText: "14. Who wrote the military theory book 'On War'?",
    questionAnswer: [
      { text: "A) Sun Tzu", isCorrect: false },
      { text: "B) Napoleon Bonaparte", isCorrect: false },
      { text: "C) Carl von Clausewitz", isCorrect: true },
      { text: "D) Alexander the Great", isCorrect: false }
    ]
  },
  {
    questionText: "15. What doctrine prevents war through threat of retaliation?",
    questionAnswer: [
      { text: "A) Expansionism", isCorrect: false },
      { text: "B) Deterrence", isCorrect: true },
      { text: "C) Isolationism", isCorrect: false },
      { text: "D) Neutrality", isCorrect: false }
    ]
  }
]

function HardDefence() {
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

export default HardDefence;
