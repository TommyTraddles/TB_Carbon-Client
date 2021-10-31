// auth
import { Login } from 'pages/Auth/Login'
import { Register } from 'pages/Auth/Register'
import { Forgot } from 'pages/Auth/Forgot-pass'
import { Reset } from 'pages/Auth/New-pass'
// app
import { Onboarding } from 'pages/Auth/Onboarding'
import { Home } from 'pages/Home'
import { Calculator } from 'pages/App/Calculator'
import { Results } from 'pages/App/[results]'
import { History } from 'pages/App/History'
import { Leaderboard } from 'pages/App/Leaderboard'
// user
import { Profile } from 'pages/User/Profile'
import { Preferences } from 'pages/User/Preferences'
import { Subscription } from 'pages/User/Subscription'

export const routes = [
  {
    component: Onboarding,
    path: '/welcome',
  },
  {
    component: Login,
    path: '/login',
  },
  {
    component: Forgot,
    path: '/forgot-pass',
  },
  {
    component: Reset,
    path: '/reset-pass',
  },
  {
    component: Register,
    path: '/register',
  },
  {
    component: Home,
    path: '/home',
  },
  {
    component: Calculator,
    path: '/new',
  },
  {
    component: History,
    path: '/history',
  },
  {
    component: Results,
    path: '/new/results',
  },
  {
    component: Leaderboard,
    path: '/leaderboard',
  },
  {
    component: Profile,
    path: '/me',
  },
  {
    component: Preferences,
    path: '/me/preferences',
  },
  {
    component: Subscription,
    path: '/pricing',
  },
]
