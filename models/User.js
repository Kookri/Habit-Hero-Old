const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Before saving the user, hash the password
UserSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();

    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if (err) return next(err);

        this.password = passwordHash;
        next();
    });
});

module.exports = mongoose.model('User', UserSchema);