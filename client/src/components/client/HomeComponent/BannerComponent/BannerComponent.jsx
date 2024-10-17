import React from 'react'
import { BannerContent, ButtonBanner, ButtonBannerText, ButtonContainer, ImageBanner } from './style'
// import banner from ''

const BannerComponent = () => {
  return (
    <BannerContent>
        <ImageBanner src="images/banners/banner.png" alt="banner"/>
        <ButtonContainer>
          <ButtonBanner>Shop now</ButtonBanner>
          {/* <ButtonBanner href='/'>
              <ButtonBannerText>Shop now</ButtonBannerText>
          </ButtonBanner > */}
        </ButtonContainer>
    </BannerContent>
  )
}

export default BannerComponent
