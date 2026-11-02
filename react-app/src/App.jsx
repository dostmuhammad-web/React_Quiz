import { useEffect, useState } from 'react'
import { lessons } from './data/lessons'
import CodeBlock from './components/CodeBlock'
import Quiz from './components/Quiz'
import Demo from './components/Demo'
import { CheckIcon, ChevronIcon, Logo, MenuIcon, MoonIcon, SunIcon } from './components/Icons'

const PROGRESS_KEY = 'react-course-progress-v1'
const THEME_KEY = 'react-course-theme'

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

function readTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function Section({ section }) {
  switch (section.t) {
    case 'p':
      return <p>{section.text}</p>
    case 'h':
      return <h2>{section.text}</h2>
    case 'list':
      return (
        <ul className="lesson-list">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'code':
      return <CodeBlock code={section.code} lang={section.lang} />
    case 'note':
      return (
        <aside className="note">
          <span className="note-label">Eslatma</span>
          <p>{section.text}</p>
        </aside>
      )
    case 'demo':
      return <Demo id={section.id} title={section.title} desc={section.desc} />
    default:
      return null
  }
}

function App() {
  const [activeId, setActiveId] = useState(lessons[0].id)
  const [completed, setCompleted] = useState(readProgress)
  const [theme, setTheme] = useState(readTheme)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(completed))
  }, [completed])

  const index = lessons.findIndex((l) => l.id === activeId)
  const lesson = lessons[index]
  const nextLesson = lessons[index + 1]
  const isDone = completed.includes(lesson.id)
  const progress = Math.round((completed.length / lessons.length) * 100)

  function selectLesson(id) {
    setActiveId(id)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function markDone() {
    if (isDone) return
    setCompleted((old) => [...old, lesson.id])
  }

  return (
    <div className="app">
      <header className="topbar">
        <button
          className="icon-btn menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menyuni ochish"
          type="button"
        >
          <MenuIcon />
        </button>

        <button className="brand" onClick={() => selectLesson(lessons[0].id)} type="button">
          <span className="brand-logo">
            <Logo />
          </span>
          <span className="brand-text">
            <strong>React O’quv</strong>
            <small>Interaktiv kurs</small>
          </span>
        </button>

        <div className="topbar-right">
          <div className="progress-chip" title="Kurs jarayoni">
            <span className="progress-track">
              <span style={{ width: progress + '%' }} />
            </span>
            <span className="progress-value">{progress}%</span>
          </div>
          <button
            className="icon-btn"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label="Mavzuni almashtirish"
            type="button"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>

      <div className="layout">
        {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

        <aside className={'sidebar' + (menuOpen ? ' is-open' : '')}>
          <div className="sidebar-head">
            <span>Kurs dasturi</span>
            <span className="sidebar-count">
              {completed.length}/{lessons.length}
            </span>
          </div>

          <nav className="nav">
            {lessons.map((item, i) => {
              const done = completed.includes(item.id)
              return (
                <button
                  key={item.id}
                  className={
                    'nav-item' + (item.id === activeId ? ' is-active' : '') + (done ? ' is-done' : '')
                  }
                  onClick={() => selectLesson(item.id)}
                  type="button"
                >
                  <span className="nav-num">{done ? <CheckIcon /> : String(i + 1).padStart(2, '0')}</span>
                  <span className="nav-text">
                    <span className="nav-title">{item.title}</span>
                    <span className="nav-meta">{item.minutes} daqiqa</span>
                  </span>
                  {item.id === activeId && <ChevronIcon />}
                </button>
              )
            })}
          </nav>

          <div className="sidebar-foot">
            <p>Har bir darsdan keyin test bor. Natijangiz brauzerda saqlanadi.</p>
          </div>
        </aside>

        <main className="content">
          <article className="lesson">
            <div className="lesson-kicker">
              Dars {index + 1} / {lessons.length}
            </div>
            <h1>{lesson.title}</h1>
            <p className="lesson-summary">{lesson.summary}</p>
            <div className="lesson-meta">
              <span>O’qish vaqti: {lesson.minutes} daqiqa</span>
              {isDone && <span className="lesson-done">Bajarildi</span>}
            </div>

            <div className="lesson-body">
              {lesson.sections.map((section, i) => (
                <Section key={i} section={section} />
              ))}
            </div>

            <Quiz key={lesson.id} questions={lesson.quiz} />

            <div className="lesson-actions">
              <button
                className={'btn ' + (isDone ? 'btn-ghost' : 'btn-primary')}
                onClick={markDone}
                disabled={isDone}
                type="button"
              >
                {isDone ? 'Dars tugatilgan' : 'Darsni tugatdim'}
              </button>
              {nextLesson && (
                <button className="btn btn-secondary" onClick={() => selectLesson(nextLesson.id)} type="button">
                  Keyingi: {nextLesson.title}
                </button>
              )}
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}

export default App
