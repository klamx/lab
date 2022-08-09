const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
// const { nanoid } = require('nanoid')
// import { nanoid } from 'nanoid'

const app = express()
app.use(express.json())
app.use(cors())

morgan.token('data', (request, _) => {
  return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status :response-time ms - :data'))

let todos = [
  {
    id: 1,
    todo: 'Est elit dolore officia nostrud ex reprehenderit.',
    done: false,
  },
]

app.get('/api/todos', (_, response) => {
  response.json(todos)
})

app.post('/api/todo', (request, response) => {
  const { todo, done = false } = request.body
  const id = todos.length + 1
  if (!todo) {
    return response.status(400).json({ error: 'Content missing' })
  }

  const newTodo = { id, todo, done }
  todos = [...todos, newTodo]
  response.json({ newTodo })
})

app.delete('/api/todo/:id', (request, response) => {
  const id = Number(request.params.id)
  todos = todos.filter((todo) => todo.id !== id)
  response.status(204).end()
})

app.put('/api/todo/:id', (request, response) => {
  const id = Number(request.params.id)
  const todo = todos.find((td) => td.id === id)
  console.log(request.body)
  if (todo) {
    todos = todos.map((todo) => (todo.id === id ? request.body : todo))
    response.json(todo)
  } else {
    response.status(400).json({ error: 'Error todo not found' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
