import axios from 'axios'
import { login, register } from 'services/api/auth'

const client = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
})

export const authAPI = {
  login: login(client),
  register: register(client),
}