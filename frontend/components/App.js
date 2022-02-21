import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
import ColorProvider from '../contexts/colors'
import EmojiProvider from '../contexts/emoji'
import CountProvider from '../contexts/count'

export default function App() {
  return (
    <div>
      <CountProvider>
        <EmojiProvider>
          <ColorProvider>
            <TodoList />
            <Form />
          </ColorProvider>
        </EmojiProvider>
      </CountProvider>
    </div>
  )
}
