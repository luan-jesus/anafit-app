import React from 'react'
import { FaUser } from 'react-icons/fa'

import Logo from '../../assets/logo-com-nome.png'

import { Wrapper, PageTitle, UserButton, LogoImg } from './styles'

const Header: React.FC = () => (
  <Wrapper>
    <LogoImg src={Logo} />
    <PageTitle>Inicio</PageTitle>
    <UserButton to={'profile'}>
      <FaUser color="#fff" />
    </UserButton>
  </Wrapper>
)

export default Header
