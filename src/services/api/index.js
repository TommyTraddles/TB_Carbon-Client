import axios from 'axios'
import { login, register, forgot } from 'services/api/auth'

const client = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
})

export const authAPI = {
  login: login(client),
  register: register(client),
  forgot: forgot(client),
}