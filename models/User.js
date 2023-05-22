// This model contains the database schema for users, and handles hashing passwords and storing the data in the mongodb. 

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the UserSchema using mongoose.Schema
const UserSchema = new mongoose.Schema({
  // Define the username field
  username: {
    type: String,
    required: true,
    unique: true,
  },
  // Define the email field
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Define the password field
  password: {
    type: String,
    required: true,
  },
  // Define the refreshToken field
  refreshToken: {
    type: String,
  }
});

// Define a pre-save middleware that automatically hashes the password before saving the user
UserSchema.pre('save', function(next) {
  const user = this;

  // If the password is not modified, proceed to the next middleware
  if (!user.isModified('password')) {
    return next();
  }

  // Hash the password using bcrypt with a salt of 10 rounds
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }

    // Replace the user's password with the hashed password
    user.password = hash;
    next();
  });
});

// Create the User model using mongoose.model
const User = mongoose.model('User', UserSchema);

// Export the User model 
// By exporting the User model, it can be imported and used in other parts of the application, such as the routes or controllers, to perform CRUD (Create, Read, Update, Delete) operations on user data.
module.exports = User;
