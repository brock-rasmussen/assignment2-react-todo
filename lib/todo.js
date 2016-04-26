'use strict'

const VALID_KEYS = new Set([ 'name', 'completed' ])
const todos = []
const idIndex = {}
let autoId = 1

class Todo {

  constructor(newTodo) {
    newTodo = Object.keys(newTodo).reduce((todo, key) => {
      if (VALID_KEYS.has(key)) todo[key] = newTodo[key]
      return todo
    }, {})

    Object.assign(this, {
      completed: false,
      name: '',
    }, newTodo)
  }

  save(callback) {
    Todo.validate(this, (err, data) => {
      if (err) return callback(err)

      const id = String(autoId++)

      data.id = id
      idIndex[id] = data
      todos.push(data)

      callback(null, data)
    })
  }

  static find(callback) {
    callback(null, todos)
  }

  static findOne(id, callback) {
    callback(null, idIndex[id])
  }

  static create(newTodo, callback) {
    let todo = new Todo(newTodo)
    todo.save(callback)
  }

  static update(id, updateTodo, callback) {
    Todo.findOne(id, (err, todo) => {
      if (err) return callback(err)
      if (!todo) return callback(new Error('todo not found with given id'))

      let updatedTodo = Object.assign({}, todo, updateTodo)

      Todo.validate(updatedTodo, (err, data) => {
        if (err) return callback(err)

        Object.assign(idIndex[id], {
          name: updatedTodo.name,
          completed: updatedTodo.completed,
        })

        callback(null, idIndex[id])
      })
    })
  }

  static delete(id, callback) {
    Todo.findOne(id, (err, todo) => {
      if (err) return callback(err)
      if (!todo) return callback(new Error('todo not found with given id'))

      const foundIndex = todos.findIndex((todo) => todo.id === id)

      if (foundIndex === -1) {
        return callback(new Error('error finding id in list of todos'))
      }

      delete idIndex[id]
      todos.splice(foundIndex, 1)

      callback(null, id)
    })
  }

  static validate(data, callback) {
    if (typeof data.name !== 'string') {
      return callback(new Error('todo name must be a string'))
    }
    if (typeof data.completed !== 'boolean') {
      return callback(new Error('todo completed must be a boolean'))
    }

    callback(null, {
      name: data.name,
      completed: data.completed,
    })
  }

}

export default Todo