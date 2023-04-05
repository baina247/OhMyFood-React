import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import headerImage from '../../images/logo/ohmyfood.svg'
import Research from '../search'

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: ${colors.primary};
`

const HeaderLogo = styled.div`
  background-image: url(${headerImage});
  width: 200px;
  height: 34px;
  background-size: cover;
  background-prosition: center;
  margin: 40px 0;
  border: none;
`

const Header = () => {
  return (
    <Section>
      <HeaderLogo />
      <Research />
    </Section>
  )
}
export default Header
