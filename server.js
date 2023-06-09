const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the 'cors' package
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors()); // Use the 'cors' middleware

mongoose
  .connect('mongodb://127.0.0.1:27017/habit-hero', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

app.use(express.json());
app.use(authRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});