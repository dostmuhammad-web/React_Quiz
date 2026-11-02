import {
  ClockDemo,
  CounterDemo,
  FormDemo,
  HelloDemo,
  PropsDemo,
  TodoDemo,
} from './demos'

const demos = {
  hello: HelloDemo,
  props: PropsDemo,
  counter: CounterDemo,
  todo: TodoDemo,
  form: FormDemo,
  clock: ClockDemo,
}

function Demo({ id, title, desc }) {
  const Component = demos[id]

  if (!Component) return null

  return (
    <section className="demo">
      <div className="demo-head">
        <div>
          <span className="demo-badge">Jonli namuna</span>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <Component />
    </section>
  )
}

export default Demo
