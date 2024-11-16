import React from 'react'

import { CiCircleList, CiDumbbell, CiGrid41 } from "react-icons/ci";

import { NavItemLink, NavItemIcon, NavItemLabel, Wrapper,  } from './styles'

const Navbar: React.FC = () => (
  <Wrapper>
    <NavItemLink to={'/'}>
      <NavItemIcon>
        <CiGrid41 />
      </NavItemIcon>
      <NavItemLabel>Inicio</NavItemLabel>
    </NavItemLink>
    <NavItemLink to={'workouts'}>
      <NavItemIcon>
        <CiDumbbell />
      </NavItemIcon>
      <NavItemLabel>Treinos</NavItemLabel>
    </NavItemLink>
    <NavItemLink to={'exercises'}>
      <NavItemIcon>
        <CiCircleList />
      </NavItemIcon>
      <NavItemLabel>Exercícios</NavItemLabel>
    </NavItemLink>
  </Wrapper>
)

export default Navbar
