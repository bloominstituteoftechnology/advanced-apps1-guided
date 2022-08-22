import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <h1>Todo App</h1>
    <App />
  </>
)
