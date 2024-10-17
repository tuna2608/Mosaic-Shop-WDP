import React, { useState } from "react";
import Navbar from "../../../components/client/Navbar";
import Announcement from "../../../components/client/Announcement";
import Footer from "../../../components/client/Footer";
import { DataGrid } from "@mui/x-data-grid";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { formatCurrency } from "../../../utilities/formatCurrency";
import "./orderlist.scss";
import { useSelector } from "react-redux";
import HeaderComponent from "../../../components/client/HeaderComponent/HeaderComponent";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const OrderList = () => {
  const orders = useSelector((state) => state.order.order);
  const columns = [
    { field: "_id", headerName: "ID", width: 60 },
    {
      field: "products",
      headerName: "Sản phẩm",
      width: 120,
      renderCell: (params) => {
        return (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <button
              onClick={() => handleDisplayProducts(params.row)}
              style={{
                border: "none",
                borderRadius: "10px",
                padding: "5px 10px",
                background: "#3bb077",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Xem chi tiết
            </button>
          </div>
        );
      },
    },
    {
      field: "amount",
      headerName: "Giá",
      width: 130,
      renderCell: (params) => {
        return <p>{formatCurrency(params.row.amount)}</p>;
      },
    },
    {
      field: "address",
      headerName: "Địa chỉ",
      width: 160,
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      width: 160,
    },
    {
      field: "createdAt",
      headerName: "Ngày đặt hàng",
      width: 160,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 160,
    },
  ];

  const [isPopup, setIsPopup] = useState(false);
  const [detailProducts, setDetailProducts] = useState([]);
  const handleDisplayProducts = (order) => {
    const products = order.products;
    setDetailProducts(products);
    setIsPopup(!isPopup);
  };
  const handleClose = () => {
    setIsPopup(false);
  };
  return (
    <div>
      {/* <Navbar /> */}
      <HeaderComponent/>
      <Announcement />
      <div className="orders-container">
        <h1 className="orders-title">Theo Dõi Đơn Hàng</h1>
        <div style={{ height: "100vh", width: "100%" }}>
          <DataGrid
            disableRowSelectionOnClick
            rows={orders}
            columns={columns}
            getRowId={(row) => row._id}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
        {isPopup && (
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={isPopup}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Sản Phẩm
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              {detailProducts?.map((p) => (
                <>
                  <div className="detail-product-card">
                    <img
                      className="detail-product-card-img"
                      src={p.productId.img}
                      alt={p.productId.img}
                    />
                    <p className="detail-product-card-title">
                      {p.productId.title}
                    </p>
                    <p className="detail-product-card-price">
                      {formatCurrency(p.productId.price)}
                    </p>
                  </div>
                </>
              ))}
            </DialogContent>
            <DialogActions>
              <Button variant="danger" autoFocus onClick={handleClose}>
                Đóng
              </Button>
            </DialogActions>
          </BootstrapDialog>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrderList;
