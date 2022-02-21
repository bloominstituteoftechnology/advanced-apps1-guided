// 1- Decide what state & callbacks you want to transmit
// 2- Pull in the createContext helper from React
// 3- Instantiate a Context and export it
// 4- Export default a component using the Context.Provider and the data
// 5- Go to an upper part of the app and wrap it with the provider
// 6- Find a component that wants the data, and pull in the hook and the Context
import React, { createContext, useState } from 'react'

export const CountContext = createContext()

export default function CountProvider(props) {
  // dozens of states
  // dozens of callbacks
  const [count, setCount] = useState(0)
  const inc = () => setCount(count + 1)
  const dec = () => setCount(count - 1)

  return (
    <CountContext.Provider value={{ count, inc, dec }}>
      {props.children}
    </CountContext.Provider>
  )
}
