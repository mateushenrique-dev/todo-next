import { useTodoContext } from '../../../contexts/todoContext'
import styles from './configs-style.module.scss'

export default function() {

  let { 
    todos, 
    tempTodos,
    handleShowActive, 
    handleShowCompleted, 
    handleClearCompleted,
    handleShowAll
   } = useTodoContext()

  return (
    <div className={styles.configs} draggable="false">
      <p>{tempTodos.length ? tempTodos.length : todos.length} Items</p>
      <div>
        <button onClick={handleShowAll}>All</button>
        <button onClick={handleShowActive}>Active</button>
        <button onClick={handleShowCompleted}>Completed</button>
      </div>
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  )
}