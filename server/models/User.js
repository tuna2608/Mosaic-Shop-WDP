const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dOB: Date,
    address: { type: String },
    avatar: { type: String },
    phone: { type: String },
    title: {type: String},
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isShopowner: {
      type: Boolean,
      default: true,
    },
    gender:{type: Boolean},
    img: {type: String},
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
