import React, { useState } from "react";
import HeaderComponent from "../../../components/client/HeaderComponent/HeaderComponent";
import FooterComponent from "../../../components/client/FooterComponent/FooterComponent";
import { HomeWrapper, FormContainer, InputField, SubmitButton, TermsBox } from "./StyledComponents"; 
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../redux/apiCalls'; // Adjust the import path as needed

const SOCensorship = () => {
  const user = useSelector((state) => state.user.currentUser); // Get current user from Redux store
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    username: user.username || "",
    email: user.email || "",
    dOB: user.dOB || "",
    address: user.address || "",
    phone: user.phone || "",
    title: user.title || "",
    bank: "", // Add Bank field
    banknum: "", // Add Bank Account Number field
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleTermsChange = (e) => {
    setAcceptedTerms(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert("Vui lòng chấp nhận các điều khoản trước khi gửi.");
      return;
    }

    const updatedUser = { 
      ...userInfo, 
      validation: true, // Set validation to true
    };

    // Call the updateUser function from redux actions
    await updateUser(user._id, updatedUser, dispatch);
    alert("Cập nhật thông tin thành công!");
  };

  return (
    <div>
      <HeaderComponent />
      <HomeWrapper>
        <h1>Đăng ký trở thành CTV của MOSAIC ngay hôm nay!</h1>
        <br />
        <FormContainer onSubmit={handleSubmit}>
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
          <InputField
            type="date"
            name="dOB"
            placeholder="Ngày sinh"
            value={userInfo.dOB}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="title"
            placeholder="Công việc"
            value={userInfo.title}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="bank"
            placeholder="Tài khoản ngân hàng"
            value={userInfo.bank}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="banknum"
            placeholder="Số tài khoản"
            value={userInfo.banknum}
            onChange={handleChange}
            required
          />
          <TermsBox>
            <h2>Điều Khoản Sử Dụng</h2>
            <p>
              Bằng cách nhập thông tin của bạn và nhấn "Gửi Thông Tin", bạn đồng ý với các điều khoản sau:
              <ul>
                <li>Chúng tôi sẽ thu thập và sử dụng thông tin của bạn cho mục đích liên hệ và cung cấp dịch vụ.</li>
                <li>Thông tin của bạn sẽ không được chia sẻ với bên thứ ba mà không có sự đồng ý của bạn.</li>
                <li>Bạn có quyền truy cập, chỉnh sửa và yêu cầu xóa thông tin cá nhân của mình.</li>
              </ul>
            </p>
            <label>
              <input type="checkbox" checked={acceptedTerms} onChange={handleTermsChange} />
              Tôi đồng ý với các điều khoản sử dụng
            </label>
          </TermsBox>
          <SubmitButton type="submit">Gửi Thông Tin</SubmitButton>
        </FormContainer>
      </HomeWrapper>
      <FooterComponent />
    </div>
  );
};

export default SOCensorship;
