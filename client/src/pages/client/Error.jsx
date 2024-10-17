import React from 'react';
import styled from 'styled-components';
import Announcement from '../../components/client/Announcement';
import Navbar from '../../components/client/Navbar';
import { mobile } from '../../utilities/responsive';

const Container = styled.div``;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 50vw;
  height: 100vh;
  ${mobile({ width: '100%', height: '50vh' })}
`;
const Error = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <ImageContainer>
        <Image src="./images/error.png"></Image>
      </ImageContainer>
    </Container>
  );
};

export default Error;
