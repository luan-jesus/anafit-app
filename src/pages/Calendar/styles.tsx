import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const MonthLabel = styled.h1`
  margin: 5px 10px;
  font-size: 26px;
  color: #494f53;
  font-weight: 700;
`;

export const Label = styled.span`
  font-weight: 400;
  color: #494f53;
  padding: 15px 10px;
`;

type DateProps = {
  today: boolean;
}

export const StyledDate = styled.div<DateProps>`
  padding: 5px 10px;
  display: flex;
  align-items: flex-start;
  background-color: ${props => props.today ? '#e9e9e9' : 'none'};
  border-bottom: ${props => props.today ? '1px dashed #f77800' : 'none'};
`;

export const DateLabel = styled.div`
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
`;

export const DateLabelWeek = styled.span`
  font-weight: 600;
  color: #f77800;
`;

export const DateLabelDate = styled.span`
  font-weight: 600;
  color: #494f53;
`;

export const DateContent = styled.div`
  flex: 1;
  gap: 5px;
  display: flex;
  flex-direction: column;
`;

type DateItemProps = {
  color?: string;
}

export const DateItem = styled.div<DateItemProps>`
  flex: 1;
  background-color: ${props => props.color || '#a1a1a1'};
  color: #fff;
  padding: 15px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const ConfirmBox = styled.div`
  border: 2px solid #fff;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateItemLabel = styled.span`
  display: flex;
  gap: 5px;
`
