const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // replace with the address of your frontend
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); 

app.use('/user', userRoutes); 
app.use(authRoutes);

mongoose
  .connect('mongodb://127.0.0.1:27017/habit-hero', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
