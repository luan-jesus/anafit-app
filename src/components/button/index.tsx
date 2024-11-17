import React from 'react'

import { StyledButton } from './styles'

type Props = {
  children: React.ReactNode
}

const Button = (props: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <StyledButton {...props}>
    {props.children}
  </StyledButton>
)

export default Button
