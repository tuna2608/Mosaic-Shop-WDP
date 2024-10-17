import React from "react";
import { PopulateRight } from "./style";
import {
  ButtonText,
  Cart,
  CartPrice,
  CartTitle,
  ContainerContent,
  ContainerHeader,
  ImgCart,
  ImgPopulate,
  LinkPopulate,
  PopulateContainer,
  PopulateTitle,
} from "../MostPopularComponent/style";

// import image4 from '../../assets/images/image4.png'

const RightPopularComponent = () => {
  return (
    <PopulateRight>
      <PopulateContainer>
        <ContainerHeader>
          <PopulateTitle>Most populate text</PopulateTitle>
          <LinkPopulate href="/">
            <ButtonText>See more</ButtonText>
          </LinkPopulate>
        </ContainerHeader>
        <ContainerContent>
          <LinkPopulate href="/product">
            <Cart>
              <ImgCart src="images/exe/image4.png" alt="" />
              <CartTitle>Mandala Serving Tray Kit</CartTitle>
              <CartPrice>60.000 đ</CartPrice>
            </Cart>
          </LinkPopulate>
          <LinkPopulate href="/product">
            <Cart>
              <ImgCart src="images/exe/image4.png" alt="" />
              <CartTitle>Mandala Serving Tray Kit</CartTitle>
              <CartPrice>60.000 đ</CartPrice>
            </Cart>
          </LinkPopulate>
          <LinkPopulate href="/product">
            <Cart>
              <ImgCart src="images/exe/image4.png" alt="" />
              <CartTitle>Mandala Serving Tray Kit</CartTitle>
              <CartPrice>60.000 đ</CartPrice>
            </Cart>
          </LinkPopulate>
        </ContainerContent>
      </PopulateContainer>
      <ImgPopulate src="images/exe/image4.png" alt="" />
    </PopulateRight>
  );
};

export default RightPopularComponent;
