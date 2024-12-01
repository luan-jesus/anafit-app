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
  active?: boolean;
}

export const Date = styled.div<DateProps>`
  padding: 5px 10px;
  display: flex;
  align-items: flex-start;
  background-color: ${props => props.active ? '#e9e9e9' : 'none'};
  border-bottom: ${props => props.active ? '1px dashed #f77800' : 'none'};
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
  backgroundColor?: string;
}

export const DateItem = styled.div<DateItemProps>`
  flex: 1;
  background-color: ${props => props.backgroundColor || '#a1a1a1'};
  color: #fff;
  padding: 15px 10px;
  border-radius: 5px;
`;
