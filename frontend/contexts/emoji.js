import React, { createContext } from 'react'

const emoji = {
  checkmark: '🥰',
}

export const EmojiContext = createContext()

export default function EmojiProvider(props) {
  return (
    <EmojiContext.Provider value={emoji}>
      {props.children}
    </EmojiContext.Provider>
  )
}
