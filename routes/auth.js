const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: 'User already exists' });

    // Create new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    // Create and return a token
    const token = jwt.sign({ id: newUser._id }, 'your_jwt_secret');
    res.json({ token });
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    // Check if password is correct
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) return res.status(400).json({ error: 'Invalid credentials' });

    // Create and return a token
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
    res.json({ token });
});

module.exports = router;