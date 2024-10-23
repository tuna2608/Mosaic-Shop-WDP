
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// Routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const payosRoute = require("./routes/payos");


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
  
app.use(cors());


app.use(express.json());

// routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout-payos", payosRoute);


app.listen(process.env.PORT_NUMBER || 4000, () => {
  console.log("Server is running");
});
