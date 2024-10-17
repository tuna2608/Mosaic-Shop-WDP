import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 100%;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 28px;
  color: #aaaaea;
`;

const SoldOut = () => {
  return (
    <Container>
      <Title>Sorry, We sold out products at this price range</Title>
    </Container>
  );
};

export default SoldOut;
