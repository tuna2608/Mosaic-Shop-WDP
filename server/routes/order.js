const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");
const Order = require("../models/Order");

const router = require("express").Router();

const CryptoJS = require("crypto-js");

// Add Order

router.post("/", async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    return res.status(200).json(savedOrder);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Update Order status
router.put("/:orderId", verifyTokenAndAdmin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    order.status = req.body.status;
    await order.save();

    const updatedOrders = await Order.find().populate("products.productId");
    res.status(200).json(updatedOrders);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete Order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted!");
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Get User Orders || 1 user may have more orders
router.get("/find/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).populate(
      "products.productId"
    );
    res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json(error);
  }
});


// gET all orders
router.get("/", async (req, res) => {
  try {
    let orders = await Order.find().sort({ createdAt: -1 }).populate("products.productId");
    res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Get monthly income
router.get("/income", async (req, res) => {
  const date = new Date(); // today is September
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1)); // -1 is August
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1)); // -1 is July

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
