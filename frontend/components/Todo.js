import React, { useContext } from 'react'
import { ColorContext } from '../contexts/colors'
import { EmojiContext } from '../contexts/emoji'

export default function Todo(props) {
  const { todo, toggleStatus } = props
  const colors = useContext(ColorContext)
  const emoji = useContext(EmojiContext)

  return (
    <div
      style={{ color: colors.black }}
      onClick={() => toggleStatus(todo.id)}
      className="todo"
    >
      {todo.name}{todo.completed ? ` ${emoji.checkmark}` : ''}
    </div>
  )
}
