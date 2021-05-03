
import style from './index.module.scss'
import NewTodo from './componentes/newtodo'
import Todos from './componentes/todos'
import { TodoContextProvider } from '../contexts/todoContext'

export default function Home() {


  function toggleMode() {
    document.body.classList.toggle('dark')
  }

  return (
    <TodoContextProvider>
      <header className={style.header}/>
      <main className={style.main}>
        <section className={style.mode}>
          <h1 className={style.title}>ToDo</h1>
          <div><img src="/icon-moon.svg" alt="Moon" onClick={toggleMode}/></div>
        </section>
        <NewTodo />
        <div className={style.todos}>
          <Todos />
        </div>
      </main>
    </TodoContextProvider>
  )
}
