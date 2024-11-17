import React, { createContext, useContext, useState, useEffect } from 'react'

// Types for authentication state
interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

interface User {
  id: string
  username: string
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// AuthProvider component to provide auth state to the app
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check if user is already authenticated (e.g., from localStorage)
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // Login function to authenticate a user
  const login = async (username: string, password: string) => {
    // Replace this with your API call or logic
    const response = await fakeLogin(username, password)
    const loggedInUser = response
    setUser(loggedInUser)
    localStorage.setItem('user', JSON.stringify(loggedInUser)) // Store user in localStorage
  }

  // Logout function to clear user data
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user') // Clear user data from localStorage
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Fake login function (replace with your own authentication API)
const fakeLogin = async (username: string, password: string): Promise<User> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an API call
      if (username === 'user' && password === 'password') {
        resolve({
          id: '1',
          username: 'user',
        })
      } else {
        reject(new Error('Credenciais Inválidas'))
      }
    }, 2000)
  })
