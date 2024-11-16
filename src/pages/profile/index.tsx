import React from 'react'

import { FaUser } from 'react-icons/fa'

import { BackgroundBall, ProfilePic, About } from './styles'
import Container from '../../components/container';
import { Outlet } from 'react-router-dom';

const Profile: React.FC = () => (
    <Container>
      <BackgroundBall />
      <ProfilePic>
        <FaUser color='#F88700' size={64} />
      </ProfilePic>

      <Outlet />

      <About>
        Lorem Ipsum has been the standard dummy text ever since the 1500s.
      </About>
    </Container>
  )

export default Profile
