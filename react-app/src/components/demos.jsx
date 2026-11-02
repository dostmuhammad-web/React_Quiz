import { useEffect, useState } from 'react'

const YIL = new Date().getFullYear()

export function HelloDemo() {
  const ism = 'Dunyo'

  return (
    <div className="demo-stage">
      <div className="demo-card">
        <h4>Salom, {ism}!</h4>
        <p>Hozir {YIL}-yil.</p>
        <p className="demo-hint">2 + 2 = {2 + 2} — ifodalar figurali qavsda hisoblanadi.</p>
      </div>
    </div>
  )
}

function Salomlash({ ism, kasb }) {
  return (
    <div className="demo-card">
      <h4>Salom, {ism}!</h4>
      <p>Kasbingiz: {kasb}</p>
    </div>
  )
}

export function PropsDemo() {
  const [ism, setIsm] = useState('Ali')
  const [kasb, setKasb] = useState('dasturchi')

  return (
    <div className="demo-stage demo-grid">
      <div className="demo-controls">
        <label>
          Ism
          <input value={ism} onChange={(e) => setIsm(e.target.value)} placeholder="Ism kiriting" />
        </label>
        <label>
          Kasb
          <input value={kasb} onChange={(e) => setKasb(e.target.value)} placeholder="Kasb kiriting" />
        </label>
        <p className="demo-hint">Bu qiymatlar props sifatida bola komponentga uzatiladi.</p>
      </div>
      <Salomlash ism={ism || '…'} kasb={kasb || '…'} />
    </div>
  )
}

export function CounterDemo() {
  const [son, setSon] = useState(0)

  return (
    <div className="demo-stage">
      <div className="demo-card demo-center">
        <p className="demo-value">{son}</p>
        <p className="demo-hint">{son % 2 === 0 ? 'Juft son' : 'Toq son'}</p>
        <div className="demo-row">
          <button className="btn btn-small" onClick={() => setSon((old) => old - 1)}>
            −1
          </button>
          <button className="btn btn-small btn-primary" onClick={() => setSon((old) => old + 1)}>
            +1
          </button>
          <button className="btn btn-small btn-ghost" onClick={() => setSon(0)}>
            Tozalash
          </button>
        </div>
      </div>
    </div>
  )
}

export function TodoDemo() {
  const [matn, setMatn] = useState('')
  const [vazifalar, setVazifalar] = useState([
    { id: 1, text: 'JSX asoslarini takrorlash', done: true },
    { id: 2, text: 'useState bilan mashq qilish', done: false },
    { id: 3, text: 'Kichik loyiha boshlash', done: false },
  ])

  function qoshish(e) {
    e.preventDefault()
    const tozalangan = matn.trim()
    if (!tozalangan) return
    setVazifalar((old) => [...old, { id: Date.now(), text: tozalangan, done: false }])
    setMatn('')
  }

  function almashtirish(id) {
    setVazifalar((old) => old.map((v) => (v.id === id ? { ...v, done: !v.done } : v)))
  }

  function ochirish(id) {
    setVazifalar((old) => old.filter((v) => v.id !== id))
  }

  const bajarilgan = vazifalar.filter((v) => v.done).length

  return (
    <div className="demo-stage">
      <div className="demo-card">
        <form className="demo-row" onSubmit={qoshish}>
          <input
            className="demo-grow"
            value={matn}
            onChange={(e) => setMatn(e.target.value)}
            placeholder="Yangi vazifa…"
          />
          <button className="btn btn-small btn-primary" type="submit">
            Qo’shish
          </button>
        </form>
        <ul className="demo-list">
          {vazifalar.map((v) => (
            <li key={v.id} className={v.done ? 'is-done' : ''}>
              <button className="demo-check" onClick={() => almashtirish(v.id)} aria-label="Belgilash">
                {v.done ? '✓' : ''}
              </button>
              <span>{v.text}</span>
              <button className="demo-remove" onClick={() => ochirish(v.id)} aria-label="O’chirish">
                ×
              </button>
            </li>
          ))}
          {vazifalar.length === 0 && <li className="demo-empty">Vazifalar yo’q</li>}
        </ul>
        <p className="demo-hint">
          {bajarilgan} / {vazifalar.length} bajarilgan
        </p>
      </div>
    </div>
  )
}

export function FormDemo() {
  const [ism, setIsm] = useState('')
  const [email, setEmail] = useState('')
  const [xabar, setXabar] = useState('')
  const [natija, setNatija] = useState(null)

  function yuborish(e) {
    e.preventDefault()
    if (!ism.trim() || !email.includes('@')) {
      setXabar('Ismni kiriting va to’g’ri email yozing.')
      setNatija(null)
      return
    }
    setXabar('')
    setNatija({ ism: ism.trim(), email: email.trim() })
  }

  return (
    <div className="demo-stage demo-grid">
      <form className="demo-card demo-form" onSubmit={yuborish}>
        <label>
          Ism
          <input value={ism} onChange={(e) => setIsm(e.target.value)} placeholder="Aziza" />
        </label>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="aziza@mail.uz" />
        </label>
        <button className="btn btn-small btn-primary" type="submit">
          Yuborish
        </button>
        {xabar && <p className="demo-error">{xabar}</p>}
      </form>
      <div className="demo-card">
        <h4>State ko’rinishi</h4>
        <pre className="demo-json">
          {JSON.stringify({ ism, email }, null, 2)}
        </pre>
        {natija && (
          <p className="demo-ok">
            Yuborildi: {natija.ism} ({natija.email})
          </p>
        )}
      </div>
    </div>
  )
}

export function ClockDemo() {
  const [vaqt, setVaqt] = useState(() => new Date())
  const [ishlayapti, setIshlayapti] = useState(true)

  useEffect(() => {
    if (!ishlayapti) return
    const id = setInterval(() => setVaqt(new Date()), 1000)
    return () => clearInterval(id)
  }, [ishlayapti])

  return (
    <div className="demo-stage">
      <div className="demo-card demo-center">
        <p className="demo-clock">{vaqt.toLocaleTimeString()}</p>
        <p className="demo-hint">
          {ishlayapti ? 'useEffect taymeri ishlayapti' : 'Taymer to’xtatildi — cleanup bajarildi'}
        </p>
        <button className="btn btn-small btn-primary" onClick={() => setIshlayapti((v) => !v)}>
          {ishlayapti ? 'To’xtatish' : 'Davom ettirish'}
        </button>
      </div>
    </div>
  )
}

