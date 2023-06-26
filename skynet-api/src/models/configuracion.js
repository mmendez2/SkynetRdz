const mongoose = require("mongoose");

const configuracionSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  valor: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Client', clientSchema);