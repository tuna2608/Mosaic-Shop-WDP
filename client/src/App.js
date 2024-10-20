import Home from "./pages/client/Home";
import HomePage from "./pages/client/HomePage/HomePage";
import Login from "./pages/common/Login";
import Product from "./pages/client/ProductPage/Product";
import ProductList from "./pages/client/ProductList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/common/Register";
import Cart from "./pages/client/Cart";
import Error from "./pages/client/Error";
import Success from "./components/client/Success";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import UserList from "./pages/admin/adminuserlist/UserList";
import DetailUser from "./pages/admin/adminuserdetail/DetailUser";
import NewUser from "./pages/admin/adminusernew/NewUser";
import AdminProductList from "./pages/admin/adminproductlist/AdminProductList";
import AdminProductDetail from "./pages/admin/adminproductdetail/AdminProductDetail";
import NewProduct from "./pages/admin/adminproductnew/NewProduct";
import AdminHome from "./pages/admin/adminHome/AdminHome";
import AdminOrderList from "./pages/admin/adminorderlist/AdminOrderList";
import ShopOwnerHome from "./pages/shopowner/shopOwnerHome/shopOwnerHome";
import ShopOwnerProductList from "./pages/shopowner/shopOnwerProductList/shopOwnerProductList";
import ShopOwnerOrderList from "./pages/shopowner/shopOnwerOrderList/shopOwnerOrderList";
import SONewproduct from "./pages/shopowner/shoponwerProductNew/NewProduct";
import ShopOwnerProductDetail from "./pages/shopowner/shopOwnerProductDetail/ProductDetail";

import OrderList from "./pages/client/Order/OrderList";
import Profile from "./pages/client/Profile/Profile";
import UploadPicture from "./pages/client/UploadPicture/UploadPicture";
import Payment from "./pages/client/Payment/Payment";
import Introduction from "./pages/client/Introduction/Introduction";





function App() {
  // Testing
  const user = useSelector((state) => state.user.currentUser);

  const isAdmin = user && user.isAdmin;
  const isShopowner = user && user.isShopowner;

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={isAdmin ? <AdminHome /> : <HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={user ? <Navigate to="/login" /> : <Register />}
          />
          <Route path="/uploadPicture" element={user ? <UploadPicture /> : <Login />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/shop/:category?" element={<ProductList />} />
          <Route path="/cart" element={user ? <Cart /> : <Login />} />
          <Route path="/orders" element={user ? <OrderList /> : <Login />} />
          <Route path="/profile/:id" element={user ? <Profile /> : <Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/productList" element={user ? <ProductList /> : <Login />} />
          <Route path="/introduction" element={user ? <Introduction /> : <Login />} />

          {/* Admin Routes */}
          <Route path="/home" element={isAdmin ? <AdminHome /> : <HomePage />} />
          <Route
            path="/userList"
            element={isAdmin ? <UserList /> : <Login />}
          />
          <Route
            path="/user/:userId"
            element={isAdmin ? <DetailUser /> : <Login />}
          />
          <Route path="/newUser" element={isAdmin ? <NewUser /> : <Login />} />
          <Route
            path="/adminProductList"
            element={isAdmin ? <AdminProductList /> : <Login />}
          />
          <Route
            path="/adminProduct/:productId"
            element={isAdmin ? <AdminProductDetail /> : <Login />}
          />
          <Route
            path="/newProduct"
            element={isAdmin ? <NewProduct /> : <Login />}
          />
          <Route
            path="/admin-order-list"
            element={isAdmin ? <AdminOrderList /> : <Login />}
          />
          {/* End Admin Routes */}

          {/* Shop owner Routes */}
          <Route path="/shopowner-dashboard/:userId" element={user ? <ShopOwnerHome/> : <Login />} />
          <Route
            path="/ShopOwnerProductList"
            element={isShopowner ? <ShopOwnerProductList /> : <Login />}
          />
          <Route
            path="/ShopOwnerProduct/:productId"
            element={isShopowner ? <ShopOwnerProductDetail/> : <Login />}
          />
          <Route
            path="/SOnewProduct"
            element={isShopowner ? <SONewproduct /> : <Login />}
          />
          <Route
            path="/ShopOwnerOrderList"
            element={isShopowner ? <ShopOwnerOrderList /> : <Login />}
          />
          {/* End Shop Owner Routes */}
          <Route path="*" element={<Error />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
