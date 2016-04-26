'use strict'

import express from 'express'
import todos from './todos'

const { Router } = express
const api = new Router()

api.use('/todos', todos)

export default api