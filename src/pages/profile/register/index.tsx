import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../../context/auth-context';
import Button from '../../../components/button';
import TextInput from '../../../components/text-input';

import { Wrapper, UserTitle, Form } from './styles'

type RegisterFormType = {
  fullName: string;
  email: string;
  password: string
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated, navigate])

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>()

  async function submit(data: RegisterFormType) {
    try {
      console.log(data);
      navigate('/profile')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }

  return (
    <Wrapper>
      <UserTitle>Preencha seus dados</UserTitle>
      <Form onSubmit={handleSubmit(submit)}>
        <TextInput type='text' placeholder='Nome completo' {...register('fullName', { required: true })} error={errors.fullName?.type} />
        <TextInput type='text' placeholder='E-mail' {...register('email', { required: true })} error={errors.email?.type} />
        <TextInput type='password' placeholder='Senha' {...register('password', { required: true })} error={errors.password?.type} />
        <Button>Registrar</Button>
      </Form>
    </Wrapper>
  )
}

export default Register
