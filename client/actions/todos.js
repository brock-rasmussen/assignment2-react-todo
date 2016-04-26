'use strict'

import request from 'axios'

const createTodoRequest = (todo) => ({
  type: 'TODO_CREATE_REQUEST',
  payload: todo
})
const createTodoSuccess = (todo) => ({
  type: 'TODO_CREATE_SUCCESS',
  payload: todo
})
const createTodoFailure = (err) => ({
  type: 'TODO_CREATE_FAILURE',
  payload: err,
  error: true
})

export const createTodo = (name) => (dispatch) => {
  const todo = {
    name,
    completed: false
  }
  dispatch(createTodoRequest(todo))
  request
    .post('/api/todos', todo)
    .then((response) => {
      dispatch(createTodoSuccess(response.data))
    })
    .catch((response) => {
      dispatch(createTodoFailure(response.data))
    })
}


const listTodosRequest = () => ({
  type: 'TODO_LIST_REQUEST'
})
const listTodosSuccess = (todos) => ({
  type: 'TODO_LIST_SUCCESS',
  payload: todos
})
const listTodosFailure = (err) => ({
  type: 'TODO_LIST_FAILURE',
  payload: err,
  error: true
})

export const listTodos = () => (dispatch) => {
  dispatch(listTodosRequest())
  request
    .get('/api/todos')
    .then((response) => {
      dispatch(listTodosSuccess(response.data))
    })
    .catch((response) => {
      dispatch(listTodosFailure(response.data))
    })
}


const updateTodoRequest = (id, partial) => ({
  type: 'TODO_UPDATE_REQUEST',
  payload: { id, partial }
})
const updateTodoSuccess = (todo) => ({
  type: 'TODO_UPDATE_SUCCESS',
  payload: todo
})
const updateTodoFailure = (err) => ({
  type: 'TODO_UPDATE_FAILURE',
  payload: err,
  error: true
})

export const updateTodo = (id, update) => (dispatch) => {
  dispatch(updateTodoRequest(id, update))
  request
    .put(`/api/todos/${id}`, update)
    .then((response) => {
      dispatch(updateTodoSuccess(response.data))
    })
    .catch((response) => {
      dispatch(updateTodoFailure(response.data))
    })
}


const deleteTodoRequest = (id) => ({
  type: 'TODO_DELETE_REQUEST',
  payload: id
})
const deleteTodoSuccess = (id) => ({
  type: 'TODO_DELETE_SUCCESS',
  payload: id
})
const deleteTodoFailure = (data) => ({
  type: 'TODO_DELETE_FAILURE',
  payload: data,
  error: true
})

export const deleteTodo = (id) => (dispatch) => {
  dispatch(deleteTodoRequest(id))
  request
    .delete(`/api/todos/${id}`)
    .then((response) => {
      dispatch(deleteTodoSuccess(id))
    })
    .catch((response) => {
      dispatch(deleteTodoFailure(response.data))
    })
}


export const clearCompletedTodos = (todos) => (dispatch) => {
  todos.forEach((todo) => {
    if (!todo.completed) return
    todoDelete(todo.id)(dispatch)
  })
}