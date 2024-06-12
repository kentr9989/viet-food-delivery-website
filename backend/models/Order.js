const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  amount: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  review: {
    type: String,
  },
  status: {
    type: String,
    default: 'pending',
  },
});

module.exports = mongoose.model('Order', OrderSchema);