import "./Literature.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "6. What is the main character in a story called?",
    questionAnswer: [
      { text: "A) Antagonist", isCorrect: false },
      { text: "B) Narrator", isCorrect: false },
      { text: "C) Protagonist", isCorrect: true },
      { text: "D) Villain", isCorrect: false }
    ]
  },
  {
    questionText: "7. Which novel begins with the line “Call me Ishmael”?",
    questionAnswer: [
      { text: "A) The Old Man and the Sea", isCorrect: false },
      { text: "B) Moby-Dick", isCorrect: true },
      { text: "C) Treasure Island", isCorrect: false },
      { text: "D) Robinson Crusoe", isCorrect: false }
    ]
  },
  {
    questionText: "8. Who wrote Pride and Prejudice?",
    questionAnswer: [
      { text: "A) Emily Brontë", isCorrect: false },
      { text: "B) Charlotte Brontë", isCorrect: false },
      { text: "C) Jane Austen", isCorrect: true },
      { text: "D) Mary Shelley", isCorrect: false }
    ]
  },
  {
    questionText: "9. What literary device gives human traits to non-human things?",
    questionAnswer: [
      { text: "A) Metaphor", isCorrect: false },
      { text: "B) Simile", isCorrect: false },
      { text: "C) Personification", isCorrect: true },
      { text: "D) Alliteration", isCorrect: false }
    ]
  },
  {
    questionText: "10. Which series inspired Game of Thrones?",
    questionAnswer: [
      { text: "A) The Wheel of Time", isCorrect: false },
      { text: "B) The Lord of the Rings", isCorrect: false },
      { text: "C) A Song of Ice and Fire", isCorrect: true },
      { text: "D) The Witcher", isCorrect: false }
    ]
  }
]

function MedLiterature() {
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

export default MedLiterature;
