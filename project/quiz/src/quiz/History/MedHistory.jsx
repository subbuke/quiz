import "./history.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "1. In which year did World War II end?",
    questionAnswer: [
      { text: "A) 1943", isCorrect: false },
      { text: "B) 1944 ", isCorrect: false },
      { text: "C) 1945", isCorrect: true },
      { text: "D) 1946 ", isCorrect: false }
    ]
  },
  {
    questionText: "2.Who was the first man to walk on the Moon?",
    questionAnswer: [
      { text: "A) Buzz Aldrin", isCorrect: false },
      { text: "B) Yuri Gagarin", isCorrect: false },
      { text: "C) Michael Collins", isCorrect: false},
      { text: "D) Neil Armstrong", isCorrect: true }
    ]
  },
  {
    questionText: "3. Which empire was ruled by Julius Caesar?",
    questionAnswer: [
      { text: "A) Greek Empire", isCorrect: false },
      { text: "B) Persian Empire", isCorrect: false },
      { text: "C) Roman Empire", isCorrect: true },
      { text: "D) Ottoman Empire", isCorrect: false }
    ]
  },
  {
    questionText: "4.What wall divided Berlin from 1961 to 1989?",
    questionAnswer: [
      { text: "A) Great Wall", isCorrect: false },
      { text: "B) Iron Curtain", isCorrect: false },
      { text: "C) Berlin Wall", isCorrect: true },
      { text: "D) Cold War Wall", isCorrect: false }
    ]
  },
  {
    questionText: "5. Who wrote the Declaration of Independence?",
    questionAnswer: [
      { text: "A) George Washington", isCorrect: false },
      { text: "B) John Adams", isCorrect: false },
      { text: "C) Benjamin Franklin", isCorrect: false },
      { text: "D) Thomas Jefferson", isCorrect: true }
    ]
  }
]

function MedHistory() {
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

export default MedHistory;
