import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { useAuth } from '../../../context/auth-context'
import TextInput from '../../../components/text-input'
import Button from '../../../components/button'

import { Wrapper, UserTitle, Form } from './styles'
import { useToast } from '../../../context/toast-context'

type LoginFormType = {
  email: string
  password: string
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuth()
  const { toastLoading, toastUpdate } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  async function submit(data: LoginFormType) {
    const toastId = toastLoading()
    try {
      setLoading(true)
      await login(data.email, data.password)
      toastUpdate(toastId, 'success', 'Login realizado com sucesso')

      navigate('/profile')
    } catch (error) {
      if (error instanceof Error) {
        toastUpdate(toastId, 'error', error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Wrapper>
      <UserTitle>Preencha suas credenciais</UserTitle>
      <Form onSubmit={handleSubmit(submit)}>
        <TextInput
          disabled={loading}
          type="text"
          placeholder="E-mail"
          {...register('email', { required: true })}
          error={errors.email?.type}
        />
        <TextInput
          disabled={loading}
          type="password"
          placeholder="Senha"
          {...register('password', { required: true })}
          error={errors.password?.type}
        />
        <Button disabled={loading}>Entrar</Button>
      </Form>
    </Wrapper>
  )
}

export default Login
