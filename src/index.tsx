import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'
import './index.css'

import App from './pages/app'
import Error from './pages/error'
import Profile from './pages/profile'
import { AuthProvider } from './context/auth-context'
import Welcome from './pages/profile/welcome'
import Login from './pages/profile/login'
import Register from './pages/profile/register'
import Calendar from './pages/calendar'
import { ToastProvider } from './context/toast-context'
import Workout from './pages/workout'
import Exercises from './pages/exercises'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Calendar />,
      },
      {
        path: 'workouts',
        element: <Workout />,
      },
      {
        path: 'exercises',
        element: <Exercises />,
      },
    ],
  },
  {
    path: '/profile',
    element: <Profile />,
    children: [
      {
        path: '/profile',
        element: <Welcome />,
      },
      {
        path: '/profile/login',
        element: <Login />,
      },
      {
        path: '/profile/register',
        element: <Register />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <AuthProvider>
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  </AuthProvider>
)
