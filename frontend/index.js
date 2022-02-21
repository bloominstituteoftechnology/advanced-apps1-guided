import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'

// STEP 5 👈
// bring in the Provider from 'react-redux'
// bring in the 'createStore', 'applyMiddleware' and 'compose' from 'redux
// bring in the 'redux-thunk' library
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// STEP 6 👈
// create a store using the reducer
// apply the thunk middleware
// enable redux dev tools
import reducer from './state/reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

// STEP 7 👈
// wrap the app in the provider
// and pass a store to it
render(
  <Provider store={store}>
    <React.StrictMode>
      <h1>Todo App</h1>
      <App />
    </React.StrictMode>
  </Provider>
  , document.getElementById('root')
)
