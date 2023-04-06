import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/banner/index'
import colors from '../../utils/style/colors'
import Header from '../../components/header'
import Choice from '../../components/choice'

const Body = styled.div`
  background-color: ${colors.primary};
`

function Home() {
  return (
    <Body>
      <Header />
      <Banner />
      <Choice />
    </Body>
  )
}

export default Home
