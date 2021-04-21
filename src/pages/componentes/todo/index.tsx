import style from './todo.module.scss'

export default function Todo(props) {
  return (
    <div className={style.todo}>
      <div>
        <label />
        <span>{props.content}</span>
      </div>
      <img src="/icon-cross.svg" alt="Close" />
    </div>
  )
}