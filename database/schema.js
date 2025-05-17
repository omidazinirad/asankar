
const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  type: String,
  content: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', RequestSchema);
