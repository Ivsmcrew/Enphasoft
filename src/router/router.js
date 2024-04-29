import Homepage from '../pages/Homepage/Homepage'
import Login from '../pages/Login/Login'
import Users from '../pages/Users/Users'
import User from '../pages/User/User'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

export const privateRoutes = [
  {path: null, element: Homepage, index: true},
  {path: 'login', element: Login, index: false},
  {path: 'users/*', element: Users, index: false},
  {path: 'users/user/:id', element: User, index: false},
  {path: '*', element: ErrorPage, index: false},
]

export const publicRoutes = [
  {path: null, element: Homepage, index: true},
  {path: '*', element: Login, index: false},
]