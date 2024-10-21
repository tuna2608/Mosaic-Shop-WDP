import React, { useState } from "react";
import HeaderComponent from "../../../components/client/HeaderComponent/HeaderComponent";
import FooterComponent from "../../../components/client/FooterComponent/FooterComponent";
import { HomeWrapper, FormContainer, InputField, SubmitButton } from "./StyledComponents"; // Adjust the path if needed

const SOCensorship = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Information Submitted:", userInfo);
    // Handle submission, e.g., send data to an API
  };

  return (
    <div>
      <HeaderComponent />
      <HomeWrapper>
        <FormContainer onSubmit={handleSubmit}>
          <h1>Nhập Thông Tin Người Dùng</h1>
          <InputField
            type="text"
            name="username"
            placeholder="Tên người dùng"
            value={userInfo.username}
            onChange={handleChange}
            required
          />
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={handleChange}
            required
          />
          <InputField
            type="tel"
            name="phone"
            placeholder="Số điện thoại"
            value={userInfo.phone}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="address"
            placeholder="Địa chỉ"
            value={userInfo.address}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit">Gửi Thông Tin</SubmitButton>
        </FormContainer>
      </HomeWrapper>
      <FooterComponent />
    </div>
  );
};

export default SOCensorship;
