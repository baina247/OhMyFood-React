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
  searchInputHeight: '30px',
}

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
  width: 100%;
  height: 50px;
`

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align-last: center;
`

const SearchInput = styled.input`
  height: ${sizes.searchInputHeight};
  background-color: ${colors.background};
  font-weight: 500px;
  border: unset;
  cursor: pointer;

  ::placeholder {
    color: ${colors.placeholder};
    font-weight: bold;
    font-size: 18px;
  }
`

const Research = () => {
  return (
    <SearchSection>
      <SearchInputWrapper>
        <FontAwesomeIcon icon={faLocationDot} size="lg" />
        <SearchInput
          type="search"
          name="search"
          placeholder="Paris, Belleville"
        />
      </SearchInputWrapper>
    </SearchSection>
  )
}

export default Research
