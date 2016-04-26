'use strict'

import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

todoSchema.method('toJSON', function() {
  const obj = this.toObject()
  obj.id = this._id
  delete obj._id
  delete obj.__v
  return obj
})

module.exports = mongoose.model('Todo', todoSchema)