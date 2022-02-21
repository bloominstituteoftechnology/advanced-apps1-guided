import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

// STEP 9 👈
// Fix this component so it triggers
// the POSTing of a new todo to the API
export function Form(props) {
  const onSubmit = evt => {
    evt.preventDefault()
    props.postTodoToApi(props.nameInput)
  }
  const onChange = evt => {
    const { value } = evt.target
    props.inputChange(value)
  }
  const {
    toggleShowCompleteds,
    shouldShowCompleteds,
    nameInput,
  } = props

  return (
    <>
      <form id="todoForm" onSubmit={onSubmit}>
        <input
          value={nameInput}
          onChange={onChange}
          type="text"
          placeholder="Type todo"
        />
        <input type="submit" disabled={!nameInput.length} />
      </form>

      <button onClick={toggleShowCompleteds}>
        {shouldShowCompleteds ? 'Hide' : 'Show'} Completed
      </button>
    </>
  )
}
export default connect(state => state, actionCreators)(Form)
