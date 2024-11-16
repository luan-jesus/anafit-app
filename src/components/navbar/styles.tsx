import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 70px;
  box-shadow: #cecece 0px -5px 10px 0px;;
  display: flex;
`

export const NavItemLink = styled(Link)`
  background-color: #FA9F56;
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;

  color: #fff;
  font-weight: 500;

  &:hover {
    background-color: #F77800;
  }

  &:active {
    background-color: #F77800;
  }
`
export const NavItemLabel = styled.span`
  font-size: 14px;
`

export const NavItemIcon = styled.div`
  font-size: 22px;
`
