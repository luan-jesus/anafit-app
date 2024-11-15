import React from 'react'

import { CiUser, CiCircleList, CiDumbbell, CiGrid41 } from "react-icons/ci";

import Logo from "../../assets/logo-com-nome.png";

import {
  Container,
  Header,
  PageContent,
  Navbar,
  NavItem,
  NavItemLabel,
  NavItemIcon,
  PageTitle,
  UserButton,
  LogoImg
} from './styles'

const App: React.FC = () => (
  <Container>
    <Header>
      <LogoImg src={Logo} />
      <PageTitle>Inicio</PageTitle>
      <UserButton>
        <CiUser color='#F77800' />
      </UserButton>
    </Header>
    <PageContent>Conteúdo</PageContent>
    <Navbar>
      <NavItem>
        <NavItemIcon>
          <CiGrid41 />
        </NavItemIcon>
        <NavItemLabel>Inicio</NavItemLabel>
      </NavItem>
      <NavItem>
        <NavItemIcon>
          <CiDumbbell />
        </NavItemIcon>
        <NavItemLabel>Treinos</NavItemLabel>
      </NavItem>
      <NavItem>
        <NavItemIcon>
          <CiCircleList />
        </NavItemIcon>
        <NavItemLabel>Exercícios</NavItemLabel>
      </NavItem>
    </Navbar>
  </Container>
)

export default App
