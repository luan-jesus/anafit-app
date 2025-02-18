import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 70px;
  box-shadow: #e4e4e4 0px 3px 7px 0px;
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  height: 60px;
  padding-left: 10px;
`

export const PageTitle = styled.h3`
  flex: 1;
  margin: 0 10px;
  color: #f77800;
  text-align: center;
`

export const UserButton = styled(Link)`
  font-size: 20px;
  border-radius: 50%;
  padding: 10px 13px 10px 13px;
  margin-right: 10px;
  margin-left: 20px;

  color: #fff;
  border: none;

  background-color: #f77800;

  &:hover {
    background-color: #e9e9e9;
  }
`
