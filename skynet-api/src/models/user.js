const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
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
  rol: {
    type: Number,
    required: true

  }
  
  
});

module.exports = mongoose.model('User', userSchema);