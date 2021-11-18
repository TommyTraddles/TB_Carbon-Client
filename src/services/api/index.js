import axios from 'axios'
import { login, register, forgot, reset } from 'services/api/auth'
import { users, user, comparative } from 'services/api/ranking'
import { entry } from './calculator'

const client = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
})

// ❌ eliminar una vez se conecte con la BBDD
const dummy = axios.create({
  baseURL: 'https://fakestoreapi.com/users',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
})

export const authAPI = {
  login: login(client),
  register: register(client),
  forgot: forgot(client),
  reset: reset(client),
}

export const calculatorAPI = {
  entry: entry(client)
}

export const rankingAPI = {
  users: users(dummy),
  user: user(dummy),
  comparative: comparative(dummy),
}