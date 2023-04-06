import React from 'react'
import styled from 'styled-components'
import colors from '../../../utils/style/colors'

const ChoiceBtnIcon = styled.span`
  font-size: 32px;
  margin-right: 10px;
  color: #7e7e7e;
  transition: opacity 0.2s ease-in-out;
`

const ChoiceBtnCounter = styled.span`
  position: absolute;
  left: -10px;
  counter-reset: listCounter;
  counter-increment: listCounter;
  background: ${colors.purple};
  color: ${colors.primary};
  font-size: 16px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const ChoiceBtnText = styled.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${colors.secondary};
`

const ChoiceBtnWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background: ${colors.darkgray};
  box-shadow: ${colors.boxShadow};
  width: 25em;
  height: 72px;
  border-radius: 20px;
  margin-top: 30px;
  cursor: pointer;

  &:hover ${ChoiceBtnIcon} {
    color: ${colors.purple};
  }
`

const ChoiceBtnWrapperStyled = styled(ChoiceBtnWrapper)`
  ${ChoiceBtnCounter} {
    margin-right: 0;
  }

  ${ChoiceBtnIcon} {
    margin-right: 0;
    font-size: 25px;
  }
`

const ChoiceBtn = ({ icon, text, counter }) => {
  return (
    <ChoiceBtnWrapperStyled>
      <ChoiceBtnCounter>{counter}</ChoiceBtnCounter>
      <ChoiceBtnIcon>{icon}</ChoiceBtnIcon>
      <ChoiceBtnText>{text}</ChoiceBtnText>
    </ChoiceBtnWrapperStyled>
  )
}

export default ChoiceBtn
