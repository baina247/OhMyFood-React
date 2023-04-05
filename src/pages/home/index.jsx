import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/banner/index'
import colors from '../../utils/style/colors'
import Header from '../../components/header'

const Body = styled.div`
  background-color: ${colors.primary};

  @media (max-width: 768px) {
    ${'' /* padding: 0 2rem; */}
  }
`

function Home() {
  return (
    <Body>
      <Header />
      <Banner />
    </Body>
  )
}

export default Home
