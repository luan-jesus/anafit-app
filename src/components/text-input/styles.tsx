import styled from 'styled-components'

type InputProps = {
  error: boolean
}

export const Input = styled.input<InputProps>`
  background-color: #fff;
  border: none;
  padding: 15px 25px;
  width: 250px;
  border-radius: 50px;
  box-shadow: #cecece 0px 4px 5px 0px;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  border: ${(props) => (props.error ? '1px solid #ff4c4c' : '1px solid #fff')};

  &:focus {
    outline: none;
    box-shadow: #a5a5a5 0px 4px 5px 0px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`

export const Span = styled.span<InputProps>`
  margin-top: 2px;
  font-size: 12px;
  text-align: center;
  color: #ff4c4c;

  opacity: ${(props) => (props.error ? 1 : 0)};
  transition: none;
`
