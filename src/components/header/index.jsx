import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import headerImage from '../../images/logo/ohmyfood.svg'
import Research from '../search'

const HeaderSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: ${colors.primary};
`

const HeaderLogoWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 34px;
  margin: 30px 0;
`


const HeaderLogo = styled.div`
  background-image: url(${headerImage});
  width: 100%;
  background-size: cover;
  background-prosition: center;
`

const Header = () => {
  return (
    <HeaderSection>
      <HeaderLogoWrapper>
        <HeaderLogo alt="Logo du header" />
      </HeaderLogoWrapper>
      <Research />
    </HeaderSection>
  )
}
export default Header
