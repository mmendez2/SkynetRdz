const mongoose = require("mongoose");

const mailSchema = mongoose.Schema({
  destinatario: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  asunto: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('mail', clientSchema);