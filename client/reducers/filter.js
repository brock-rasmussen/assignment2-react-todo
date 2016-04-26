'use strict'

export default (state = 'ALL', action) => {
  switch (action.type) {
    case 'CHANGE_VISIBLITY_FILTER':
      return action.payload
    default:
      return state
  }
}