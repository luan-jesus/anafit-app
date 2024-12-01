import React from 'react'

import {
  Wrapper,
  MonthLabel,
  Date,
  DateLabel,
  DateContent,
  DateItem,
  DateLabelWeek,
  DateLabelDate,
  Label,
} from './styles'

const Calendar: React.FC = () => (
  <Wrapper>
    <MonthLabel>Dezembro</MonthLabel>
    <Date>
      <DateLabel>
        <DateLabelWeek>dom.</DateLabelWeek>
        <DateLabelDate>1</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>seg.</DateLabelWeek>
        <DateLabelDate>2</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem backgroundColor='#66c769'>Creatina</DateItem>
        <DateItem backgroundColor='#66c769'>Treino de Peito</DateItem>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>ter.</DateLabelWeek>
        <DateLabelDate>3</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>qua.</DateLabelWeek>
        <DateLabelDate>4</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>qui.</DateLabelWeek>
        <DateLabelDate>5</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem backgroundColor='#66c769'>Creatina</DateItem>
        <DateItem backgroundColor='#ff4c4c'>Treino de Perna</DateItem>
      </DateContent>
    </Date>
    <Date active>
      <DateLabel>
        <DateLabelWeek>sex.</DateLabelWeek>
        <DateLabelDate>7</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem backgroundColor='#66c769'>Creatina</DateItem>
        <DateItem backgroundColor='#66c769'>Treino de Ombro</DateItem>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>sab.</DateLabelWeek>
        <DateLabelDate>8</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>dom.</DateLabelWeek>
        <DateLabelDate>9</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>seg.</DateLabelWeek>
        <DateLabelDate>10</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem backgroundColor='#ff4c4c'>Treino de Costas</DateItem>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>dom.</DateLabelWeek>
        <DateLabelDate>11</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>seg.</DateLabelWeek>
        <DateLabelDate>12</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem>Creatina</DateItem>
        <DateItem>Treino de Peito</DateItem>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>ter.</DateLabelWeek>
        <DateLabelDate>13</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>qua.</DateLabelWeek>
        <DateLabelDate>14</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>qui.</DateLabelWeek>
        <DateLabelDate>15</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem>Creatina</DateItem>
        <DateItem>Treino de Perna</DateItem>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>sex.</DateLabelWeek>
        <DateLabelDate>16</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem>Creatina</DateItem>
        <DateItem>Treino de Ombro</DateItem>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>sab.</DateLabelWeek>
        <DateLabelDate>17</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>dom.</DateLabelWeek>
        <DateLabelDate>18</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>seg.</DateLabelWeek>
        <DateLabelDate>19</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem>Treino de Costas</DateItem>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>dom.</DateLabelWeek>
        <DateLabelDate>20</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>dom.</DateLabelWeek>
        <DateLabelDate>21</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>seg.</DateLabelWeek>
        <DateLabelDate>22</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem>Creatina</DateItem>
        <DateItem>Treino de Peito</DateItem>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>ter.</DateLabelWeek>
        <DateLabelDate>23</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>qua.</DateLabelWeek>
        <DateLabelDate>24</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>qui.</DateLabelWeek>
        <DateLabelDate>25</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem>Creatina</DateItem>
        <DateItem>Treino de Perna</DateItem>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>sex.</DateLabelWeek>
        <DateLabelDate>26</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem>Creatina</DateItem>
        <DateItem>Treino de Ombro</DateItem>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>sab.</DateLabelWeek>
        <DateLabelDate>27</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>dom.</DateLabelWeek>
        <DateLabelDate>28</DateLabelDate>
      </DateLabel>
      <DateContent>
        <Label>Nenhum registro</Label>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>seg.</DateLabelWeek>
        <DateLabelDate>29</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem>Treino de Costas</DateItem>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>seg.</DateLabelWeek>
        <DateLabelDate>30</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem>Treino de Costas</DateItem>
      </DateContent>
    </Date>
    <Date>
      <DateLabel>
        <DateLabelWeek>seg.</DateLabelWeek>
        <DateLabelDate>31</DateLabelDate>
      </DateLabel>
      <DateContent>
        <DateItem>Treino de Costas</DateItem>
      </DateContent>
    </Date>
  </Wrapper>
)

export default Calendar
