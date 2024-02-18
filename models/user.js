const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  // Add more fields as per your requirement
});

module.exports = mongoose.model('user', userSchema);