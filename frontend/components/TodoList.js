import React, { useEffect } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

// STEP 8 👈
// Connect this component
// and trigger the fetching of the todos from the API
// and the toggling of a todo's status
export function TodoList(props) {
  useEffect(() => {
    props.fetchTodosFromApi()
  }, [])
  const { todos, shouldShowCompleteds, patchTodoInApi } = props
  return (
    <div id="todos">
      <h2>Todos:</h2>
      {
        todos.reduce((acc, td) => {
          if (shouldShowCompleteds || !td.completed) return acc.concat(
            <Todo
              todo={td}
              key={td.id}
              toggleStatus={patchTodoInApi}
            />
          )
          return acc
        }, [])
      }
    </div>
  )
}
export default connect(state => state, actionCreators)(TodoList)
