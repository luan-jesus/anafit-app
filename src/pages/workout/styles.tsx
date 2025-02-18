import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding-top: 5px;
`

export const Item = styled.div`
  background-color: white;
  color: #444444;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  box-shadow: #cecece 5px 3px 7px 0px;
  padding: 15px 0px;
  font-size: 20px;

  &:hover {
    background-color: #f1f1f1;
  }
`

export const Icon = styled.div`
  padding: 0 15px;
`

export const Content = styled.div`
  margin-left: 15px;
  flex: 1;
`

export const Action = styled.div`
  padding: 0 15px;
`
