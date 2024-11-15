import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  background-color: #eef1f3;
`;

export const Header = styled.div`
  background-color: #FFF;
  width: 100%;
  height: 70px;
  box-shadow: #e4e4e4 0px 3px 7px 0px;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 60px;
  padding-left: 10px;
`

export const PageTitle = styled.h3`
  flex: 1;
  margin: 0 10px;
  color: #F77800;
  text-align: center;
`

export const UserButton = styled.button`
  font-size: 24px;
  border-radius: 50%;
  padding: 0;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  margin-left: 20px;

  color: #fff;
  border: 1px solid #F77800;

  padding-top: 3px;
  background-color: #fff;

  &:hover {
    background-color: #e9e9e9;
  }
`

export const PageContent = styled.div`
  flex: 1;
  padding: 10px;
`

export const Navbar = styled.nav`
  width: 100%;
  height: 70px;
  box-shadow: #cecece 0px -5px 10px 0px;;

  display: flex;
`

export const NavItem = styled.div`
  background-color: #FA9F56;
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

