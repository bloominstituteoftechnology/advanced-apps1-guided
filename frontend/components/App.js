import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
import ColorProvider from '../contexts/colors'
import EmojiProvider from '../contexts/emoji'
import CountProvider from '../contexts/count'

export default function App(props) {
  return (
    <div>
      {props.learner || 'Luis'} is the learner of the day
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
