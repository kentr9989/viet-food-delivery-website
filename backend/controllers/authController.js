const authController = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// register route
authController.post('/register', async (req, res) => {
  try {
    const isExisting = await User.findOne({ email: req.body.email });
    if (isExisting) {
      throw new Error('Account already exists with this email');
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    // extract password out for security
    const { password, ...others } = newUser._doc;
    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '4h' }
    );

    return res.status(201).json({ others, token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

//login route
authController.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error('Email or password is wrong');
    }

    const comparePass = await bcrypt.compare(req.body.password, user.password);
    if (!comparePass) {
      throw new Error('Email or password is wrong');
    }

    const { passWord, ...others } = user._doc;
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '4h' }
    );
    return res.status(201).json({ others, token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = authController;
