const express = require('express');
const Order = require('../models/Order');
const { verifyToken } = require('../middlewares/verifyToken');
const { verify } = require('jsonwebtoken');

const orderController = express.Router();

// Create new order
orderController.post('/', verifyToken, async (req, res) => {
  try {
    const newOrder = await Order.create({
      ...req.body,
      userId: req.user.id,
    });
    const populatedOrder = await Order.findById(newOrder._id).populate({
      path: 'userId',
      select: '-password', // exclude the password field
    });

    res.status(201).json(populatedOrder);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Get the order for user
orderController.get('/user/:userId', verifyToken, async(req,res) => {
    try {
        const orders = await Order.find({userId: req.params.userId}).populate({
            path: 'userId',
            select: '-password'
        })
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

module.exports = orderController
