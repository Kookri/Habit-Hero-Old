const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const config = require('../config');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    await user.save();

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

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).send({ error: 'Invalid password or email' });
  }

  try {
    await bcrypt.compare(password, user.password);

    const accessToken = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '7d' });

    // Store the refresh token in the user model
    user.refreshToken = refreshToken;
    await user.save();

    res.send({ accessToken, refreshToken });
  } catch (err) {
    return res.status(422).send({ error: 'Invalid password or email' });
  }
});

router.post('/token', async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(422).send({ error: 'Refresh token is required' });
  }

  // Find the user with the provided refresh token
  const user = await User.findOne({ refreshToken });

  if (!user) {
    return res.status(422).send({ error: 'Invalid refresh token' });
  }

  // Verify the refresh token
  try {
    jwt.verify(refreshToken, config.jwtSecret);
  } catch (err) {
    return res.status(422).send({ error: 'Invalid refresh token' });
  }

  // If the refresh token is valid, generate a new access token and refresh token
  const accessToken = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '15m' });
  const newRefreshToken = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '7d' });

  // Update the refresh token in the user model
  user.refreshToken = newRefreshToken;
  await user.save();

  // Send the new tokens
  res.send({ accessToken, refreshToken: newRefreshToken });
});

module.exports = router;

