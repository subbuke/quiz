import "./Biology.css"
import { useState } from 'react'

const questions = [
   {
    questionText: "1. What organ pumps blood through the human body?",
    questionAnswer: [
      { text: "A) Brain", isCorrect: false },
      { text: "B) Lungs", isCorrect: false },
      { text: "C) Heart", isCorrect: true },
      { text: "D) Kidney", isCorrect: false }
    ]
  },
  {
    questionText: "2. What gas do plants absorb during photosynthesis?",
    questionAnswer: [
      { text: "A) Oxygen", isCorrect: false },
      { text: "B) Nitrogen", isCorrect: false },
      { text: "C) Carbon dioxide", isCorrect: true },
      { text: "D) Hydrogen", isCorrect: false }
    ]
  },
  {
    questionText: "3. How many legs does an insect have?",
    questionAnswer: [
      { text: "A) Four", isCorrect: false },
      { text: "B) Six", isCorrect: true },
      { text: "C) Eight", isCorrect: false },
      { text: "D) Ten", isCorrect: false }
    ]
  },
  {
    questionText: "4. Which part of the plant is mainly responsible for photosynthesis?",
    questionAnswer: [
      { text: "A) Root", isCorrect: false },
      { text: "B) Stem", isCorrect: false },
      { text: "C) Leaf", isCorrect: true },
      { text: "D) Flower", isCorrect: false }
    ]
  },
  {
    questionText: "5. What do we call animals that eat only plants?",
    questionAnswer: [
      { text: "A) Carnivores", isCorrect: false },
      { text: "B) Omnivores", isCorrect: false },
      { text: "C) Herbivores", isCorrect: true },
      { text: "D) Insectivores", isCorrect: false }
    ]
  }
]

function EasyBiology() {
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

export default EasyBiology;
