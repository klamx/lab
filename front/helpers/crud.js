import axios from 'axios'

const url = 'http://localhost:3001/api'

export const update = async (body) => {
  const { id } = body
  const response = await axios.put(`${url}/todo/${id}`, body)
  return response.data
}

export const creat = async body => {
  const response = await axios.post(`${url}/todo/`, body)
  return response.data
}
