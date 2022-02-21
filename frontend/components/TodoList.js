import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
  const { todos, shouldShowCompleteds, patchTodoInApi } = props
  return (
    <div id="todos">
      <h2>Todos:</h2>
      {
        todos.reduce((acc, td) => {
          if (shouldShowCompleteds || !td.completed) return acc.concat(
            <Todo
              todo={td}
              key={td.id}
              toggleStatus={patchTodoInApi}
            />
          )
          return acc
        }, [])
      }
    </div>
  )
}
