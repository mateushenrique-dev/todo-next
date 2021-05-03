import { useState } from 'react'
import { useTodoContext } from '../../../contexts/todoContext'
import ConfigsTodo from '../configsTodo'
import TodoUser from '../todo'

export default function Todo() {

  const { todos, tempTodos } = useTodoContext()

  console.log(todos)
  console.log(tempTodos)

  return (
      <>
        <section className='allTodos'>
          {(tempTodos.length ? tempTodos : todos).map((todo, index) => {
            return (
                <TodoUser key={index} config={
                  {
                    todo,
                    index,
                  }
                } />
            )
          })}
        </section>
        <ConfigsTodo/>
      </>
  )
}