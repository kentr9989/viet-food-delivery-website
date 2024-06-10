const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const authController = require('./controllers/authController');
const productController = require('./controllers/productController');
const uploadController = require('./controllers/uploadController');

// connect db
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

connectDB();
app.use('/images', express.static('public/images'));
// Routes & middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authController);
app.use('/product', productController);
app.use('/upload', uploadController);
// app.get('/', (req, res) => {
//   res.send('Server is running');
// });

//  start server on port 4500
//  client on port 3000
app.listen(process.env.PORT, () => {
  console.log('server started');
});
