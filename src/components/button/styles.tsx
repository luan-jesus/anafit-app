import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: #f88700;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
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
    box-shadow: ${(props) =>
      props.disabled ? '#cecece 0px 4px 5px 0px' : '#a5a5a5 0px 4px 5px 0px'};
  }

  &:active {
    cursor: pointer;
    box-shadow: #cecece 0px 4px 5px 0px;
  }

  &:focus {
    outline: none;
  }
`
