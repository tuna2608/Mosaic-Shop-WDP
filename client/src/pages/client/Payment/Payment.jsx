import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userRequest } from "../../../utilities/requestMethod";
import { createOrder, deleteCart, resetCart } from "../../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ButtonSuccessBtn = styled.div`
  padding: 10px 30px;
  border-radius: 10px;
  background-color: var(--orange);
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

const ImageQR = styled.img`
  width: 50%;
  height: 50%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
`

export default function Payment() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const paramValue = query.get("amount");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.currentUser);
  const cart = localStorage.getItem("cart") || [];

  const makeRequest = async () => {
    try {
      createOrder(dispatch, {
        userId: user._id,
        products: cart.cartItems,
        amount: paramValue,
        address: user.address,
        phone: user.phone,
        status: "Pending",
      });
      deleteCart(dispatch);
      resetCart(dispatch);
      window.location.href = "/cart";
    } catch (error) {}
  };

  return (
    <Container>
      <ImageQR
        src={`https://api.vietqr.io/image/970418-53110009169999-EVEYhIT.jpg?accountName=NGUYEN%20ANH%20TU&amount=${paramValue}`}
      />
      <ContainerButton>
        <ButtonSuccessBtn onClick={makeRequest}>
          Chuyen khoan thanh cong
        </ButtonSuccessBtn>
      </ContainerButton>
    </Container>
  );
}
