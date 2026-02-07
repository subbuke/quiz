import "./history.css"
import { useState } from 'react'

const questions = [
  {
    questionText: "1. What treaty ended World War I?",
    questionAnswer: [
      { text: "A) Treaty of Paris", isCorrect: false },
      { text: "B) Treaty of Vienna", isCorrect: false },
      { text: "C) Treaty of Versailles", isCorrect: true },
      { text: "D) Treaty of London", isCorrect: false }
    ]
  },
  {
    questionText: "2. Which ancient city was destroyed by Mount Vesuvius in 79 AD?",
    questionAnswer: [
      { text: "A) Athens", isCorrect: false },
      { text: "B) Rome", isCorrect: false },
      { text: "C) Troy", isCorrect: false},
      { text: "D) Pompeii", isCorrect: true }
    ]
  },
  {
    questionText: "3. Who was the first female Prime Minister of the United Kingdom?",
    questionAnswer: [
      { text: "A)Theresa May", isCorrect: false },
      { text: "B) Queen Elizabeth I", isCorrect: false },
      { text: "C) Indira Gandhi", isCorrect: false },
      { text: "D) Margaret Thatcher", isCorrect: true }
    ]
  },
  {
    questionText: "4.What was the name of the first successful English colony in America?",
    questionAnswer: [
      { text: "A) Plymouth", isCorrect: false },
      { text: "B) Roanoke", isCorrect: false },
      { text: "C) Massachusetts Bay", isCorrect: false },
      { text: "D) Jamestown", isCorrect: true }
    ]
  },
  {
    questionText: "5. Which war was fought between the North and South regions of the United States?",
    questionAnswer: [
      { text: "A) American Civil War", isCorrect: true },
      { text: "B) Revolutionary War", isCorrect: false },
      { text: "C) World War I", isCorrect: false },
      { text: "D) War of 1812", isCorrect: false }
    ]
  }
]

function HardHistory() {
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

export default HardHistory;
