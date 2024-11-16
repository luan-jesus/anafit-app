import React from 'react'

import { FaUser } from 'react-icons/fa'

import { Container, BackgroundBall, ProfilePic, UserTitle, About, Button, H3 } from './styles'

const Profile: React.FC = () => {
  const loggedIn = true;

  return (
    <Container>
      <BackgroundBall />
      <ProfilePic>
        <FaUser color='#F88700' size={64} />
      </ProfilePic>

      {loggedIn ? (
        <>
          <UserTitle>Luan de Jesus Teixeira</UserTitle>
          <Button>Desconectar</Button>
        </>
      ) : (
        <>
          <UserTitle>Acesse sua conta</UserTitle>
          <Button>Entrar</Button>
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
