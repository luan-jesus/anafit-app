import styled from 'styled-components'


export const StyledButton = styled.button`
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
    box-shadow: #a5a5a5 0px 4px 5px 0px;
  }

  &:active {
    cursor: pointer;
    box-shadow: #cecece 0px 4px 5px 0px;
  }
`;
