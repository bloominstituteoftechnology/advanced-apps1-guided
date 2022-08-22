// mock server imports
import server from './backend/mock-server'
import { resetTodos } from './backend/helpers'
// we are going use JSX so we need React
import React from 'react'
// imports from the testing libraries
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // jest matchers for the DOM
// components to test
import App from './frontend/components/App'
import Todo from './frontend/components/Todo'

beforeAll(() => { server.listen() })
afterAll(() => { server.close() })
afterEach(() => { server.resetHandlers() })
beforeEach(() => { resetTodos() })

test('<App /> renders learners synchronously', () => {
  const { rerender } = render(<App learner={undefined} />)
  const learner = screen.queryByText('Jordon', { exact: false })
  expect(learner).toBeInTheDocument()
  // what if we want to make App take a new prop and rerender itself
  rerender(<App learner="Brittany" />)
  expect(screen.queryByText('Jordon', { exact: false })).not.toBeInTheDocument()
  expect(screen.queryByText('Brittany', { exact: false })).toBeInTheDocument()
})
test('<App /> renders "laundry" asynchronously', async () => {
  render(<App learner={undefined} />)
  // screen.getByText('laundry') // only works synchronously
  // screen.queryByText('laundry') // only works synchronously
  expect(await screen.findByText('laundry')).toBeInTheDocument() // use 'find' for async
  screen.getByText('dishes')
  screen.getByText('groceries')
})
test('<Todo /> component renders completion of todos correctly', () => {
  const { rerender } = render(<Todo
    todo={{ name: 'Alex', id: 'xyz', completed: false }}
    toggleStatus={Function.prototype}
  />)
  expect(screen.queryByText('Alex')).toBeInTheDocument()
  rerender(<Todo
    todo={{ name: 'Alex', id: 'xyz', completed: true }}
    toggleStatus={Function.prototype}
  />)
  expect(screen.queryByText('Alex ✔️')).toBeInTheDocument()
  // screen.queryByText('lady gaga') // this is null, test may not fail
  // screen.getByText('lady gaga') // this is a CRASH, test fails for sure
})
test('<Todo /> Clicking on todo fires the toggleStatus handler', () => {
  render(<Todo
    todo={{ name: 'Alex', id: 'xyz', completed: false }}
    toggleStatus={Function.prototype}
  />)
})
test.todo('<App /> Todos can be completed by the user')
test.todo('<App /> Can submit a new todo, and shows up uncompleted')
