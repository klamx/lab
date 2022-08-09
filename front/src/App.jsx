import React, { useState, useEffect } from 'react'
import getTodos from '../helpers/getTodos'
import { update } from '../helpers/crud'

function App () {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    getTodos().then((data) => setTodos(data))
  }, [])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleChangeState = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    const newDone = !todo.done
    todo.done = newDone
    console.log(todo)
    update(todo).then((res) => {
      const newTodos = todos.map((todo) => (todo.id !== id ? todo : res))
      // console.log(res, newTodos)
      setTodos(newTodos)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Crea una tarea'
          value={input}
          onChange={handleChange}
        />
      </form>

      {todos.length > 0
        ? (
          <ul>
            {todos.map(({ id, todo, done }) => (
              <li key={id}>
                {todo}{' '}
                <button onClick={() => handleChangeState(id)}>
                  {done ? 'cerrar' : 'abrir'}
                </button>
              </li>
            ))}
          </ul>
          )
        : (
          <p>No hay tareas</p>
          )}
    </>
  )
}

export default App
