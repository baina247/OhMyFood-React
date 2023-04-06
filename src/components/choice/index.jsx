import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ChoiceBtn from '../boutons/choiceBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMobileScreenButton,
  faStore,
  faListUl,
} from '@fortawesome/free-solid-svg-icons'

const ChoiceSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  background: ${colors.primary};
  padding: 50px 20em;
`

const ChoiceTitle = styled.h1`
  display: flex;
  font-weight: 700;
  font-size: 24px;
  font-style: normal;
  width: 100%;
  line-height: 47px;
  text-align: center;
  color: ${colors.secondary};
`

const ChoiceBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  width: 100%;
`

const Choice = () => {
  return (
    <ChoiceSection>
      <ChoiceTitle>Fonctionnement</ChoiceTitle>
      <ChoiceBtnWrapper>
        <ChoiceBtn
          icon={<FontAwesomeIcon icon={faMobileScreenButton} />}
          text="Choisissez un restaurant"
          counter={1}
        />
        <ChoiceBtn
          icon={<FontAwesomeIcon icon={faListUl} />}
          text="Composez votre menu"
          counter={2}
        />
        <ChoiceBtn
          icon={<FontAwesomeIcon icon={faStore} />}
          text="Dégustez au restaurant"
          counter={3}
        />
      </ChoiceBtnWrapper>
    </ChoiceSection>
  )
}

export default Choice
