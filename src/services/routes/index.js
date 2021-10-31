import { Onboarding } from "pages/Onboarding"
import { Login } from "pages/Login"
import { Register } from "pages/Register"
import { Forgot } from "pages/forgot-pass"
import { Home } from "pages/Home"
import { Calculator } from "pages/Calculator" 
import { Results } from "pages/[results]"
import { History } from "pages/History"
import { Leaderboard } from "pages/Leaderboard"
import { Profile } from "pages/Profile"
import { Subscription } from "pages/Subscription"

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
    component: Subscription,
    path: '/pricing',
  },
]
