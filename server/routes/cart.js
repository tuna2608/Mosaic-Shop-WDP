const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");
const Cart = require("../models/Cart");

const router = require("express").Router();

const CryptoJS = require("crypto-js");

// Add Cart

// Myself start - add to cart
router.post("/", verifyToken, async (req, res) => {
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) {
    cart = new Cart({
      userId: req.user.id,
    });
  }
  const { productId, quantity } = req.body;
  const item = cart.cartItems.find((item) => item.productId.equals(productId));
  if (item) {
    item.quantity += quantity;
  } else {
    cart.cartItems.push(req.body);
  }
  await cart.save();
  await cart.populate("cartItems.productId");
  res.status(200).json(cart);
});

// Update Cart
router.put("/decreaseQuantity", verifyToken, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id });

    const { cartItemID, quantity } = req.body;
    const item = cart.cartItems.find((item) => item._id.equals(cartItemID));
    if (quantity === 0) {
      item.quantity = 1;
    } else {
      item.quantity = quantity;
    }

    await cart.save();
    await cart.populate("cartItems.productId");
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete CartItem
router.delete("/:itemId", verifyToken, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    const remainItems = cart.cartItems.filter((item) => !(item._id.equals(req.params.itemId)));
    cart.cartItems = remainItems;
    if (cart.cartItems.length === 0) {
      await cart.deleteOne({ userId: req.user.id });
      return res.status(200).json({ message: "Cart deleted Successfully" })
    } else {
      await cart.save();
      await cart.populate("cartItems.productId")
      res.status(200).json(cart);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Delete Cart
router.delete("/", verifyToken, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    await cart.deleteOne({ userId: req.user.id });
    res.status(200).json({ message: "Cart deleted Successfully" })
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Get User Cart
router.get("/find/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate(
      "cartItems.productId"
    );
    res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Get all Carts || Only admin can view all carts
router.get("/findAll", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
