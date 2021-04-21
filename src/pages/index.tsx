
import style from './index.module.scss'
import NewTodo from './componentes/newtodo'
import Todo from './componentes/todo'
import ConfigsTodo from './componentes/configsTodo'

export default function Home() {
  return (
    <>
      <header className={style.header}/>
      <main className={style.main}>
        <div className={style.mode}>
          <h1 className={style.title}>ToDo</h1>
          <div><img src="/icon-moon.svg" alt="Moon"/></div>
        </div>
        <NewTodo />
        <div className={style.todos}>
          <Todo className={style.firsttodo} content="Complete online JavaScript course"/>
          <Todo content="Jag around the park 3x"/>
          <Todo content="10 minutes meditation"/>
          <Todo content="Read for 1 hour"/>
          <Todo content="Pick up groceries"/>
          <Todo className={style.lasttodo} content="Complete Todo App on Frontend Mentor"/>
          <ConfigsTodo/>
        </div>
        <p className={style.drag}>Drag and drop to reorder list</p>
      </main>
    </>
  )
}
