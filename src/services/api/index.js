import axios from 'axios'
import { login, register } from 'services/api/auth'

console.info('> env', process.env.REACT_APP_BACK_URL)

const client = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
})

export const authAPI = {
  login: login(client),
  register: register(client),
}