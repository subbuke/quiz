import "./Text.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "1. What primary colors are used in painting?",
    questionAnswer: [
      { text: "A) Red, Blue, Yellow", isCorrect: true },
      { text: "B) Green, Orange, Purple", isCorrect: false },
      { text: "C) Black, White, Gray", isCorrect: false },
      { text: "D) Pink, Brown, Gold", isCorrect: false }
    ]
  },
  {
    questionText: "2. Which famous artist painted the Mona Lisa?",
    questionAnswer: [
      { text: "A) Pablo Picasso", isCorrect: false },
      { text: "B) Vincent van Gogh", isCorrect: false },
      { text: "C) Leonardo da Vinci", isCorrect: true },
      { text: "D) Michelangelo", isCorrect: false }
    ]
  },
  {
    questionText: "3. What type of paint is made from pigment and water?",
    questionAnswer: [
      { text: "A) Oil paint", isCorrect: false },
      { text: "B) Acrylic paint", isCorrect: false },
      { text: "C) Watercolor", isCorrect: true },
      { text: "D) Spray paint", isCorrect: false }
    ]
  },
  {
    questionText: "4. What is the art of folding paper into shapes called?",
    questionAnswer: [
      { text: "A) Calligraphy", isCorrect: false },
      { text: "B) Origami", isCorrect: true },
      { text: "C) Pottery", isCorrect: false },
      { text: "D) Sculpture", isCorrect: false }
    ]
  },
  {
    questionText: "5. Which country is famous for ukiyo-e woodblock prints?",
    questionAnswer: [
      { text: "A) China", isCorrect: false },
      { text: "B) Korea", isCorrect: false },
      { text: "C) Japan", isCorrect: true },
      { text: "D) Thailand", isCorrect: false }
    ]
  }
]

function EasyArt() {
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

export default EasyArt;
