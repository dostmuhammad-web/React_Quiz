import { useState } from 'react'

function Quiz({ questions }) {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const question = questions[index]

  function choose(optionIndex) {
    if (picked !== null) return
    setPicked(optionIndex)
    if (optionIndex === question.answer) setScore((s) => s + 1)
  }

  function next() {
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1)
      setPicked(null)
    } else {
      setFinished(true)
    }
  }

  function restart() {
    setIndex(0)
    setPicked(null)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    const perfect = score === questions.length
    return (
      <section className="quiz quiz-done">
        <span className="quiz-badge">Test yakunlandi</span>
        <h3>
          Natija: {score} / {questions.length}
        </h3>
        <p>
          {perfect
            ? 'Ajoyib! Bu darsni to’liq o’zlashtirdingiz.'
            : 'Yaxshi harakat! Darsni qayta o’qib, testni yana urinib ko’ring.'}
        </p>
        <button className="btn btn-secondary" onClick={restart}>
          Qayta urinish
        </button>
      </section>
    )
  }

  return (
    <section className="quiz">
      <div className="quiz-head">
        <span className="quiz-badge">Bilimingizni sinang</span>
        <span className="quiz-count">
          {index + 1} / {questions.length}
        </span>
      </div>
      <h3 className="quiz-question">{question.q}</h3>
      <div className="quiz-options">
        {question.options.map((option, i) => {
          let state = ''
          if (picked !== null) {
            if (i === question.answer) state = ' is-correct'
            else if (i === picked) state = ' is-wrong'
          }
          return (
            <button
              key={i}
              className={'quiz-option' + state}
              onClick={() => choose(i)}
              disabled={picked !== null}
              type="button"
            >
              <span className="quiz-letter">{String.fromCharCode(65 + i)}</span>
              <span>{option}</span>
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <div className="quiz-explain">
          <p>
            <strong>{picked === question.answer ? 'To’g’ri! ' : 'Xato. '}</strong>
            {question.why}
          </p>
          <button className="btn btn-small btn-primary" onClick={next} type="button">
            {index + 1 < questions.length ? 'Keyingi savol' : 'Natijani ko’rish'}
          </button>
        </div>
      )}
    </section>
  )
}

export default Quiz
