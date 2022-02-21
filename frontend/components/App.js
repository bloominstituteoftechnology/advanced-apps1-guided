import React, { useState, useEffect } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import axios from 'axios'

export default function App(props) {
  const [todos, setTodos] = useState([])
  const [shouldShowCompleteds, setShouldShowCompleteds] = useState(true)
  const [nameInput, setNameInput] = useState('')

  const fetchTodosFromApi = () => {
    axios.get(`http://localhost:9000/api/todos`)
      .then(res => {
        setTodos(res.data.data)
      })
      .catch(err => {
        debugger
      })
  }
  const patchTodoInApi = id => {
    axios.patch(`http://localhost:9000/api/todos/${id}`)
      .then(res => {
        setTodos(todos.map(todo => {
          return todo.id == id ? res.data.data : todo
        }))
      })
      .catch(err => {
        debugger
      })
  }
  const postTodoToApi = name => {
    axios.post(`http://localhost:9000/api/todos`, { name })
      .then(res => {
        setTodos(todos.concat(res.data.data))
        setNameInput('')
      })
      .catch(err => {
        debugger
      })
  }

  const toggleShowCompleteds = () => {
    setShouldShowCompleteds(!shouldShowCompleteds)
  }

  useEffect(() => {
    fetchTodosFromApi()
  }, [])

  return (
    <div>
      {props.learner || 'Luis'} is the learner of the day
      <TodoList
        shouldShowCompleteds={shouldShowCompleteds}
        patchTodoInApi={patchTodoInApi}
        todos={todos}
      />
      <Form
        nameInput={nameInput}
        postTodoToApi={postTodoToApi}
        inputChange={setNameInput}
        shouldShowCompleteds={shouldShowCompleteds}
        toggleShowCompleteds={toggleShowCompleteds}
      />
    </div>
  )
}
