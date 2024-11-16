import React from 'react'

import { Wrapper, UserTitle, Button, H3 } from './styles'
import { useAuth } from '../../../context/auth-context';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  return (
    <Wrapper>
      {isAuthenticated ? (
        <>
          <UserTitle>Luan de Jesus Teixeira</UserTitle>
          <Button onClick={logout}>Desconectar</Button>
        </>
      ) : (
        <>
          <UserTitle>Acesse sua conta</UserTitle>
          <Button onClick={() => navigate('/profile/login')} >Entrar</Button>
          <H3>ou</H3>
          <Button onClick={() => navigate('/profile/register')}>Registrar-se</Button>
        </>
      )}
    </Wrapper>
  )
}

export default Welcome
