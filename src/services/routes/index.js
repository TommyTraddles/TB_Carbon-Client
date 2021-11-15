// sandbox
import { Sandbox } from 'pages/_SANDBOX-PAGE'
// auth
import { Index } from 'pages/Auth/Index'
import { Reset } from 'pages/Auth/New-pass'
import { Forgot } from 'pages/Auth/Forgot-pass'
import { Calculator } from 'pages/Auth/Calculator'
// app
import { Onboarding } from 'pages/Auth/Onboarding'
import { Home } from 'pages/App/Home'
import { Daily } from 'pages/App/Daily'
import { Logros } from 'pages/App/Logros'
import { Acciones } from 'pages/App/Acciones'
import { Ranking } from 'pages/App/Ranking'
// user
import { Perfil } from 'pages/User/Perfil'
import { Iniciativas } from 'pages/User/Iniciativas'
// icons
import {
  AiOutlineHistory,
  AiOutlineTrophy,
  AiOutlineUser,
  AiOutlineDashboard,
} from 'react-icons/ai'
import { RiStarSmileLine } from 'react-icons/ri'

export const SSOpaths = {
  google: `${process.env.REACT_APP_BACK_URL}/auth/google`,
  facebook: `${process.env.REACT_APP_BACK_URL}/auth/google`,
  apple: `${process.env.REACT_APP_BACK_URL}/auth/google`,
}

export const paths = {
  index: '/auth',
  onboarding: '/auth/onboarding',
  calculator: '/auth/calculator',
  forgot: '/auth/forgot-pass',
  reset: '/auth/password/request',
  home: '/',
  daily: '/daily',
  acciones: '/acciones',
  logros: '/logros',
  ranking: '/ranking',
  iniciativas: '/iniciativa',
  perfil: '/perfil',
  sandbox: '/sandbox',
}

export const navlinks = [
  {
    path: paths.home,
    icon: <AiOutlineDashboard />,
    name: 'dashboard',
  },
  {
    path: paths.logros,
    icon: <AiOutlineHistory />,
    name: 'logros',
  },
  {
    path: paths.ranking,
    icon: <AiOutlineTrophy />,
    name: 'ranking',
  },
  {
    path: paths.iniciativas,
    icon: <RiStarSmileLine />,
    name: 'iniciativas',
  },
  {
    path: paths.perfil,
    icon: <AiOutlineUser />,
    name: 'perfil',
  },
]

export const routes = [
  {
    component: Index,
    path: paths.index,
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
    component: Onboarding,
    path: paths.onboarding,
    layout: 'public',
  },
  {
    component: Calculator,
    path: paths.calculator,
    layout: 'public',
  },
  {
    component: Home,
    path: paths.home,
    layout: 'private',
  },
  {
    component: Daily,
    path: paths.daily,
    layout: 'private',
  },
  {
    component: Acciones,
    path: paths.acciones,
    layout: 'private',
  },
  {
    component: Logros,
    path: paths.logros,
    layout: 'private',
  },
  {
    component: Ranking,
    path: paths.ranking,
    layout: 'private',
  },
  {
    component: Iniciativas,
    path: paths.iniciativas,
    layout: 'private',
  },
  {
    component: Perfil,
    path: paths.perfil,
    layout: 'private',
  },
  {
    component: Sandbox,
    path: paths.sandbox,
    layout: 'private',
  },
]