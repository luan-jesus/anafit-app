import React, { createContext, useContext, useState, useEffect } from 'react'
import { noAuthApi } from '../config/axios'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

type User = {
  fullName: string
  email: string
  token: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  type AuthResponseType = {
    fullName: string
    email: string
    token: string
    expiresIn: number
  }

  const login = async (email: string, password: string) => {
    const response = await noAuthApi.post<AuthResponseType>('/v1/auth/login', {
      email: email,
      password: password,
    })

    const authData = response.data

    const loggedUser: User = {
      fullName: authData.fullName,
      email: authData.email,
      token: authData.token,
    }

    setUser(loggedUser)
    localStorage.setItem('user', JSON.stringify(loggedUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
