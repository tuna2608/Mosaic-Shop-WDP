import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Badge } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { mobile } from "../../utilities/responsive";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUId, logoutDispatch, resetCart, resetOrders } from "../../redux/apiCalls";
import LogoutIcon from "@mui/icons-material/Logout";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import KeyIcon from "@mui/icons-material/Key";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Left side components

const Left = styled.div`
  /* width: 33.3%; */
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 0 4px;

  margin-left: 25px;
  /* padding: 10px; */
  /* border-radius: 20px; */
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

// Left side components

// Center side components

const Center = styled.div`
  /* width: 33.3%; */
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
  ${mobile({ fontSize: "24px" })}
`;

// Center side components

// Right side components

const Right = styled.div`
  /* width: 33.3%; */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent: "flex-start" })}
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 10px;
  position: relative;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Avatar = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 35px;
  height: 35px;
`;
const PopUpBox = styled.div`
  position: absolute;
  right: -10px;
  background-color: #fff;
  box-shadow: rgba(112, 112, 120, 0.2) 0px 7px 29px 0px;
  width: 140px;
  height: 138px;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 2px;
  z-index: 999;
`;
const Button = styled.button`
  border: none;
  width: 100%;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  background-color: transparent;
  font-size: 10px;
  &:hover {
    cursor: pointer;
    background-color: #f5eeee;
  }
`;

// Right side components

const Navbar = () => {
  const navigate = useNavigate();

  // Get redux state
  // const dispatch = useDispatch();

  const handleLogout = () => {
    logoutDispatch(dispatch);
    resetCart(dispatch);
    resetOrders(dispatch);
    navigate("/login");
  };

  const handleViewOrders = (userId) => {
    getOrdersByUId(dispatch, userId)
    navigate("/orders")
  }

  const handleViewProfile = (id) => {
    console.log(id);
    navigate(`/profile/id`)
  }

  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  // Get cart from redux
  const cart = useSelector((state) => state.cart.cart) || {};
  const totalQuantity = cart.cartItems?.reduce(
    (acc, currentValue) => acc + currentValue.quantity,
    0
  );
  const [isPopup, setIsPopup] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>
            <span>VI</span><img src="images/utils/VIE.png" style={{ objectFit: "contain" }} width={20} height={20} alt="VietNam_Flag" /> <ArrowDropDownOutlinedIcon />
          </Language>
          <SearchContainer>
            <Input
              placeholder="Tìm kiếm"
              style={{ padding: "6px 0", outline: "none" }}
            />
            <Search style={{ color: "gray", fontSize: "20px" }} />
          </SearchContainer> */}
        </Left>
        <Center>
          <Logo>
            <NavLink
              to={"/home"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              A'More.
            </NavLink>
          </Logo>
        </Center>
        <Right>
          {!user ? (
            <>
              <MenuItem onClick={() => navigate("/register")}>
                REGISTER
              </MenuItem>
              <MenuItem onClick={() => navigate("/login")}>SIGN IN</MenuItem>
              <MenuItem onClick={() => navigate("/cart")}>
                <Badge badgeContent={totalQuantity} color="primary">
                  <ShoppingCartOutlinedIcon style={{ fontSize: "30px" }} />
                </Badge>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={() => navigate("/cart")}>
                <Badge badgeContent={totalQuantity} color="primary">
                  <ShoppingCartOutlinedIcon style={{ fontSize: "30px" }} />
                </Badge>
              </MenuItem>
              <MenuItem onClick={() => setIsPopup(!isPopup)}>
                <Avatar
                  src={user.img ? user.img : "/images/utils/noavatar.png"}
                />
                {isPopup && (
                  <PopUpBox>
                    <Button onClick={()=> {handleViewProfile(user._id)}}>
                      <ModeEditOutlineIcon /> Thông Tin
                    </Button>
                    <Button onClick={() => handleViewOrders(user._id)}>
                      <ManageSearchIcon />Đơn Hàng
                    </Button>
                    <Button
                      style={{ paddingRight: "10px" }}
                      onClick={handleLogout}
                    >
                      <LogoutIcon /> Đăng Xuất
                    </Button>
                  </PopUpBox>
                )}
              </MenuItem>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
