import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const colors = {
  background: '#eaeaea',
  placeholder: '#353535',
}

const sizes = {
  searchInputWidth: '10%',
}

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
  padding: 20px 0;
  width: 100%;
`

const SearchInput = styled.input`
  width: ${sizes.searchInputWidth};
  background-color: ${colors.background};
  margin: 0 0 0 10px;
  font-weight: 500px;
  font-size: 18px;
  line-height: 19px;
  align-self: center;
  border: unset;
  cursor: pointer;

  ::placeholder {
    color: '#353535';
    font-weight: bold;
    font-size: 18px;
    line-height: 19px;
    align-self: center;
  }
`

const Research = () => {
  return (
    <SearchSection>
      <FontAwesomeIcon icon={faLocationDot} size="lg" />
      <SearchInput
        type="search"
        name="search"
        placeholder="Paris, Belleville"
      />
    </SearchSection>
  )
}

export default Research
