import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Explore from '../boutons/explore'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.lightgray};
  padding: 40px 0;
`

const BannerText = styled.h1`
  font-weight: 700px;
  font-size: 40px;
  font-style: normal;
  line-height: 47px;
  padding: 0 0 30px 0;
  text-align: center;
  color: ${colors.secondary};
  @media (max-width: 768px) {
    ${
      '' /* text-align: left;
    font-size: 24px; */
    }
  }
`

const BannerSousText = styled.p`
  font-weight: 300px;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  padding: 0 0 30px 0;
  text-align: center;
  color: ${colors.secondary};
  @media (max-width: 768px) {
    ${
      '' /* text-align: left;
    font-size: 24px; */
    }
  }
`

const Banner = () => {
  return (
    <Section>
      <BannerText>Réservez le menu qui vous convient</BannerText>
      <BannerSousText>
        Découvrez des restaurants d'exception, sélectionnés par nos soins.
      </BannerSousText>
      <Explore />
    </Section>
  )
}
export default Banner
