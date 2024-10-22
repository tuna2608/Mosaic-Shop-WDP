import { Button } from "antd";
import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderComponent from "../../components/client/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/client/FooterComponent/FooterComponent";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, deleteCart, resetCart } from "../../redux/apiCalls";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

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

const SuccessPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const amountTotal =  query.get("amount");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const cart = localStorage.getItem("cart") || [];

  useEffect(()=>{
    createOrder(dispatch, {
      userId: user._id,
      products: cart.cartItems,
      amount: amountTotal,
      address: user.address,
      phone: user.phone,
      status: "Delivering",
    });
    deleteCart(dispatch);
    resetCart(dispatch);
  },[])

  const handleClick = async () =>{
    try {
        window.location.href = "/cart";
      } catch (error) {

      }
  }

  return (
    <>
      <HeaderComponent/>
      <Container>
        Thanks for your payment
        <ContainerButton>
          <ButtonSuccessBtn onClick={handleClick}
          >Continue to your cart</ButtonSuccessBtn>
        </ContainerButton>
      </Container>
      <FooterComponent/>
    </>
  );
};

export default SuccessPage;
