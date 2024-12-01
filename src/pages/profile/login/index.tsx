import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../../context/auth-context';
import TextInput from '../../../components/text-input';
import Button from '../../../components/button';

import { Wrapper, UserTitle, Form } from './styles'
import { toast } from 'react-toastify';

type LoginFormType = {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated, navigate])

  async function submit(data: LoginFormType) {
    const toastId = toast.loading("Carregando", {
      position: 'top-center'
    })
    try {
      setLoading(true)
      await login(data.email, data.password)
      toast.update(toastId, {
        render: 'Login realizado com sucesso',
        type: 'success',
        isLoading: false,
        closeOnClick: true,
        autoClose: 5000,
        draggable: true
      })

      navigate('/profile')
    } catch (error) {
      if (error instanceof Error) {
        toast.update(toastId, {
          render: error.message,
          type: 'error',
          isLoading: false,
          closeOnClick: true,
          autoClose: 5000,
          draggable: true
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Wrapper>
      <UserTitle>Preencha suas credenciais</UserTitle>
      <Form onSubmit={handleSubmit(submit)}>
        <TextInput disabled={loading} type='text' placeholder='E-mail' {...register('email', { required: true })} error={errors.email?.type} />
        <TextInput disabled={loading} type='password' placeholder='Senha' {...register('password', { required: true })} error={errors.password?.type} />
        <Button disabled={loading}>Entrar</Button>
      </Form>
    </Wrapper>
  )
}

export default Login
