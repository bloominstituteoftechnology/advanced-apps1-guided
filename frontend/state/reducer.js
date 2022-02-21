import * as types from './action-types'
import { combineReducers } from 'redux'

// STEP 1 👈
// Think what slices of state your app needs
// remove any hard-coded data since we'll be using an API
const initialTodos = []
function todos(state = initialTodos, action) {
  switch (action.type) {
    case types.ADD_NEW_TODO:
      return [...state, action.payload]
    case types.ADD_PATCHED_TODO: // action.payload will be the whole patched todo
      return state.map(todo => {
        // loop over the todos and swap the one with a certain id contained in action.payload.id
        let patchedTodo = action.payload
        if (todo.id === patchedTodo.id) {
          return patchedTodo
        }
        return todo
      })
    // alternatively we can assume everything went OK, and do frontend adjustment without using the info from res.data (axios)
    case types.ADD_ALL_TODOS: // action.payload is going to be all the todos from API
      return action.payload
    default:
      return state
  }
}
function shouldShowCompleteds(state = true, action) {
  switch (action.type) {
    case types.TOGGLE_DISPLAY_COMPLETEDS:
      return !state
    default:
      return state
  }
}
function nameInput(state = '', action) {
  switch (action.type) {
    case types.ADD_NEW_TODO:
      return ''
    case types.INPUT_CHANGE:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({ todos, shouldShowCompleteds, nameInput })
