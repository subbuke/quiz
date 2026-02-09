import "./Literature.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "1. Who wrote Harry Potter?",
    questionAnswer: [
      { text: "A) J.R.R. Tolkien", isCorrect: false },
      { text: "B) J.K. Rowling", isCorrect: true },
      { text: "C) C.S. Lewis", isCorrect: false },
      { text: "D) George R.R. Martin", isCorrect: false }
    ]
  },
  {
    questionText: "2. What is the term for a story that is not true?",
    questionAnswer: [
      { text: "A) Biography", isCorrect: false },
      { text: "B) Fiction", isCorrect: true },
      { text: "C) History", isCorrect: false },
      { text: "D) Essay", isCorrect: false }
    ]
  },
  {
    questionText: "3. Who wrote The Adventures of Tom Sawyer?",
    questionAnswer: [
      { text: "A) Charles Dickens", isCorrect: false },
      { text: "B) Mark Twain", isCorrect: true },
      { text: "C) Ernest Hemingway", isCorrect: false },
      { text: "D) John Steinbeck", isCorrect: false }
    ]
  },
  {
    questionText: "4. What is a poem of 14 lines called?",
    questionAnswer: [
      { text: "A) Ode", isCorrect: false },
      { text: "B) Haiku", isCorrect: false },
      { text: "C) Sonnet", isCorrect: true },
      { text: "D) Ballad", isCorrect: false }
    ]
  },
  {
    questionText: "5. Who wrote Romeo and Juliet?",
    questionAnswer: [
      { text: "A) William Wordsworth", isCorrect: false },
      { text: "B) John Milton", isCorrect: false },
      { text: "C) William Shakespeare", isCorrect: true },
      { text: "D) Geoffrey Chaucer", isCorrect: false }
    ]
  }
]

function EasyLiterature() {
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

export default EasyLiterature;
