import React from 'react'

import { CiUser, CiCircleList, CiDumbbell, CiGrid41 } from "react-icons/ci";

import {
  Container,
  Header,
  PageContent,
  Navbar,
  NavItem,
  NavItemLabel,
  NavItemIcon,
  PageTitle,
  UserButton
} from './styles'

const App: React.FC = () => (
  <Container>
    <Header>
      <PageTitle>Inicio</PageTitle>
      <UserButton>
        <CiUser color="#000000" />
      </UserButton>
    </Header>
    <PageContent>Conteúdo</PageContent>
    <Navbar>
      <NavItem>
        <NavItemIcon>
          <CiGrid41 color="#000000" />
        </NavItemIcon>
        <NavItemLabel>Inicio</NavItemLabel>
      </NavItem>
      <NavItem>
        <NavItemIcon>
          <CiDumbbell color="#000000" />
        </NavItemIcon>
        <NavItemLabel>Treinos</NavItemLabel>
      </NavItem>
      <NavItem>
        <NavItemIcon>
          <CiCircleList color='#000000' />
        </NavItemIcon>
        <NavItemLabel>Exercícios</NavItemLabel>
      </NavItem>
    </Navbar>
  </Container>
)

export default App
