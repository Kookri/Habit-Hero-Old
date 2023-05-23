const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config');
const User = require('../models/UserModel');

const router = express.Router();

// User sign-up route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Create a new user instance
    const user = new User({ username, email, password });
    await user.save();

    // Generate access token and refresh token
    const accessToken = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '7d' });

    // Store the refresh token in the user model
    user.refreshToken = refreshToken;
    await user.save();

    res.send({ accessToken, refreshToken });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

// User login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("supergoober", req.body)

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' });
  }

  try {
    // Find the user with the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(422).send({ error: 'Invalid email' });
    }

    // Compare the provided password with the hashed password stored in the user model
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(422).send({ error: 'Invalid password' });
    }

    // Generate access token and refresh token
    const accessToken = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '7d' });

    // Store the refresh token in the user model
    user.refreshToken = refreshToken;
    await user.save();

    res.send({ accessToken, refreshToken });
  } catch (err) {
    return res.status(500).send({ error: 'Internal server error' });
  }
});

// Token refresh route
router.post('/token', async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(422).send({ error: 'Refresh token is required' });
  }

  try {
    // Find the user with the provided refresh token
    const user = await User.findOne({ refreshToken });

    if (!user) {
      return res.status(422).send({ error: 'Invalid refresh token' });
    }

    // Verify the refresh token
    jwt.verify(refreshToken, config.jwtSecret);

    // If the refresh token is valid, generate a new access token and refresh token
    const accessToken = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '15m' });
    const newRefreshToken = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '7d' });

    // Update the refresh token in the user model
    user.refreshToken = newRefreshToken;
    await user.save();

    // Send the new tokens
    res.send({ accessToken, refreshToken: newRefreshToken });
  } catch (err) {
    return res.status(422).send({ error: 'Invalid refreshtoken' });
  }
  });
  
  module.exports = router;
