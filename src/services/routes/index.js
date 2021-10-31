// auth
import { Login } from 'pages/Auth/Login'
import { Register } from 'pages/Auth/Register'
import { Forgot } from 'pages/Auth/Forgot-pass'
import { Reset } from 'pages/Auth/New-pass'
// app
import { Onboarding } from 'pages/Auth/Onboarding'
import { Home } from 'pages/App/Home'
import { Calculator } from 'pages/App/Calculator'
import { Results } from 'pages/App/[results]'
import { History } from 'pages/App/History'
import { Leaderboard } from 'pages/App/Leaderboard'
// user
import { Profile } from 'pages/User/Profile'
import { Preferences } from 'pages/User/Preferences'
import { Subscription } from 'pages/User/Subscription'

export const paths = {
  onboarding: '/auth/welcome',
  login: '/auth/login',
  forgot: '/auth/forgot-pass',
  reset: '/auth/reset-pass',
  register: '/auth/register',
  home: '/',
  calculator: '/new',
  history: '/history',
  results: '/new/results',
  leaderboard: '/leaderboard',
  profile: '/user',
  preferences: '/user/preferences',
  subscription: '/pricing',
}

export const routes = [
  {
    component: Onboarding,
    path: paths.onboarding,
    layout: 'public',
  },
  {
    component: Login,
    path: paths.login,
    layout: 'public',
  },
  {
    component: Forgot,
    path: paths.forgot,
    layout: 'public',
  },
  {
    component: Reset,
    path: paths.reset,
    layout: 'public',
  },
  {
    component: Register,
    path: paths.register,
    layout: 'public',
  },
  {
    component: Home,
    path: paths.home,
    layout: 'private',
  },
  {
    component: Calculator,
    path: paths.calculator,
    layout: 'private',
  },
  {
    component: History,
    path: paths.history,
    layout: 'private',
  },
  {
    component: Results,
    path: paths.results,
    layout: 'private',
  },
  {
    component: Leaderboard,
    path: paths.leaderboard,
    layout: 'private',
  },
  {
    component: Profile,
    path: paths.profile,
    layout: 'private',
  },
  {
    component: Preferences,
    path: paths.preferences,
    layout: 'private',
  },
  {
    component: Subscription,
    path: paths.subscription,
    layout: 'private',
  },
]
