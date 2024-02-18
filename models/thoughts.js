const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  content: { type: String, required: true },
  // Add more fields as per your requirement
});

module.exports = mongoose.model('thoughts', thoughtSchema);