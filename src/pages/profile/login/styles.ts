import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const UserTitle = styled.h1`
  font-size: 24px;
  margin: 25px 0;
  text-align: center;
  color: #494f53;
`

export const Button = styled.button`
  background-color: #F88700;
  display: flex;
  align-items: center;
  gap: 3px;
  border: none;
  padding: 15px 50px;
  width: 250px;
  justify-content: center;
  border-radius: 50px;
  color: #fff;
  font-weight: 700;
  box-shadow: #cecece 0px 4px 5px 0px;

  &:hover {
    cursor: pointer;
    background-color: #FA9F56;
  }
`

export const H3 = styled.h3`
  margin: 10px 0;
  color: #494f53;
`

export const Input = styled.input`
  background-color: #fff;
  border: none;
  padding: 15px 25px;
  width: 250px;
  border-radius: 50px;
  margin-bottom: 15px;
  box-shadow: #cecece 0px 4px 5px 0px;
`
