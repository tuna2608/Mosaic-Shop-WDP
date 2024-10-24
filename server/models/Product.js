const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    materials: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Thêm trường này
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
