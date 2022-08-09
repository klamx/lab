import axios from 'axios'

const url = 'http://localhost:3001/api'

export const update = async (body) => {
  const { id } = body
  const response = await axios.put(`${url}/todo/${id}`, body)
  console.log(response.data.done)
  return response.data
}

export const create = async body => {
  const response = await axios.post(`${url}/todo/`, body)
  return response.data
}

export const del = async id => {
  const response = await axios.delete(`${url}/todo/${id}`)
  return response.data
}

export const getTodos = async () => {
  const response = await axios.get(`${url}/todos`)
  return response.data
}
