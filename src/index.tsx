import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './index.css'

import App from './pages/app'
import Error from './pages/error'
import Profile from './pages/profile'
import { AuthProvider } from './context/auth-context'
import Welcome from './pages/profile/welcome'
import Login from './pages/profile/login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <div>Dashboard</div>
      },
      {
        path: "workouts",
        element: <div>Workout</div>
      },
      {
        path: "exercises",
        element: <div>Exercise</div>
      },
    ]
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "/profile",
        element: <Welcome />
      },
      {
        path: "/profile/login",
        element: <Login />
      },
      {
        path: "/profile/register",
        element: <div>Register</div>
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
