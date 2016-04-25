'use strict'

// These are the valid keys for creating a new todo
const VALID_KEYS = new Set([ 'name', 'completed' ])
// This will be where the todos are stored
const todos = []
// This will be our quick todo lookup
const idIndex = {}
// This is the id that gets incremented every time we create a new todo
let autoId = 1

class Todo {

  // creates a new todo
  constructor(newTodo) {
    // Reduces the passed in todo object to just the valid properties so that we
    // don't override any prototype methods.
    newTodo = Object.keys(newTodo).reduce((todo, key) => {
      if (VALID_KEYS.has(key)) todo[key] = newTodo[key]
      return todo
    }, {})

    Object.assign(this, {
      completed: false,
      name: '',
    }, newTodo)
  }

  // Saves the newly created todo in the "database"
  save(callback) {
    Todo.validate(this, (err, data) => {
      if (err) return callback(err)

      // ids should always be strings because we're not doing math on it.
      const id = String(autoId++)

      // set the id
      data.id = id
      // "save" the data into the index and the array. They are just pointing
      // to the memory used so if you change the todo in one place, it will
      // change it in both.
      idIndex[id] = data
      todos.push(data)

      callback(null, data)
    })
  }

  // Finds all of the todos
  static find(callback) {
    callback(null, todos)
  }

  // Finds a single todo by id
  static findOne(id, callback) {
    callback(null, idIndex[id])
  }

  // Creates a new todo and saves it to the database
  static create(newTodo, callback) {
    let todo = new Todo(newTodo)
    todo.save(callback)
  }

  // Updates a todo by id
  static update(id, updateTodo, callback) {
    Todo.findOne(id, (err, todo) => {
      if (err) return callback(err)
      if (!todo) return callback(new Error('todo not found with given id'))

      // This allows us to do partial updates, so you can send just the
      // "completed" field without sending the "name"
      let updatedTodo = Object.assign({}, todo, updateTodo)

      // Validate that the newly updated todo has valid data
      Todo.validate(updatedTodo, (err, data) => {
        if (err) return callback(err)

        // Update the todo
        Object.assign(idIndex[id], {
          name: updatedTodo.name,
          completed: updatedTodo.completed,
        })

        callback(null, idIndex[id])
      })
    })
  }

  // Deletes a todo by id
  static delete(id, callback) {
    Todo.findOne(id, (err, todo) => {
      if (err) return callback(err)
      if (!todo) return callback(new Error('todo not found with given id'))

      // Find the index of the todo in the list
      const foundIndex = todos.findIndex((todo) => todo.id === id)

      // If for some reason we can't find it, return an error
      if (foundIndex === -1) {
        return callback(new Error('error finding id in list of todos'))
      }

      // Remove the document from all locations
      delete idIndex[id]
      todos.splice(foundIndex, 1)

      callback(null, id)
    })
  }

  // Validates todo data to make sure
  static validate(data, callback) {
    // Check that the name is a string
    if (typeof data.name !== 'string') {
      return callback(new Error('todo name must be a string'))
    }
    // Check that completed is a boolean
    if (typeof data.completed !== 'boolean') {
      return callback(new Error('todo completed must be a boolean'))
    }

    callback(null, {
      name: data.name,
      completed: data.completed,
    })
  }

}

module.exports = Todo