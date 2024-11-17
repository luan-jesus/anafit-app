import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../../context/auth-context';
import TextInput from '../../../components/text-input';
import Button from '../../../components/button';

import { Wrapper, UserTitle, Form } from './styles'

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
      console.log(data)
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
        <TextInput type='text' placeholder='E-mail' {...register('email', { required: true })} error={errors.email?.type} />
        <TextInput type='password' placeholder='Senha' {...register('password', { required: true })} error={errors.password?.type} />
        <Button>Entrar</Button>
      </Form>
    </Wrapper>
  )
}

export default Login
