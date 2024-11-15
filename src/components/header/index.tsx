import React from 'react'

import { CiUser } from "react-icons/ci";

import Logo from "../../assets/logo-com-nome.png";

import {
  Wrapper,
  PageTitle,
  UserButton,
  LogoImg
} from './styles'

const Header: React.FC = () => (
  <Wrapper>
    <LogoImg src={Logo} />
    <PageTitle>Inicio</PageTitle>
    <UserButton>
      <CiUser color='#F77800' />
    </UserButton>
  </Wrapper>
)

export default Header
