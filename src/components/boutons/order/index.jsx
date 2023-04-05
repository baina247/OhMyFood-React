import React from 'react'
import styled from 'styled-components'
import colors from '../../../utils/style/colors'

const BoutonWrapper = styled.button`
  background: ${colors.linearGradient};
  box-shadow: ${colors.boxShadow};
  cursor: pointer;
  padding: 10px;
  border-radius: 50px;
  border: none;
  display: flex;

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.15)
      ),
      linear-gradient(201deg, ${colors.purple} -10%, ${colors.pink} 110%);
  }
`

const BoutonText = styled.p`
  font-weight: 500px;
  font-size: 16px;
  font-style: normal;
  padding: 5px 12px;
  line-height: 19px;
  text-align: center;
  color: ${colors.primary};
`

function Order() {
  return (
    <BoutonWrapper>
      <BoutonText>Commander</BoutonText>
    </BoutonWrapper>
  )
}

export default Order
