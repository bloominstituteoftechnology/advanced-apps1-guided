// STEP 3 👈
// Build synchronous action creators
// your components can use to send { action, payload } to the reducer
import * as types from './action-types'
import axios from 'axios'

// action creators are callbacks that can be used inside components,
// which use info available inside the component as raw material
// and return an ACTION object { type, payload }
// the action contains everything needed to compute a new state
export const inputChange = value => ({ type: types.INPUT_CHANGE, payload: value })
export const toggleShowCompleteds = () => ({ type: types.TOGGLE_DISPLAY_COMPLETEDS })

// STEP 4 👈
// Build asynchronous action creators
// these are used in your components as well, but they are not synchronous action creators
// but functions with asynchronous activity inside. When the values we want are resolved
// the synchronous action creators can be called
export const fetchTodosFromApi = () => dispatch => {
  axios.get(`http://localhost:9000/api/todos`)
    .then(res => {
      dispatch({ type: types.ADD_ALL_TODOS, payload: res.data.data })
    })
    .catch(err => {
      // render the err to the frontend
      debugger
    })
}
export const patchTodoInApi = id => dispatch => {
  axios.patch(`http://localhost:9000/api/todos/${id}`)
    .then(res => {
      dispatch({ type: types.ADD_PATCHED_TODO, payload: res.data.data })
    })
    .catch(err => {
      // render the err to the frontend
      debugger
    })
}
export const postTodoToApi = name => dispatch => {
  axios.post(`http://localhost:9000/api/todos`, { name: name })
    .then(res => {
      dispatch({ type: types.ADD_NEW_TODO, payload: res.data.data })
    })
    .catch(err => {
      // render the err to the frontend
      debugger
    })
}
