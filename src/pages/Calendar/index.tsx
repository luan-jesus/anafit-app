/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'

import { IoIosFitness } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { TbRun } from "react-icons/tb";
import { MdOutlineCheck } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

import {
  Wrapper,
  MonthLabel,
  StyledDate,
  DateLabel,
  DateContent,
  DateItem,
  DateLabelWeek,
  DateLabelDate,
  Label,
  ConfirmBox,
  DateItemLabel,
} from './styles'

type DateType = {
  date: Date;
  items: DateItem[]
}

type DateItem = {
  type: 'workout' | 'task' | 'cardio',
  name: string,
  status: 'PENDING' | 'NOT_DONE' | 'DONE'
}

const Calendar: React.FC = () => {
  const [dates, setDates] = useState<DateType[]>([])

  const createDates = useCallback(() => {
    const datesToReturn: DateType[] = []
    const currDate = new Date()
    const firstDate = new Date(currDate.getFullYear(), currDate.getMonth() - 1, 1)
    const lastDate = new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0)
    lastDate.setMonth(lastDate.getMonth() + 1)

    while (firstDate.getTime() <= lastDate.getTime()) {
      const dateItem: DateType = {
        date: new Date(firstDate),
        items: []
      }

      let status: 'PENDING' | 'NOT_DONE' | 'DONE' = getRandomStatus()

      if (dateItem.date.getTime() >= new Date().getTime()) {
        status = 'PENDING'
      }

      if (dateItem.date.getDate() % 2 == 0) {
        dateItem.items.push({
          type: 'task',
          name: 'Creatina',
          status: status
        })
      }

      if (dateItem.date.getDate() % 3 == 0) {
        dateItem.items.push({
          type: 'workout',
          name: 'Treino de peito',
          status: status
        })
      }

      if (dateItem.date.getDate() % 5 == 0) {
        dateItem.items.push({
          type: 'cardio',
          name: 'Bicicleta ergométrica',
          status: status
        })
      }

      datesToReturn.push(dateItem)

      firstDate.setDate(firstDate.getDate() + 1)
    }

    return datesToReturn
  }, [])

  useEffect(() => {
    setDates(createDates())
  }, [createDates])

  useEffect(() => {
    const element = document.getElementById('today-date-item');
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, [dates])

  function getMonthLabel(month: number): string {
    const monthLabel = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return monthLabel[month]
  }

  function getWeekLabel(month: number): string {
    const weekLabel = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']

    return weekLabel[month]
  }

  function getColorFromStatus(status: string): string | undefined {
    const colorStatus: any = {
      // 'PENDING': '#a1a1a1',
      // 'DONE': '#5d9fcd',
      // 'NOT_DONE': '#5d9fcd',
      'PENDING': '#a1a1a1',
      'DONE': '#66c769',
      'NOT_DONE': '#ff4c4c',
    }

    return colorStatus[status]
  }

  function getRandomStatus(): 'PENDING' | 'NOT_DONE' | 'DONE' {
    const rand = Math.floor(Math.random() * 2)
    console.log(rand)

    switch (rand) {
      case 0:
        return 'NOT_DONE'
      case 1:
        return 'DONE'
      default:
        return 'PENDING'
    }
  }

  function dateIsToday(date: Date): boolean {
    return date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth()
  }

  return (
  <Wrapper>
    {dates.map((d, index, _) => (
      <div key={index} id={dateIsToday(d.date) ? 'today-date-item' : 'item-date-' + index}>
        {(d.date.getDate() === 1 || index === 0) && <MonthLabel>{getMonthLabel(d.date.getMonth())}</MonthLabel>}
        <StyledDate today={dateIsToday(d.date)}>
          <DateLabel>
            <DateLabelWeek>{getWeekLabel(d.date.getDay())}.</DateLabelWeek>
            <DateLabelDate>{d.date.getDate()}</DateLabelDate>
          </DateLabel>
          <DateContent>
            {d.items.length === 0 && <Label>Nenhum registro</Label>}
            {d.items.map((item, index, _) => (
              <DateItem key={index} color={getColorFromStatus(item.status)}>
                <DateItemLabel>
                {item.type === 'task' && <BiTask size={23} />}
                {item.type === 'workout' && <IoIosFitness size={23} />}
                {item.type === 'cardio' && <TbRun size={23} />}
                  {item.name}
                </DateItemLabel>
                <ConfirmBox>
                  {item.status === 'DONE' && <MdOutlineCheck size={24} />}
                  {item.status === 'NOT_DONE' && <IoCloseSharp size={24} />}
                </ConfirmBox>
              </DateItem>
            ))}
          </DateContent>
        </StyledDate>
      </div>
    ))}
  </Wrapper>
)
}

export default Calendar
