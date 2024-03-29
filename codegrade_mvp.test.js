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

test.todo('<App /> renders learners synchronously')
test.todo('<App /> renders "laundry" asynchronously')
test.todo('<Todo /> component renders completion of todos correctly')
test.todo('<Todo /> Clicking on todo fires the toggleStatus handler')
test.todo('<App /> Todos can be completed by the user')
test.todo('<App /> Can submit a new todo, and shows up uncompleted')
