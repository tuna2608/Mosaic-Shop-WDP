import React from 'react'
import { PopulateCenter, PopulateCenterContainer } from './style'
import { ButtonText, Cart, CartPrice, CartTitle, ContainerContent, ContainerHeader, ImgCart, LinkPopulate, PopulateTitle } from '../MostPopularComponent/style'

// import image5 from '../../assets/images/image5.png'
const CenterPopularComponent = () => {
  return (
    <PopulateCenter>
      <PopulateCenterContainer>
        <ContainerHeader>
          <PopulateTitle>Most populate text</PopulateTitle>
          <LinkPopulate href="/">
            <ButtonText>See more</ButtonText>
          </LinkPopulate>
        </ContainerHeader>
        <ContainerContent>
          <LinkPopulate href="/product">
            <Cart>
              <ImgCart src="images/exe/image5.png" alt="" />
              <CartTitle>Mandala Serving Tray Kit</CartTitle>
              <CartPrice>60.000 đ</CartPrice>
            </Cart>
          </LinkPopulate>
          <LinkPopulate href="/product">
            <Cart>
              <ImgCart src="images/exe/image5.png" alt="" />
              <CartTitle>Mandala Serving Tray Kit</CartTitle>
              <CartPrice>60.000 đ</CartPrice>
            </Cart>
          </LinkPopulate>
          <LinkPopulate href="/product">
            <Cart>
              <ImgCart src="images/exe/image5.png" alt="" />
              <CartTitle>Mandala Serving Tray Kit</CartTitle>
              <CartPrice>60.000 đ</CartPrice>
            </Cart>
          </LinkPopulate>
          <LinkPopulate href="/product">
            <Cart>
              <ImgCart src="images/exe/image5.png" alt="" />
              <CartTitle>Mandala Serving Tray Kit</CartTitle>
              <CartPrice>60.000 đ</CartPrice>
            </Cart>
          </LinkPopulate>
          <LinkPopulate href="/product">
            <Cart>
              <ImgCart src="images/exe/image5.png" alt="" />
              <CartTitle>Mandala Serving Tray Kit</CartTitle>
              <CartPrice>60.000 đ</CartPrice>
            </Cart>
          </LinkPopulate>
        </ContainerContent>
      </PopulateCenterContainer>
    </PopulateCenter>
  )
}

export default CenterPopularComponent
