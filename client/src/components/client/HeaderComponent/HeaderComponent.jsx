import React, { useState } from "react";
import {
  Avatar,
  Button,
  Header,
  HeaderContent,
  LinkHeader,
  LinkNavbar,
  LinkPopover,
  Menu,
  MenuItem,
  NavBar,
  PopUpBox,
  PopUpBoxProduct,
} from "./style";
import { Image, Popover } from "antd";
import logo1 from "../../../assets/images/logo1.png";
import {
  UserOutlined,
  SearchOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import {
  getOrdersByUId,
  logoutDispatch,
  resetCart,
  resetOrders,
} from "../../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LoginIcon from "@mui/icons-material/Login";
import { Badge } from "@mui/material";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const content = (
    <div>
      <Button onClick={() => navigate("/shop/love")}>Tranh mosaics</Button>
      <Button onClick={() => navigate("/shop/thanks")}>Lót ly</Button>
      <Button onClick={() => navigate("/shop/graduation")}>Mosaics</Button>
      <Button onClick={() => navigate("/uploadPicture")}>Upload picture</Button>
    </div>
  );

  const handleLogout = () => {
    logoutDispatch(dispatch);
    resetCart(dispatch);
    resetOrders(dispatch);
    navigate("/login");
  };

  const handleViewOrders = (userId) => {
    getOrdersByUId(dispatch, userId);
    navigate("/orders");
  };

  const handleViewProfile = (id) => {
    console.log(id);
    navigate(`/profile/id`);
  };

  const handleViewTranhMosaic = (id) => {
    console.log(id);
    navigate(`/shop/love`);
  };

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
    <>
      <Header>
        <HeaderContent>
          <NavLink to={"/home"}>
            <Image preview={false} width={170} height={51} src={logo1} />
          </NavLink>
          <Menu>
            <LinkHeader onClick={() => navigate("/")}>
              <MenuItem>Trang chủ</MenuItem>
            </LinkHeader>
            <LinkPopover content={content}>
              <MenuItem>Sản phẩm</MenuItem>
            </LinkPopover>
            <LinkHeader href="/contact">
              <MenuItem>Liên hệ</MenuItem>
            </LinkHeader>
            <LinkHeader onClick={() => navigate("/introduction")}>
              <MenuItem>Giới thiệu</MenuItem>
            </LinkHeader>
          </Menu>
          <NavBar>
            {user ? (
              <>
                <LinkNavbar onClick={() => navigate("/")}>
                  <SearchOutlined />
                </LinkNavbar>
                <LinkNavbar onClick={() => navigate("/cart")}>
                  <Badge badgeContent={totalQuantity} color="primary">
                    <ShoppingOutlined style={{ fontSize: "30px" }} />
                  </Badge>
                </LinkNavbar>
                <MenuItem onClick={() => setIsPopup(!isPopup)}>
                  <Avatar
                    src={user.img ? user.img : "/images/utils/noavatar.png"}
                  />
                  {isPopup && (
                    <PopUpBox>
                      <Button
                        onClick={() => {
                          handleViewProfile(user._id);
                        }}
                      >
                        <EditIcon /> Thông Tin
                      </Button>
                      <Button onClick={() => handleViewOrders(user._id)}>
                        <ListAltIcon />
                        Đơn Hàng
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
            ) : (
              <>
                <LinkNavbar onClick={() => navigate("/")}>
                  <SearchOutlined />
                </LinkNavbar>
                <Badge badgeContent={totalQuantity} color="primary">
                  <LinkNavbar onClick={() => navigate("/cart")}>
                    <ShoppingOutlined style={{ fontSize: "30px" }} />
                  </LinkNavbar>
                </Badge>
                <LinkNavbar onClick={() => navigate("/login")}>
                  <LoginIcon />
                </LinkNavbar>
              </>
            )}
          </NavBar>
        </HeaderContent>
      </Header>
    </>
  );
};

export default HeaderComponent;
