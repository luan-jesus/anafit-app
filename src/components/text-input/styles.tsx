import styled from 'styled-components'

type InputProps = {
  error: boolean;
}

export const Input = styled.input<InputProps>`
  background-color: #fff;
  border: none;
  padding: 15px 25px;
  width: 250px;
  border-radius: 50px;
  box-shadow: #cecece 0px 4px 5px 0px;

  border: ${props => props.error ? '1px solid #a30000' : '1px solid #fff'};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`

export const Span = styled.span<InputProps>`
  margin-top: 2px;
  font-size: 12px;
  text-align: center;
  color: #a30000;

  opacity: ${props => props.error ? 1 : 0};
  transition: none;
`
