const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contacto: {
    type: String,
    required: false
  },
  posicionx: {
    type: String,
    required: false
  },posiciony: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Client', clientSchema);