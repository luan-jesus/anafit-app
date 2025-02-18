import React from 'react'

import { FaUser } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'

import { BackgroundBall, ProfilePic, About, ReturnHomeButton } from './styles'
import Container from '../../components/container'
import { Outlet, useNavigate } from 'react-router-dom'

const Profile: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <BackgroundBall />
      <ProfilePic>
        <FaUser color="#F88700" size={64} />
      </ProfilePic>

      <ReturnHomeButton onClick={() => navigate('/')}>
        <AiFillHome />
      </ReturnHomeButton>

      <Outlet />

      <About>
        Desenvolvido por <b>Luan Teixeira</b>
        <br />
        v1.0.0
      </About>
    </Container>
  )
}

export default Profile
