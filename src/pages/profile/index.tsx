import React from 'react'

import { FaUser } from 'react-icons/fa'
import { BiLogOutCircle } from "react-icons/bi";

import { Container, BackgroundBall, ProfilePic, UserTitle, About, Button } from './styles'

const Profile: React.FC = () => (
  <Container>
    <BackgroundBall />
    <ProfilePic>
      <FaUser color='#F88700' size={64} />
    </ProfilePic>

    <UserTitle>Luan de Jesus Teixeira</UserTitle>
    <Button>
      <BiLogOutCircle size={20} />
      Desconectar
    </Button>

    <About>
      Lorem Ipsum has been the standard dummy text ever since the 1500s.
    </About>
  </Container>
)

export default Profile
