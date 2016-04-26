'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store.js'
import App from './components/App'

export default (initialState) => {
  return (
    <Provider store={configureStore(initialState)}>
      <App />
    </Provider>
  )
}