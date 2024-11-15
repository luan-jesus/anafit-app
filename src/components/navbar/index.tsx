import React from 'react'

import { CiCircleList, CiDumbbell, CiGrid41 } from "react-icons/ci";

import { NavItem, NavItemIcon, NavItemLabel, Wrapper,  } from './styles'

const Navbar: React.FC = () => (
  <Wrapper>
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
  </Wrapper>
)

export default Navbar
