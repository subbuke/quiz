import "./Biology.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "11. What molecule carries genetic information?",
    questionAnswer: [
      { text: "A) RNA", isCorrect: false },
      { text: "B) Protein", isCorrect: false },
      { text: "C) DNA", isCorrect: true },
      { text: "D) Lipid", isCorrect: false }
    ]
  },
  {
    questionText: "12. Which organelle is known as the powerhouse of the cell?",
    questionAnswer: [
      { text: "A) Nucleus", isCorrect: false },
      { text: "B) Ribosome", isCorrect: false },
      { text: "C) Mitochondria", isCorrect: true },
      { text: "D) Golgi apparatus", isCorrect: false }
    ]
  },
  {
    questionText: "13. What process divides a cell into two identical cells?",
    questionAnswer: [
      { text: "A) Meiosis", isCorrect: false },
      { text: "B) Mitosis", isCorrect: true },
      { text: "C) Fertilization", isCorrect: false },
      { text: "D) Diffusion", isCorrect: false }
    ]
  },
  {
    questionText: "14. Which system controls hormones in the body?",
    questionAnswer: [
      { text: "A) Nervous system", isCorrect: false },
      { text: "B) Digestive system", isCorrect: false },
      { text: "C) Endocrine system", isCorrect: true },
      { text: "D) Respiratory system", isCorrect: false }
    ]
  },
  {
    questionText: "15. What term describes a stable internal environment?",
    questionAnswer: [
      { text: "A) Adaptation", isCorrect: false },
      { text: "B) Evolution", isCorrect: false },
      { text: "C) Homeostasis", isCorrect: true },
      { text: "D) Metabolism", isCorrect: false }
    ]
  }
]

function HardBiology() {
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

export default HardBiology;
