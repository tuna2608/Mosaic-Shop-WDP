
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

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
// config

const cors = require("cors");

const corsOptions = {
  origin:['http://localhost:3000','http://localhost:4000','https://pay.payos.vn/web'],
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
  // origin: ['http://localhost:3000', 'http://localhost:4000'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  // allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  // credentials: true, // Enable credentials
  // optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
// app.use(cors());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  // res.setHeader("Access-Control-Allow-Origin", process.env.REACT_URL);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  // res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS'); // Allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
  // if (req.method === 'OPTIONS') {
  //   return res.sendStatus(200); // Respond to preflight requests
  // }

  // Request methods you wish to allow
  // res.setHeader(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  // );

  // Request headers you wish to allow
  // res.setHeader(
  //   "Access-Control-Allow-Headers",
  //   "X-Requested-With,content-type"
  // );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(express.json());

// routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout-payos", payosRoute);
// app.use("/api/checkout", stripeRoute);


// app.use("/api/checkout/payment/vietQR", async(req, res) => {
//   const newOrder = new Order(req.body);
//   try {
//     const savedOrder = await newOrder.save();
//     return res.status(200).json(savedOrder);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json(error);
//   }
// });


app.listen(process.env.PORT_NUMBER || 4000, () => {
  console.log("Server is running");
});
