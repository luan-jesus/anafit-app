import React from 'react'

import { FaUser } from 'react-icons/fa'

import { BackgroundBall, ProfilePic, UserTitle, About, Button, H3 } from './styles'
import Container from '../../components/container';
import { useAuth } from '../../context/auth-context';

const Profile: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <Container>
      <BackgroundBall />
      <ProfilePic>
        <FaUser color='#F88700' size={64} />
      </ProfilePic>

      {isAuthenticated ? (
        <>
          <UserTitle>Luan de Jesus Teixeira</UserTitle>
          <Button onClick={logout}>Desconectar</Button>
        </>
      ) : (
        <>
          <UserTitle>Acesse sua conta</UserTitle>
          <Button onClick={() => login('user', 'password')} >Entrar</Button>
          <H3>ou</H3>
          <Button>Registrar-se</Button>
        </>
      )}

      <About>
        Lorem Ipsum has been the standard dummy text ever since the 1500s.
      </About>
    </Container>
  )
}

export default Profile
