import React from "react";
import {
  Footer,
  FooterContainer,
  FooterInfo,
  FooterInfoLast,
  FooterItem,
  FooterItemSocial,
  FooterSearch,
  FooterTitle,
  InputFooterSearch,
  LinkFooterInfo,
  LinkFooterSearch,
  LogoBranch,
} from "./style";

import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { Image } from "antd";
const FooterComponent = () => {
  return (
    <Footer>
      <LogoBranch>
        <Image src="./styles/logo3.png" alt="" />
      </LogoBranch>
      <FooterContainer>
        <FooterInfo>
          <FooterTitle>Customer Care</FooterTitle>
          <LinkFooterInfo href="/">
            <FooterItem>About</FooterItem>
          </LinkFooterInfo>
          <LinkFooterInfo href="/">
            <FooterItem>Help</FooterItem>
          </LinkFooterInfo>
          <LinkFooterInfo href="/">
            <FooterItem>Delivery</FooterItem>
          </LinkFooterInfo>
        </FooterInfo>
        <FooterInfo>
          <FooterTitle>Shop</FooterTitle>
          <LinkFooterInfo href="">
            <FooterItem>Tranh Mosaics</FooterItem>
          </LinkFooterInfo>
          <LinkFooterInfo href="">
            <FooterItem>Lót ly</FooterItem>
          </LinkFooterInfo>
          <LinkFooterInfo href="">
            <FooterItem>Mosaic kits</FooterItem>
          </LinkFooterInfo>
        </FooterInfo>
        <FooterInfoLast>
          <FooterTitle>Get In Touch</FooterTitle>
          <FooterSearch>
            <InputFooterSearch type="text" placeholder="Your email ..." />
            <LinkFooterSearch>Subscribe</LinkFooterSearch>
          </FooterSearch>
          
          <FooterItemSocial>
            <LinkFooterInfo href="">
              <FacebookOutlined />
            </LinkFooterInfo>
            <LinkFooterInfo href="">
              <InstagramOutlined />
            </LinkFooterInfo>
          </FooterItemSocial>
        </FooterInfoLast>
      </FooterContainer>
    </Footer>
  );
};

export default FooterComponent;
