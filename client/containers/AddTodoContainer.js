'use strict'

import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import { createTodo } from '../actions'

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => ({
  onSubmit(value) {
    if (!value) return
    dispatch(createTodo(value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)