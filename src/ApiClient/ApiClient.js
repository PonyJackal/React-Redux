import axios from 'axios'

const makeAPI = () => {
  const API = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })

  return API
}

export default makeAPI
