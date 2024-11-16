import React, { useEffect, useState } from 'react'

import { Wrapper, UserTitle, Button, Input } from './styles'
import { useAuth } from '../../../context/auth-context';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate(); // Get the navigate function
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile")
    }
  }, [isAuthenticated, navigate])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function doLogin() {
    try {
      await login(email, password)
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
      <Input type='text' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
      <Input type='password' placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)} />
      <Button onClick={doLogin} >Entrar</Button>
    </Wrapper>
  )
}

export default Login
