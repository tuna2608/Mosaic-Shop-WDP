
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PayOs = require("@payos/node");

dotenv.config();

// Routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cartRoute = require("./routes/cart");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
// config

const cors = require("cors");
const Order = require("./models/Order");
const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  // origin: ['http://localhost:3000', 'http://localhost:4000'], 
  // methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  // allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  // credentials: true, // Enable credentials
  // optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.REACT_URL);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

const YOUR_DOMAIN = 'http://localhost:3000';

const payOS =  new PayOs(
  "19fb84d9-d711-4f16-b3cb-3c6c591ab89f",
  "95668af1-c06b-4c7a-bdb5-09e1b93b7063",
  "f5a611d7a1e44300b77bc354529f28c929cdc7b8e8626a6ce82b11ae4260bc7f"
);

app.use("api/checkout-payos/payment", async(req,res) => {
  const order = {
    amount: 10000,
    description: "Thanh toan",
    orderCode: 10,
    returnUrl: `${YOUR_DOMAIN}/success`,
    cancelUrl:`${YOUR_DOMAIN}/cancel`,
  }

  const paymentLink = await payos.createPymentLink(order);
  res.redirect(303,paymentLink.checkoutUrl); 
})

app.use("/api/checkout/payment/vietQR", async(req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    return res.status(200).json(savedOrder);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

app.use("/api/carts", cartRoute);

app.listen(process.env.PORT_NUMBER || 4000, () => {
  console.log("Server is running");
});
