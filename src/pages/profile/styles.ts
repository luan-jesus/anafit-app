import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  background-color: #eef1f3;
  position: relative;
  align-items: center;
`

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

export const UserTitle = styled.h1`
  font-size: 24px;
  margin: 25px 0;
  color: #494f53;
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

export const Button = styled.button`
  background-color: #F88700;
  display: flex;
  align-items: center;
  gap: 3px;
  border: none;
  padding: 15px 50px;
  border-radius: 50px;
  color: #fff;
  font-weight: 700;
  box-shadow: #cecece 0px 4px 5px 0px;

  &:hover {
    cursor: pointer;
    background-color: #FA9F56;
  }
`
