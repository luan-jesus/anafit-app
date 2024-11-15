import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
`;

export const Header = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 50px;
  box-shadow: #e7e7e7 0px 5px 9px 0px;;
  display: flex;
  align-items: center;
`;

export const PageTitle = styled.h3`
  flex: 1;
  margin: 0 10px;
`

export const UserButton = styled.button`
  font-size: 24px;
  border-radius: 50%;
  padding: 0;
  width: 40px;
  height: 40px;
  margin-right: 10px;

  padding-top: 3px;
  border: none;
  background-color: #fff;

  &:hover {
    background-color: antiquewhite;
  }
`

export const PageContent = styled.div`
  flex: 1;
  padding: 10px;
`

export const Navbar = styled.nav`
  background-color: grey;
  width: 100%;
  height: 70px;
  box-shadow: #e7e7e7 0px -5px 9px 0px;;

  display: flex;

`

export const NavItem = styled.div`
  background-color: beige;
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background-color: antiquewhite;
  }
`
export const NavItemLabel = styled.span`
  font-size: 14px;
`

export const NavItemIcon = styled.div`
  font-size: 22px;
`

