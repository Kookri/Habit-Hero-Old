const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');
const config = require('./config');

const app = express();

// Enable CORS with specific options from config
app.use(cors(config.corsOptions));

// Parse JSON request bodies
app.use(express.json());

// Routes
app.use('/user', userRoutes);
app.use(authRoutes);

// Connect to MongoDB using URI from config
mongoose.connect(config.mongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB... Have you launched it?', err));

// Start the server using port from config
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
