'use strict'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const devTools = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'

export default (initialState) => {
	return createStore(reducer, initialState, compose(
		applyMiddleware(thunk),
		devTools ? window.devToolsExtension() : (f) => f
	))
}
	