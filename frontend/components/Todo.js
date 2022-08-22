import React from 'react'

export default function Todo(props) {
  const { todo, toggleStatus } = props // we need a spy in the test

  return (
    <div
      onClick={toggleStatus}
      className="todo"
    >
      {todo.name}{todo.completed ? ` ✔️` : ''}
    </div>
  )
}
