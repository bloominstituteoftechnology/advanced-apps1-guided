import React from 'react'
import {} from 'uuid'

export default function Todo(props) {
  const { todo, toggleStatus } = props // we need a spy in the test

  return (
    <div
      onClick={() => toggleStatus(todo.id)}
      className="todo"
    >
      {todo.name}{todo.completed ? ` ✔️` : ''}
    </div>
  )
}
