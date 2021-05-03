import { useTodoContext } from '../../../contexts/todoContext'
import style from './newtodo.module.scss'
 
export default function NewTodo() {

  let {handleCreateNewTodo} = useTodoContext()

 
  return (
    <div className={style.newtodo}>
      <label />
      <input onKeyDown={handleCreateNewTodo} type="text"/>
    </div>
  )
}