/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'

import { Wrapper, Input, Span } from './styles'


type HashMap<T> = {
  [key: string]: T;
};

function getErrorMessage(error: string): string {
  const messageMap: HashMap<string> = {
    'pattern': 'pattern',
    'onBlur': 'onBlur',
    'onChange': 'onChange',
    'disabled': 'disabled',
    'value': 'value',
    'max': 'max',
    'maxLength': 'maxLength',
    'min': 'min',
    'minLength': 'minLength',
    'required': 'Campo obrigatório',
    'validate': 'validate',
    'setValueAs': 'setValueAs',
    'shouldUnregister': 'shouldUnregister',
    'deps': 'deps',
    'valueAsNumber': 'valueAsNumber',
    'valueAsDate': 'valueAsDatem'
  }

  return messageMap[error] ?? 'Erro de validação'
}

type Props = {
  error: string | undefined
}

const TextInput: React.FC<Props & React.InputHTMLAttributes<HTMLInputElement>> = React.forwardRef<HTMLInputElement, Props & React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
    <Wrapper>
      <Input {...props} error={!!props.error} ref={ref} />
      <Span error={!!props.error} >{props.error ? getErrorMessage(props.error) : 'blank'}</Span>
    </Wrapper>
  ));

export default TextInput
