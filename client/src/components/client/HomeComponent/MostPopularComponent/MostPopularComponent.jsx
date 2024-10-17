import React from "react";
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
  PopulateLeft,
  PopulateTitle,
} from "./style";
// import lotLy from "../../assets/images/image2.png";

const MostPopularComponent = () => {
  return (
    <PopulateLeft>
      <ImgPopulate src="images/exe/image2.png" alt="" />
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
              <ImgCart src="images/exe/image2.png" alt="" />
              <CartTitle>Mandala Serving Tray Kit</CartTitle>
              <CartPrice>60.000 đ</CartPrice>
            </Cart>
          </LinkPopulate>
          <LinkPopulate href="/product">
            <Cart>
              <ImgCart src="images/exe/image2.png" alt="" />
              <CartTitle>Mandala Serving Tray Kit</CartTitle>
              <CartPrice>60.000 đ</CartPrice>
            </Cart>
          </LinkPopulate>
          <LinkPopulate href="/product">
            <Cart>
              <ImgCart src="images/exe/image2.png" alt="" />
              <CartTitle>Mandala Serving Tray Kit</CartTitle>
              <CartPrice>60.000 đ</CartPrice>
            </Cart>
          </LinkPopulate>
        </ContainerContent>
      </PopulateContainer>
    </PopulateLeft>
  );
};

export default MostPopularComponent;
