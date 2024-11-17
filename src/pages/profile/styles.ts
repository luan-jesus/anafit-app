import styled from "styled-components"

export const BackgroundBall = styled.div`
  width: 500px;
  height: 400px;
  border-radius: 50%;
  top: -225px;
  position: absolute;
  background-color: #F77800;
`

export const ReturnHomeButton = styled.button`
  padding: 15px 30px;
  justify-content: center;
  border-radius: 50px;
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  gap: 10px;
  display: flex;
  background-color: #fff;
  box-shadow: rgba(0,0,0,0.15) 2px 2px 5px 0px;
  color: #F77800;

  border: none;

  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;
    box-shadow: rgba(0,0,0,0.3) 2px 2px 5px 0px;
  }

  &:active {
    background-color: #fff;
    box-shadow: rgba(0,0,0,0.15) 2px 2px 5px 0px;
  }
`

export const ProfilePic = styled.div`
  top: 100vw;
  background-color: #fff;
  width: 120px;
  height: 120px;
  margin-top: 115px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`

export const About = styled.p`
  display: flex;
  margin: 10px 10px 20px;
  flex: 1;
  flex-direction: column; 
  justify-content: flex-end;
  color: #494f53;
  text-align: center;
  max-width: 300px;
`
