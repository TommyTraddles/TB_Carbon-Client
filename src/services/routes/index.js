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
import { Logros } from 'pages/App/Logros'
import { Ranking } from 'pages/App/Ranking'
// user
import { Perfil } from 'pages/User/Perfil'
import { Preferences } from 'pages/User/Preferences'
import { Iniciativas } from 'pages/User/Iniciativas'
import { Subscription } from 'pages/User/Subscription'
// icons
import {
  AiOutlineCalculator,
  AiOutlineHistory,
  AiOutlineTrophy,
  AiOutlineUser,
} from 'react-icons/ai'
import { BiHomeSmile } from 'react-icons/bi'
// import { RiStarSmileLine } from 'react-icons/ri'

export const paths = {
  onboarding: '/auth/onboarding',
  login: '/auth/login',
  forgot: '/auth/forgot-pass',
  reset: '/auth/reset-pass',
  register: '/auth/register',
  home: '/',
  calculator: '/new',
  logros: '/logros',
  results: '/new/results',
  ranking: '/ranking',
  perfil: '/perfil',
  preferences: '/perfil/preferences',
  iniciativas: '/iniciativa',
  planes: '/iniciativa/planes',
}

export const navlinks = [
  {
    path: paths.home,
    icon: <BiHomeSmile />,
    name: 'home',
  },
  {
    path: paths.logros,
    icon: <AiOutlineHistory />,
    name: 'mis logros',
  },
  {
    path: paths.calculator,
    icon: <AiOutlineCalculator />,
    name: 'calcule',
  },
  {
    path: paths.ranking,
    icon: <AiOutlineTrophy />,
    name: 'ranking',
  },
  // {
  //   path: paths.subscription,
  //   icon: <RiStarSmileLine />,
  //   name: 'iniciativas',
  // },
  {
    path: paths.perfil,
    icon: <AiOutlineUser />,
    name: 'perfil',
  },
]

export const routes = [
  {
    component: Onboarding,
    path: paths.onboarding,
    layout: 'public',
  },
  {
    component: Register,
    path: paths.register,
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
    component: Calculator,
    path: paths.calculator,
    layout: 'private',
  },
  {
    component: Home,
    path: paths.home,
    layout: 'private',
  },
  {
    component: Logros,
    path: paths.logros,
    layout: 'private',
  },
  {
    component: Results,
    path: paths.results,
    layout: 'private',
  },
  {
    component: Ranking,
    path: paths.ranking,
    layout: 'private',
  },
  {
    component: Perfil,
    path: paths.perfil,
    layout: 'private',
  },
  {
    component: Preferences,
    path: paths.preferences,
    layout: 'private',
  },
  {
    component: Iniciativas,
    path: paths.iniciativas,
    layout: 'private',
  },
  {
    component: Subscription,
    path: paths.planes,
    layout: 'private',
  },
]