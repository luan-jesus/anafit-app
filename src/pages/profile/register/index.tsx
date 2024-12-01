import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../../context/auth-context';
import Button from '../../../components/button';
import TextInput from '../../../components/text-input';

import { Wrapper, UserTitle, Form } from './styles'
import { toast } from 'react-toastify';
import { noAuthApi } from '../../../config/axios';

type RegisterFormType = {
  fullName: string;
  email: string;
  password: string
}

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated, navigate])

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>()

  async function submit(data: RegisterFormType) {
    const toastId = toast.loading("Carregando", {
      position: 'top-center'
    })
    try {
      setLoading(true)

      await noAuthApi.post('/v1/auth/register', {
        email: data.email,
        fullName: data.fullName,
        password: data.password
      })

      toast.update(toastId, {
        render: 'Usuário criado com sucesso',
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
      <UserTitle>Preencha seus dados</UserTitle>
      <Form onSubmit={handleSubmit(submit)}>
        <TextInput disabled={loading} type='text' placeholder='Nome completo' {...register('fullName', { required: true })} error={errors.fullName?.type} />
        <TextInput disabled={loading} type='text' placeholder='E-mail' {...register('email', { required: true })} error={errors.email?.type} />
        <TextInput disabled={loading} type='password' placeholder='Senha' {...register('password', { required: true })} error={errors.password?.type} />
        <Button disabled={loading}>Registrar</Button>
      </Form>
    </Wrapper>
  )
}

export default Register
