import "./Text.css"
import { useState } from 'react'

const questions = [
 {
    questionText: "1. Which art movement is associated with Wassily Kandinsky?",
    questionAnswer: [
      { text: "A) Cubism", isCorrect: false },
      { text: "B) Abstract Expressionism", isCorrect: true },
      { text: "C) Realism", isCorrect: false },
      { text: "D) Baroque", isCorrect: false }
    ]
  },
  {
    questionText: "2. Who created the Campbell’s Soup Cans artwork?",
    questionAnswer: [
      { text: "A) Salvador Dalí", isCorrect: false },
      { text: "B) Pablo Picasso", isCorrect: false },
      { text: "C) Andy Warhol", isCorrect: true },
      { text: "D) Jackson Pollock", isCorrect: false }
    ]
  },
  {
    questionText: "3. What Japanese aesthetic values imperfection and impermanence?",
    questionAnswer: [
      { text: "A) Ikigai", isCorrect: false },
      { text: "B) Zen", isCorrect: false },
      { text: "C) Wabi-sabi", isCorrect: true },
      { text: "D) Bonsai", isCorrect: false }
    ]
  },
  {
    questionText: "4. Which Renaissance artist sculpted David?",
    questionAnswer: [
      { text: "A) Donatello", isCorrect: false },
      { text: "B) Raphael", isCorrect: false },
      { text: "C) Michelangelo", isCorrect: true },
      { text: "D) Leonardo da Vinci", isCorrect: false }
    ]
  },
  {
    questionText: "5. Which movement focused on light and natural scenes?",
    questionAnswer: [
      { text: "A) Expressionism", isCorrect: false },
      { text: "B) Realism", isCorrect: false },
      { text: "C) Impressionism", isCorrect: true },
      { text: "D) Surrealism", isCorrect: false }
    ]
  }
]

function MedArt() {
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

export default MedArt;
