import React from "react";
// import Navbar from '../../../components/client/Navbar'
import BannerComponent from "../../../components/client/HomeComponent/BannerComponent/BannerComponent";
import { HomeContent, HomeWrapper } from "./style";
import TopTypeProductComponent from "../../../components/client/HomeComponent/TopTypeProductComponent/TopTypeProductComponent";
import MostPopularComponent from "../../../components/client/HomeComponent/MostPopularComponent/MostPopularComponent";
import RightPopularComponent from "../../../components/client/HomeComponent/RightPopularComponent/RightPopularComponent";
import CenterPopularComponent from "../../../components/client/HomeComponent/CenterPopularComponent/CenterPopularComponent";
import HeaderComponent from "../../../components/client/HeaderComponent/HeaderComponent";
import FooterComponent from "../../../components/client/FooterComponent/FooterComponent";
// import NavBar from "../../../components/client/HeaderComponent/HeaderComponent";

const HomePage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <HeaderComponent/>
      <HomeWrapper>
        <BannerComponent />
        <HomeContent>
          <TopTypeProductComponent />
          <MostPopularComponent />
          <RightPopularComponent />
          <CenterPopularComponent />
        </HomeContent>
      </HomeWrapper>
      <FooterComponent/>
    </div>
  );
};

export default HomePage;
