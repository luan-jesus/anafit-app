import styled from 'styled-components'

export const Wrapper = styled.div`
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
