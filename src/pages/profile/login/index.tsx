import React, { useEffect } from 'react'

import { Wrapper, UserTitle, Button, Input, Form } from './styles'
import { useAuth } from '../../../context/auth-context';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type LoginFormType = {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated, navigate])

  async function submit(data: LoginFormType) {
    try {
      await login(data.email, data.password)
      navigate('/profile')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }

  return (
    <Wrapper>
      <UserTitle>Preencha suas credenciais</UserTitle>
      <Form onSubmit={handleSubmit(submit)}>
        <Input type='text' placeholder='E-mail' {...register('email', { required: true })} error={!!errors.email} />
        <Input type='password' placeholder='Senha' {...register('password', { required: true })} error={!!errors.password} />
        <Button>Entrar</Button>
      </Form>
    </Wrapper>
  )
}

export default Login
