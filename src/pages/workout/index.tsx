/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'

import { Wrapper, Item, Icon, Content, Action } from './styles'

const Workout: React.FC = () => {
  const [workouts, setWorkouts] = useState([
    'Peito',
    'Biceps',
    'Triceps',
    'Perna',
    'Ombro',
    'Cardio',
  ])

  if (workouts?.length === 0) {
    return (
      <Wrapper>
        <div>Nenhum dado encontrado</div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {workouts.map((value, index, _) => (
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

export default Workout
