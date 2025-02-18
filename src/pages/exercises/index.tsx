/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'

import { Wrapper, Item, Icon, Content, Action } from './styles'

const Exercises: React.FC = () => {
  const [exercises, setExercises] = useState([
    'Supino Reto',
    'Supino Reclinado',
    'Supino Declinado',
    'Crucifixo',
    'Triceps Testa',
    'Triceps Frances',
    'Biceps Rosca Direta',
    'Remada Curvada',
    'PullOver',
    'Agachamento livre',
    'Leg Press',
    'Stiff',
    'Levantamento Terra',
  ])

  if (exercises?.length === 0) {
    return (
      <Wrapper>
        <div>Nenhum dado encontrado</div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {exercises.map((value, index, _) => (
        <Item key={index}>
          <Content>{value}</Content>
          <Action>
            <FaEdit size={22} />
          </Action>
        </Item>
      ))}
    </Wrapper>
  )
}

export default Exercises
