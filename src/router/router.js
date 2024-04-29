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