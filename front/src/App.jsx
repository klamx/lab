import React, { useState, useEffect } from 'react'
// import getTodos from '../helpers/getTodos'
import { create, del, getTodos, update } from '../helpers/crud'
import Todos from './components/Todos'
import Form from './components/Form'

function App () {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    getTodos().then((data) => setTodos(data))
  }, [])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleChangeState = async (iden) => {
    const todo = todos.find(({ id }) => id === iden)
    const res = await update({ ...todo, done: !todo.done })
    setTodos(todos.map((e) => (e.id === iden ? res : e)))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const todo = await create({ todo: input })
    setTodos([...todos, todo])
    setInput('')
  }

  const handleDelete = async (id) => {
    const deleted = await del(id)
    console.log(deleted)
    setTodos(todos.filter((todo) => todo.id !== deleted.id))
  }

  return (
    <div className='container'>
      <Form
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className='todosContainer'>
        {todos.length > 0
          ? (
            <Todos
              todos={todos}
              handleChangeState={handleChangeState}
              handleDelete={handleDelete}
            />
            )
          : (
            <p>No hay tareas</p>
            )}
      </div>
    </div>
  )
}

export default App
