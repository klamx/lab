const getTodos = async () => {
  const url = 'http://localhost:3001/api/todos'
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}

export default getTodos
