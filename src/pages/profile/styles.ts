import styled from "styled-components"

export const BackgroundBall = styled.div`
  width: 500px;
  height: 400px;
  border-radius: 50%;
  top: -225px;
  position: absolute;
  background-color: #F77800;
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
