// 1- Decide what data you want to transmit
// 2- Pull in the createContext helper from React
// 3- Instantiate a Context and export it
// 4- Export default a component using the Context.Provider and the data
// 5- Go to an upper part of the app and wrap it with the provider
// 6- Find a component that wants the data, and pull in the hook and the Context
import React, { createContext } from 'react'

export const ColorContext = createContext()

const colors = {
  red: 'red',
  black: 'black',
  pink: 'pink',
}

export default function ColorProvider(props) {
  return (
    <ColorContext.Provider value={colors}>
      {props.children}
    </ColorContext.Provider>
  )
}
