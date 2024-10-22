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

import OrderList from "./pages/client/Order/OrderList";
import Profile from "./pages/client/Profile/Profile";
import UploadPicture from "./pages/client/UploadPicture/UploadPicture";
import Introduction from "./pages/client/Introduction/Introduction";
import SuccessPage from "./pages/TestPayment/SuccessPage";
import CancelPage from "./pages/TestPayment/CancelPage";

function App() {
  // Testing
  const user = useSelector((state) => state.user.currentUser);

  const isAdmin = user && user.isAdmin;

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
          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route path="/productList" element={user ? <ProductList /> : <Login />} />
          <Route path="/introduction" element={user ? <Introduction /> : <Login />} />

          <Route path="/success" element={user ? <SuccessPage /> : <Login />} />
          <Route path="/cancel" element={user ? <CancelPage /> : <Login />} />
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
          <Route path="*" element={<Error />} />
          {/* <Route path="/success" element={<Success />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
