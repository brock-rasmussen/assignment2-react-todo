'use strict'

const DEFAULT_STATE = {
  error: null,
  items: []
}

export default (state = DEFAULT_STATE, action) => {
  if (action.error) {
    return Object.assign({}, state, { error: action.payload })
  }
  switch (action.type) {
    case 'TODO_CREATE_SUCCESS':
      return Object.assign({}, state, {
        items: [
          ...state.items,
          action.payload
        ]
      })
    case 'TODO_LIST_SUCCESS':
      return Object.assign({}, state, { items: action.payload })
    case 'TODO_UPDATE_SUCCESS':
      return Object.assign({}, state, {
        items: state.items.map((todo) => {
          if (todo.id === action.payload.id) {
            todo = action.payload
          }
          return todo
        })
      })
    case 'TODO_DELETE_SUCCESS':
      return Object.assign({}, state, {
        items: state.items.filter((todo) => {
          return todo.id !== action.payload
        })
      })
    default:
      return state
  }
}