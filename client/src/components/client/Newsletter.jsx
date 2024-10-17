import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../../utilities/responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: #fcf6f5;
  ${mobile({ height: "40vh" })}
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 70px;
  ${mobile({ fontSize: "60px" })}
`;
const Desc = styled.p`
  margin: 30px;
  font-size: 26px;
  font-weight: 300;
  ${mobile({ fontSize: "16px" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
  outline: none;
  font-size: 16px;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  ${mobile({ padding: "4px 8px" })}

  color: #fff;
  background-color: #058081;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Khách Hàng</Title>
      <Desc>Cập nhật món quà yêu thích của bạn nhanh nhất.</Desc>
      <InputContainer>
        <Input type="text" placeholder="Nhập email..." />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
