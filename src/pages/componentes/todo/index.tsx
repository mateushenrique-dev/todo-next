import style from './todo.module.scss'
import { useTodoContext } from '../../../contexts/todoContext'

function TodoUser(props) {

    let {
        handleRemove, 
        handleCheck,
    } = useTodoContext()
    const config = props.config

    return (
        <div className={style.todo} >
            <div className={config.todo.checked ? 'checked' : ''}>
              <label onClick={() => handleCheck(config.index) }>
                <div></div>
              </label>
              <span>{config.todo.text}</span>
            </div>
            <img src="/icon-cross.svg" alt="Close" onClick={ () => handleRemove( config.index ) }/>
        </div>
    )
}
export default TodoUser