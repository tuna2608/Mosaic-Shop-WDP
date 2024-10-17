const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// REGISTER
router.post('/register', async (req, res) => {
  if (req.body.password !== req.body.confirmPassword) {
    return res.status(500).json("Passwords are not matched!")
  }
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } else {
      return res.status(401).json('User is registered!');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// Login
router.post('/login', async (req, res) => {
  try {
    // Get user from DB by req.body.email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json('User does not exist!');
    }
    // giải mã mật khẩu mã hóa
    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = decryptedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.status(401).json('Password is incorrect!');
    }

    // Sign a token (payload, secretKey, expiration)
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: '3d' }
    );

    const { password, ...others } = user._doc;

    return res.status(200).json({ ...others, accessToken });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
