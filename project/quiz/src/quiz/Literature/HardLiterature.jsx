import "./Literature.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "11. Who is considered the father of modern detective fiction?",
    questionAnswer: [
      { text: "A) Arthur Conan Doyle", isCorrect: false },
      { text: "B) Edgar Allan Poe", isCorrect: true },
      { text: "C) Agatha Christie", isCorrect: false },
      { text: "D) Raymond Chandler", isCorrect: false }
    ]
  },
  {
    questionText: "12. What narrative technique shows a character’s thoughts as they occur?",
    questionAnswer: [
      { text: "A) Flashback", isCorrect: false },
      { text: "B) Stream of consciousness", isCorrect: true },
      { text: "C) Foreshadowing", isCorrect: false },
      { text: "D) Irony", isCorrect: false }
    ]
  },
  {
    questionText: "13. Who wrote Crime and Punishment?",
    questionAnswer: [
      { text: "A) Leo Tolstoy", isCorrect: false },
      { text: "B) Anton Chekhov", isCorrect: false },
      { text: "C) Fyodor Dostoevsky", isCorrect: true },
      { text: "D) Ivan Turgenev", isCorrect: false }
    ]
  },
  {
    questionText: "14. What is a story within a story called?",
    questionAnswer: [
      { text: "A) Allegory", isCorrect: false },
      { text: "B) Parable", isCorrect: false },
      { text: "C) Frame story", isCorrect: true },
      { text: "D) Satire", isCorrect: false }
    ]
  },
  {
    questionText: "15. Who wrote Waiting for Godot?",
    questionAnswer: [
      { text: "A) Harold Pinter", isCorrect: false },
      { text: "B) Eugene O’Neill", isCorrect: false },
      { text: "C) Samuel Beckett", isCorrect: true },
      { text: "D) Bertolt Brecht", isCorrect: false }
    ]
  }
]

function HardLiterature() {
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

export default HardLiterature;
