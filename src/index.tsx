import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import 'react-toastify/dist/ReactToastify.css';
import './index.css'

import App from './pages/app'
import Error from './pages/error'
import Profile from './pages/profile'
import { AuthProvider } from './context/auth-context'
import Welcome from './pages/profile/welcome'
import Login from './pages/profile/login'
import Register from './pages/profile/register'
import { ToastContainer } from 'react-toastify'
import Calendar from './pages/Calendar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Calendar />
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
        element: <Register />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <AuthProvider>
    <ToastContainer />
    <RouterProvider router={router} />
  </AuthProvider>
)
